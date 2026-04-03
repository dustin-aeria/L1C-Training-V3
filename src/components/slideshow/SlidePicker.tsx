"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface SlidePickerProps {
  slides: { id: string; title: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (index: number) => void;
}

export function SlidePicker({
  slides,
  currentIndex,
  isOpen,
  onClose,
  onSelectSlide,
}: SlidePickerProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Jump to Slide</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-1">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(index);
                  onClose();
                }}
                className={cn(
                  "flex flex-col items-start p-3 rounded-lg border text-left transition-all hover:border-primary hover:bg-primary/5",
                  index === currentIndex
                    ? "border-primary bg-primary/10"
                    : "border-border"
                )}
              >
                <span className="text-xs font-medium text-muted-foreground mb-1">
                  Slide {index + 1}
                </span>
                <span className="text-sm font-medium text-foreground line-clamp-2">
                  {slide.title || `Slide ${index + 1}`}
                </span>
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
