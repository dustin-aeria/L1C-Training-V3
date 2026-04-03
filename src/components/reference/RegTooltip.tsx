"use client";

import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface RegTooltipProps {
  children: ReactNode;
  term: string;
  definition: string;
  reference?: string; // e.g., "CAR 901.01"
  variant?: "term" | "regulation" | "acronym";
}

export function RegTooltip({
  children,
  term,
  definition,
  reference,
  variant = "term"
}: RegTooltipProps) {
  const variantStyles = {
    term: "border-b border-dotted border-teal-500 text-teal-700 hover:text-teal-800 hover:border-teal-600",
    regulation: "border-b border-dotted border-blue-500 text-blue-700 hover:text-blue-800 hover:border-blue-600",
    acronym: "border-b border-dotted border-amber-500 text-amber-700 hover:text-amber-800 hover:border-amber-600",
  };

  return (
    <Tooltip>
      <TooltipTrigger className={cn("cursor-help transition-colors", variantStyles[variant])}>
        {children}
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="max-w-sm p-0 overflow-hidden"
        sideOffset={5}
      >
        <div className="bg-slate-900 text-white">
          <div className="px-3 py-2 border-b border-slate-700">
            <div className="font-semibold text-sm">{term}</div>
            {reference && (
              <div className="text-xs text-slate-400 mt-0.5">{reference}</div>
            )}
          </div>
          <div className="px-3 py-2 text-sm text-slate-200">
            {definition}
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
}

// Inline highlight for important text
interface HighlightProps {
  children: ReactNode;
  variant?: "info" | "warning" | "success" | "danger";
}

export function Highlight({ children, variant = "info" }: HighlightProps) {
  const variantStyles = {
    info: "bg-blue-100 text-blue-800 border-blue-200",
    warning: "bg-amber-100 text-amber-800 border-amber-200",
    success: "bg-green-100 text-green-800 border-green-200",
    danger: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <span className={cn(
      "px-1.5 py-0.5 rounded border font-medium text-sm",
      variantStyles[variant]
    )}>
      {children}
    </span>
  );
}

// Section callout box
interface CalloutProps {
  children: ReactNode;
  title?: string;
  variant?: "info" | "warning" | "tip" | "important";
  reference?: string;
}

export function Callout({ children, title, variant = "info", reference }: CalloutProps) {
  const variantStyles = {
    info: {
      container: "bg-blue-50 border-blue-200",
      title: "text-blue-800",
      content: "text-blue-700",
    },
    warning: {
      container: "bg-amber-50 border-amber-200",
      title: "text-amber-800",
      content: "text-amber-700",
    },
    tip: {
      container: "bg-green-50 border-green-200",
      title: "text-green-800",
      content: "text-green-700",
    },
    important: {
      container: "bg-red-50 border-red-200",
      title: "text-red-800",
      content: "text-red-700",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={cn("rounded-lg border-2 p-4 my-4", styles.container)}>
      {title && (
        <div className={cn("font-semibold mb-2 flex items-center justify-between", styles.title)}>
          <span>{title}</span>
          {reference && <span className="text-xs font-normal opacity-70">{reference}</span>}
        </div>
      )}
      <div className={cn("text-sm", styles.content)}>
        {children}
      </div>
    </div>
  );
}

// Step indicator for processes
interface StepProps {
  number: number;
  title: string;
  children: ReactNode;
  active?: boolean;
}

export function Step({ number, title, children, active }: StepProps) {
  return (
    <div className={cn(
      "flex gap-4 p-4 rounded-lg transition-colors",
      active ? "bg-teal-50 border border-teal-200" : "hover:bg-slate-50"
    )}>
      <div className={cn(
        "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",
        active ? "bg-teal-500 text-white" : "bg-slate-200 text-slate-600"
      )}>
        {number}
      </div>
      <div className="flex-1">
        <h4 className={cn(
          "font-semibold",
          active ? "text-teal-800" : "text-slate-800"
        )}>
          {title}
        </h4>
        <div className="mt-1 text-sm text-slate-600">
          {children}
        </div>
      </div>
    </div>
  );
}
