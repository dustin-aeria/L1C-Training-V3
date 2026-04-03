"use client";

interface SlideProgressProps {
  current: number;
  total: number;
}

export function SlideProgress({ current, total }: SlideProgressProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="h-1.5 w-full bg-slate-200 overflow-hidden relative">
      {/* Progress fill with gradient */}
      <div
        className="h-full bg-gradient-to-r from-primary via-primary to-blue-400 transition-all duration-300 ease-out relative"
        style={{ width: `${progress}%` }}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </div>

      {/* Slide segment markers - only show if reasonable number of slides */}
      {total <= 40 && (
        <div className="absolute inset-0 flex">
          {Array.from({ length: total - 1 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 border-r border-white/50"
            />
          ))}
          <div className="flex-1" />
        </div>
      )}
    </div>
  );
}
