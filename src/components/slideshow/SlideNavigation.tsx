"use client";

import { useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideNavigationProps {
  current: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onOpenPicker: () => void;
}

export function SlideNavigation({
  current,
  total,
  onPrevious,
  onNext,
  onGoToSlide,
  isFullscreen,
  onToggleFullscreen,
  onOpenPicker,
}: SlideNavigationProps) {
  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        onPrevious();
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        onNext();
      } else if (e.key === "Home") {
        e.preventDefault();
        onGoToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        onGoToSlide(total - 1);
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        onToggleFullscreen();
      } else if (e.key === "Escape" && isFullscreen) {
        e.preventDefault();
        onToggleFullscreen();
      } else if (e.key === "g" || e.key === "G") {
        e.preventDefault();
        onOpenPicker();
      }
    },
    [onPrevious, onNext, onGoToSlide, onToggleFullscreen, onOpenPicker, isFullscreen, total]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-background/95 backdrop-blur border-t">
      {/* Left side - Previous button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onPrevious}
        disabled={current === 0}
        title="Previous slide (←)"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      {/* Center - Slide counter and controls */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onOpenPicker}
          className="font-mono text-sm"
          title="Jump to slide (G)"
        >
          <Grid3X3 className="h-4 w-4 mr-2" />
          {current + 1} / {total}
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleFullscreen}
          title={isFullscreen ? "Exit fullscreen (Esc)" : "Fullscreen (F)"}
        >
          {isFullscreen ? (
            <Minimize className="h-4 w-4" />
          ) : (
            <Maximize className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Right side - Next button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onNext}
        disabled={current === total - 1}
        title="Next slide (→)"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
}
