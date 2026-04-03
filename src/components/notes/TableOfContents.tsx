"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, List } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TocItem } from "@/lib/notes";

interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Track scroll position to highlight current section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -80% 0px",
        threshold: 0,
      }
    );

    // Observe all heading elements
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Group items by level for better hierarchy display
  const renderTocItem = (item: TocItem, index: number) => {
    const isActive = activeId === item.id;
    const indent = (item.level - 1) * 12;

    return (
      <button
        key={`${item.id}-${index}`}
        onClick={() => scrollToSection(item.id)}
        className={cn(
          "w-full text-left py-1.5 px-2 rounded text-sm transition-colors hover:bg-muted",
          isActive
            ? "text-primary font-medium bg-primary/5"
            : "text-muted-foreground hover:text-foreground"
        )}
        style={{ paddingLeft: `${8 + indent}px` }}
      >
        <span className="line-clamp-2">{item.text}</span>
      </button>
    );
  };

  return (
    <nav className={cn("space-y-1", className)}>
      {/* Mobile collapse toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="lg:hidden flex items-center gap-2 w-full p-2 rounded-lg bg-muted/50 text-sm font-medium"
      >
        <List className="h-4 w-4" />
        <span>Table of Contents</span>
        {isCollapsed ? (
          <ChevronRight className="h-4 w-4 ml-auto" />
        ) : (
          <ChevronDown className="h-4 w-4 ml-auto" />
        )}
      </button>

      {/* TOC items */}
      <div
        className={cn(
          "lg:block",
          isCollapsed ? "hidden" : "block"
        )}
      >
        <div className="hidden lg:block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
          Contents
        </div>
        <div className="space-y-0.5 max-h-[60vh] overflow-y-auto">
          {items.map((item, index) => renderTocItem(item, index))}
        </div>
      </div>
    </nav>
  );
}
