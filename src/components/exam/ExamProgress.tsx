"use client";

import { cn } from "@/lib/utils";

interface ExamProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  answeredQuestions: Set<number>;
  correctQuestions: Set<number>;
  incorrectQuestions: Set<number>;
  onJumpToQuestion: (index: number) => void;
}

export function ExamProgress({
  currentQuestion,
  totalQuestions,
  answeredQuestions,
  correctQuestions,
  incorrectQuestions,
  onJumpToQuestion,
}: ExamProgressProps) {
  const progress = (answeredQuestions.size / totalQuestions) * 100;

  return (
    <div className="space-y-3">
      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          {answeredQuestions.size} / {totalQuestions}
        </span>
      </div>

      {/* Question dots */}
      <div className="flex flex-wrap gap-1.5">
        {Array.from({ length: totalQuestions }, (_, i) => {
          const questionNum = i + 1;
          const isCurrent = currentQuestion === i;
          const isAnswered = answeredQuestions.has(questionNum);
          const isCorrect = correctQuestions.has(questionNum);
          const isIncorrect = incorrectQuestions.has(questionNum);

          let dotStyle = "bg-muted hover:bg-muted-foreground/30";

          if (isCorrect) {
            dotStyle = "bg-green-500";
          } else if (isIncorrect) {
            dotStyle = "bg-red-500";
          } else if (isAnswered) {
            dotStyle = "bg-primary/50";
          }

          return (
            <button
              key={questionNum}
              onClick={() => onJumpToQuestion(i)}
              className={cn(
                "w-6 h-6 rounded text-xs font-medium transition-all",
                dotStyle,
                isCurrent && "ring-2 ring-primary ring-offset-2 ring-offset-background",
                isCorrect || isIncorrect ? "text-white" : "text-foreground/70"
              )}
              title={`Question ${questionNum}`}
            >
              {questionNum}
            </button>
          );
        })}
      </div>
    </div>
  );
}
