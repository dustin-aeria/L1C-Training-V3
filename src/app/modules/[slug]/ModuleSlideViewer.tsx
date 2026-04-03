"use client";

import { SlideViewer, Slide } from "@/components/slideshow";

interface ModuleSlideViewerProps {
  slides: Slide[];
  moduleTitle: string;
  moduleNumber: number;
}

export function ModuleSlideViewer({
  slides,
  moduleTitle,
  moduleNumber,
}: ModuleSlideViewerProps) {
  return (
    <SlideViewer
      slides={slides}
      moduleTitle={moduleTitle}
      moduleNumber={moduleNumber}
    />
  );
}
