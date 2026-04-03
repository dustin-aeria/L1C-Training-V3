"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp, Eye, EyeOff } from "lucide-react";

export interface Slide {
  id: string;
  title: string;
  content: string;
  type?: "title" | "content" | "question" | "discussion";
}

interface SlideContentProps {
  slide: Slide;
  isActive: boolean;
  direction: "left" | "right" | "none";
}

// Icon mapping for content enhancement
const ICONS = {
  keyPoint: "📌",
  keyConcept: "💡",
  discussion: "🎯",
  warning: "⚠️",
  permitted: "✅",
  procedure: "📋",
  reference: "🔗",
  instructor: "👨‍🏫",
  info: "ℹ️",
  before: "⏮️",
  after: "⏭️",
  question: "❓",
};

// Process HTML to enhance visual elements - KEYWORD-FOCUSED format
function enhanceContent(html: string): string {
  let enhanced = html;

  // ===== REGULATORY REFERENCE PILLS =====
  // Transform CARs references into clickable pills
  enhanced = enhanced.replace(
    /\b(CARs?\s*\d{3}(?:\.\d+)?)/gi,
    '<span class="topic-pill regulation">$1</span>'
  );

  // Transform other regulatory references
  enhanced = enhanced.replace(
    /\b(TP\s*\d{5})/gi,
    '<span class="topic-pill regulation">$1</span>'
  );

  // ===== KEY CONCEPT BOXES =====
  // Transform "Key Concept" blockquotes into styled callouts with emoji
  enhanced = enhanced.replace(
    /<blockquote>\s*<p><strong>Key Concept[^<]*<\/strong>([^]*?)<\/blockquote>/gi,
    `<div class="key-concept-box">
      <div class="key-concept-header">
        <span class="key-concept-emoji">${ICONS.keyConcept}</span>
        <span>KEY CONCEPT</span>
      </div>
      <div class="key-concept-content">$1</div>
    </div>`
  );

  // ===== DISCUSSION PROMPTS WITH REVEAL =====
  // Transform "Discussion Prompt" blockquotes into reveal sections
  enhanced = enhanced.replace(
    /<blockquote>\s*<p><strong>Discussion Prompt[^<]*<\/strong>([^]*?)<\/blockquote>/gi,
    `<div class="discussion-prompt-box reveal-section" data-reveal-type="discussion">
      <button class="reveal-header discussion-prompt-header" type="button" aria-expanded="false">
        <span class="flex items-center gap-2">
          <span class="discussion-emoji">${ICONS.discussion}</span>
          <span>DISCUSSION</span>
        </span>
        <svg class="reveal-chevron w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <div class="reveal-content discussion-content">$1</div>
    </div>`
  );

  // ===== INSTRUCTOR NOTES WITH REVEAL (HIDDEN BY DEFAULT) =====
  enhanced = enhanced.replace(
    /<blockquote>\s*<p><strong>Instructor Note[^<]*<\/strong>([^]*?)<\/blockquote>/gi,
    `<div class="instructor-note-box reveal-section" data-reveal-type="instructor">
      <button class="reveal-header instructor-note-header" type="button" aria-expanded="false">
        <span class="flex items-center gap-2">
          <span class="instructor-emoji">${ICONS.instructor}</span>
          <span>INSTRUCTOR NOTES</span>
        </span>
        <svg class="reveal-chevron w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <div class="reveal-content instructor-content collapsed">$1</div>
    </div>`
  );

  // ===== QUICK CHECK / KNOWLEDGE CHECK BOXES =====
  enhanced = enhanced.replace(
    /<blockquote>\s*<p><strong>Quick Check[^<]*<\/strong>([^]*?)<\/blockquote>/gi,
    `<div class="quick-check-box">
      <div class="quick-check-header">
        <span class="quick-check-emoji">${ICONS.question}</span>
        <span>QUICK CHECK</span>
      </div>
      <div class="quick-check-content">$1</div>
    </div>`
  );

  // ===== SCENARIO BOXES =====
  enhanced = enhanced.replace(
    /<blockquote>\s*<p><strong>Scenario[^<]*<\/strong>([^]*?)<\/blockquote>/gi,
    `<div class="scenario-box">
      <div class="scenario-header">
        <span class="scenario-emoji">${ICONS.discussion}</span>
        <span>SCENARIO</span>
      </div>
      <div class="scenario-content">$1</div>
    </div>`
  );

  // ===== INFO CALLOUTS (generic blockquotes) =====
  enhanced = enhanced.replace(
    /<blockquote>([^]*?)<\/blockquote>/g,
    `<div class="info-callout">
      <span class="info-icon">${ICONS.info}</span>
      <div class="info-content">$1</div>
    </div>`
  );

  // ===== CAPABILITY HEADERS =====
  // "What L1C unlocks" / "What L1C does NOT authorize"
  enhanced = enhanced.replace(
    /<p><strong>What L1C unlocks:<\/strong><\/p>/gi,
    `<div class="capability-header unlocks">
      <span class="capability-emoji">${ICONS.permitted}</span>
      <span>What L1C Unlocks</span>
    </div>`
  );

  enhanced = enhanced.replace(
    /<p><strong>What L1C does NOT authorize:<\/strong><\/p>/gi,
    `<div class="capability-header restricts">
      <span class="capability-emoji">${ICONS.warning}</span>
      <span>What L1C Does NOT Authorize</span>
    </div>`
  );

  // ===== BEFORE/AFTER COMPARISONS =====
  enhanced = enhanced.replace(
    /<p><strong>Before[^<]*:<\/strong><\/p>/gi,
    `<div class="comparison-header before">
      <span class="comparison-emoji">${ICONS.before}</span>
      <span>Before</span>
    </div>`
  );

  enhanced = enhanced.replace(
    /<p><strong>After[^<]*:<\/strong><\/p>/gi,
    `<div class="comparison-header after">
      <span class="comparison-emoji">${ICONS.after}</span>
      <span>After</span>
    </div>`
  );

  // ===== STEP MARKERS =====
  enhanced = enhanced.replace(
    /<p><strong>(Step \d+)[^<]*<\/strong>/gi,
    `<div class="step-marker">
      <span class="step-number">$1</span>
    </div><p><strong>`
  );

  // ===== TIER MARKERS =====
  enhanced = enhanced.replace(
    /<p><strong>(Tier \d+)[^<]*<\/strong>/gi,
    `<div class="tier-marker">$1</div><p><strong>`
  );

  // ===== BULLET POINT ENHANCEMENT =====
  // Convert list items with bold lead-ins into key-point format
  enhanced = enhanced.replace(
    /<li><strong>([^<]+)<\/strong>([^<]*)/gi,
    `<li class="key-point-item">
      <span class="key-point-icon">${ICONS.keyPoint}</span>
      <span class="key-point-lead">$1</span>
      <span class="key-point-context">$2</span>`
  );

  // ===== HEADER ENHANCEMENT =====
  // Add icons to H2 headers based on content patterns
  enhanced = enhanced.replace(
    /<h2>([^<]*(?:Warning|Caution|Restriction)[^<]*)<\/h2>/gi,
    `<h2 class="keyword-header warning">
      <span class="header-icon">${ICONS.warning}</span>
      <span class="header-text">$1</span>
    </h2>`
  );

  enhanced = enhanced.replace(
    /<h2>([^<]*(?:Procedure|Steps|Process|How to)[^<]*)<\/h2>/gi,
    `<h2 class="keyword-header procedure">
      <span class="header-icon">${ICONS.procedure}</span>
      <span class="header-text">$1</span>
    </h2>`
  );

  enhanced = enhanced.replace(
    /<h2>([^<]*(?:Key|Important|Critical|Essential)[^<]*)<\/h2>/gi,
    `<h2 class="keyword-header key">
      <span class="header-icon">${ICONS.keyConcept}</span>
      <span class="header-text">$1</span>
    </h2>`
  );

  // ===== ADDITIONAL CONTENT PATTERNS =====

  // "Important details:" sections
  enhanced = enhanced.replace(
    /<p><strong>Important details:<\/strong><\/p>/gi,
    `<div class="important-details-header">
      <span class="important-emoji">${ICONS.warning}</span>
      <span>Important Details</span>
    </div>`
  );

  // "Exam format:" and similar headers
  enhanced = enhanced.replace(
    /<p><strong>(Exam (?:format|content|tips)[^<]*):<\/strong><\/p>/gi,
    `<div class="exam-info-header">
      <span class="exam-emoji">${ICONS.procedure}</span>
      <span>$1</span>
    </div>`
  );

  // "Teaching approach:" for instructor content
  enhanced = enhanced.replace(
    /<p><strong>Teaching approach:<\/strong>/gi,
    `<div class="teaching-approach-header">
      <span class="teaching-emoji">${ICONS.instructor}</span>
      <span>Teaching Approach</span>
    </div><p>`
  );

  // "Common student misconceptions" header
  enhanced = enhanced.replace(
    /<p><strong>Common student misconceptions[^<]*:<\/strong><\/p>/gi,
    `<div class="misconceptions-header">
      <span class="misconceptions-emoji">${ICONS.warning}</span>
      <span>Common Misconceptions to Address</span>
    </div>`
  );

  // "Learning objectives" pattern
  enhanced = enhanced.replace(
    /<p><strong>Learning [Oo]bjectives?:<\/strong><\/p>/gi,
    `<div class="learning-objectives-header">
      <span class="objectives-emoji">${ICONS.discussion}</span>
      <span>Learning Objectives</span>
    </div>`
  );

  // "Note:" callouts inline
  enhanced = enhanced.replace(
    /<p><strong>Note:<\/strong>\s*/gi,
    `<p class="note-callout"><span class="note-icon">${ICONS.info}</span><strong>Note:</strong> `
  );

  // SAD/PVD definitions
  enhanced = enhanced.replace(
    /\b(SAD)\b(?!\s*=)/g,
    '<abbr class="abbr-pill" title="Safety Assurance Declaration">SAD</abbr>'
  );

  enhanced = enhanced.replace(
    /\b(PVD)\b(?!\s*=)/g,
    '<abbr class="abbr-pill" title="Pre-Validated Declaration">PVD</abbr>'
  );

  // BVLOS/VLOS/EVLOS highlighting
  enhanced = enhanced.replace(
    /\b(BVLOS)\b/g,
    '<span class="operation-type bvlos">BVLOS</span>'
  );

  enhanced = enhanced.replace(
    /\b(EVLOS)\b/g,
    '<span class="operation-type evlos">EVLOS</span>'
  );

  // RPOC highlighting
  enhanced = enhanced.replace(
    /\b(RPOC)\b/g,
    '<span class="cert-type rpoc">RPOC</span>'
  );

  return enhanced;
}

// Client-side reveal functionality
function useRevealSections(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const revealSections = container.querySelectorAll(".reveal-section");

    revealSections.forEach((section) => {
      const button = section.querySelector(".reveal-header") as HTMLButtonElement;
      const content = section.querySelector(".reveal-content") as HTMLElement;

      if (!button || !content) return;

      // Check if this is an instructor note (should be collapsed by default)
      const isInstructor = section.getAttribute("data-reveal-type") === "instructor";

      // Set initial state
      if (isInstructor) {
        content.classList.add("collapsed");
        button.setAttribute("aria-expanded", "false");
      }

      const handleClick = () => {
        const isExpanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!isExpanded));
        content.classList.toggle("collapsed");
        section.classList.toggle("is-open");

        // Rotate chevron
        const chevron = button.querySelector(".reveal-chevron");
        if (chevron) {
          chevron.classList.toggle("rotate-180");
        }
      };

      button.addEventListener("click", handleClick);

      // Cleanup
      return () => {
        button.removeEventListener("click", handleClick);
      };
    });
  }, [containerRef]);
}

export function SlideContent({ slide, isActive, direction }: SlideContentProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Reset scroll position when slide changes
  useEffect(() => {
    if (isActive && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [isActive, slide.id]);

  // Initialize reveal sections
  useRevealSections(contentRef);

  const enhancedContent = enhanceContent(slide.content);

  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col transition-all duration-300 ease-in-out",
        isActive
          ? "opacity-100 translate-x-0 z-10"
          : direction === "left"
          ? "opacity-0 -translate-x-8 z-0 pointer-events-none"
          : direction === "right"
          ? "opacity-0 translate-x-8 z-0 pointer-events-none"
          : "opacity-0 z-0 pointer-events-none"
      )}
    >
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 sm:px-8 lg:px-16 py-6 sm:py-10"
      >
        <div className="max-w-4xl mx-auto" ref={contentRef}>
          {/* Enhanced prose styling with keyword-focused layout */}
          <div
            className="slide-content prose prose-lg prose-slate dark:prose-invert max-w-none
              prose-headings:text-foreground prose-headings:scroll-mt-20
              prose-h1:text-2xl prose-h1:sm:text-3xl prose-h1:lg:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-h1:leading-tight prose-h1:text-primary prose-h1:border-b-2 prose-h1:border-primary/20 prose-h1:pb-4
              prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-slate-800 prose-h2:flex prose-h2:items-center prose-h2:gap-3
              prose-h3:text-lg prose-h3:sm:text-xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6 prose-h3:text-slate-700
              prose-h4:text-base prose-h4:sm:text-lg prose-h4:font-semibold prose-h4:mb-2 prose-h4:text-slate-600
              prose-p:text-base prose-p:sm:text-lg prose-p:text-slate-600 prose-p:mb-4 prose-p:leading-relaxed
              prose-ul:my-4 prose-ul:space-y-2
              prose-ol:my-4 prose-ol:space-y-2
              prose-li:text-base prose-li:sm:text-lg prose-li:text-slate-600 prose-li:leading-relaxed prose-li:marker:text-primary
              prose-strong:font-bold prose-strong:text-slate-800
              prose-em:text-primary prose-em:not-italic prose-em:font-medium
              prose-code:bg-slate-100 prose-code:text-primary prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:p-4 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:my-6 prose-pre:text-sm prose-pre:shadow-lg
              prose-table:w-full prose-table:border-collapse prose-table:text-sm prose-table:sm:text-base prose-table:my-6 prose-table:rounded-xl prose-table:overflow-hidden prose-table:shadow-md
              prose-thead:bg-primary prose-thead:text-primary-foreground
              prose-tr:border-b prose-tr:border-slate-200 prose-tr:even:bg-slate-50
              prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-sm prose-th:uppercase prose-th:tracking-wide
              prose-td:px-4 prose-td:py-3 prose-td:text-slate-600
              prose-hr:border-slate-200 prose-hr:my-8
              prose-a:text-primary prose-a:font-medium prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: enhancedContent }}
          />
        </div>
      </div>
    </div>
  );
}
