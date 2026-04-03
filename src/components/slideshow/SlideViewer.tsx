"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { SlideContent, Slide } from "./SlideContent";
import { SlideNavigation } from "./SlideNavigation";
import { SlideProgress } from "./SlideProgress";
import { SlidePicker } from "./SlidePicker";
import { cn } from "@/lib/utils";

interface SlideViewerProps {
  slides: Slide[];
  moduleTitle: string;
  moduleNumber: number;
}

export function SlideViewer({ slides, moduleTitle, moduleNumber }: SlideViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | "none">("none");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0 || index >= slides.length || index === currentIndex) return;
      setDirection(index > currentIndex ? "right" : "left");
      setCurrentIndex(index);
    },
    [currentIndex, slides.length]
  );

  const goToPrevious = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const toggleFullscreen = useCallback(async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  }, []);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Touch/swipe support
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex flex-col bg-background",
        isFullscreen ? "fixed inset-0 z-50" : "min-h-[calc(100vh-theme(spacing.32))]"
      )}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header - Module info */}
      <div className={cn(
        "border-b bg-gradient-to-r from-primary/5 via-background to-primary/5 px-4 py-4 sm:px-6",
        isFullscreen && "hidden"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground font-bold text-lg shadow-lg">
              {moduleNumber}
            </div>
            <div>
              <h1 className="font-bold text-foreground text-lg">{moduleTitle}</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  Module {moduleNumber}
                </span>
                <span className="text-sm text-muted-foreground">
                  Slide {currentIndex + 1} of {slides.length}
                </span>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium text-primary">{Math.round(((currentIndex + 1) / slides.length) * 100)}%</span>
            <span>complete</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <SlideProgress current={currentIndex} total={slides.length} />

      {/* Slide content area */}
      <div className="flex-1 relative">
        {slides.map((slide, index) => (
          <SlideContent
            key={slide.id}
            slide={slide}
            isActive={index === currentIndex}
            direction={
              index === currentIndex
                ? "none"
                : index < currentIndex
                ? "left"
                : "right"
            }
          />
        ))}
      </div>

      {/* Navigation */}
      <SlideNavigation
        current={currentIndex}
        total={slides.length}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onGoToSlide={goToSlide}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onOpenPicker={() => setIsPickerOpen(true)}
      />

      {/* Slide picker dialog */}
      <SlidePicker
        slides={slides.map((s) => ({ id: s.id, title: s.title }))}
        currentIndex={currentIndex}
        isOpen={isPickerOpen}
        onClose={() => setIsPickerOpen(false)}
        onSelectSlide={goToSlide}
      />
    </div>
  );
}
