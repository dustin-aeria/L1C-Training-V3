"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface RevealSectionProps {
  type: "answer" | "instructor" | "discussion";
  title?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const typeConfig = {
  answer: {
    icon: Eye,
    closedIcon: EyeOff,
    label: "Show Answer",
    closedLabel: "Hide Answer",
    containerClass: "reveal-answer",
    headerClass: "bg-gradient-to-r from-emerald-500 to-teal-500",
  },
  instructor: {
    icon: Eye,
    closedIcon: EyeOff,
    label: "Show Instructor Notes",
    closedLabel: "Hide Instructor Notes",
    containerClass: "reveal-instructor",
    headerClass: "bg-gradient-to-r from-purple-600 to-violet-600",
  },
  discussion: {
    icon: Eye,
    closedIcon: EyeOff,
    label: "Show Discussion Guide",
    closedLabel: "Hide Discussion Guide",
    containerClass: "reveal-discussion",
    headerClass: "bg-gradient-to-r from-amber-500 to-orange-500",
  },
};

export function RevealSection({
  type,
  title,
  children,
  defaultOpen = false,
}: RevealSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const config = typeConfig[type];
  const Icon = isOpen ? config.closedIcon : config.icon;

  return (
    <div className={cn("reveal-section", config.containerClass, isOpen && "is-open")}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "reveal-header w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg text-white font-semibold text-sm transition-all",
          config.headerClass,
          isOpen && "rounded-b-none"
        )}
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2">
          <Icon className="w-4 h-4" />
          <span>{title || (isOpen ? config.closedLabel : config.label)}</span>
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      <div
        className={cn(
          "reveal-content overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 bg-slate-50 dark:bg-slate-800/50 border border-t-0 border-slate-200 dark:border-slate-700 rounded-b-lg">
          {children}
        </div>
      </div>
    </div>
  );
}

// Render reveal sections from HTML content with data attributes
export function RevealSectionRenderer({ html }: { html: string }) {
  // This component is used to render reveal sections that were marked up in the HTML
  // The actual reveal logic is handled by the RevealSection component
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
