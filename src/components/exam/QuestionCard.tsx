"use client";

import { cn } from "@/lib/utils";
import type { Question, QuestionOption } from "@/lib/exams";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswers: string[];
  onSelectAnswer: (optionId: string) => void;
  showResult: boolean;
  isCorrect: boolean | null;
}

export function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswers,
  onSelectAnswer,
  showResult,
  isCorrect,
}: QuestionCardProps) {
  const isMultiSelect = question.questionType === "select-all";

  const handleOptionClick = (optionId: string) => {
    if (showResult) return; // Don't allow changes after showing result
    onSelectAnswer(optionId);
  };

  const isOptionSelected = (optionId: string) => selectedAnswers.includes(optionId);
  const isOptionCorrect = (optionId: string) => question.correctAnswers.includes(optionId);

  return (
    <div className="space-y-6">
      {/* Question header */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 bg-primary/10 text-primary rounded font-medium">
            {question.category}
          </span>
          <span className="px-2 py-1 bg-muted rounded">
            {question.bloomsLevel}
          </span>
        </div>
        <span>
          Question {questionNumber} of {totalQuestions}
        </span>
      </div>

      {/* Question text */}
      <div className="text-lg sm:text-xl font-medium text-foreground leading-relaxed">
        {question.questionText}
      </div>

      {/* Multi-select hint */}
      {isMultiSelect && (
        <p className="text-sm text-muted-foreground italic">
          Select all that apply
        </p>
      )}

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option) => {
          const selected = isOptionSelected(option.id);
          const correct = isOptionCorrect(option.id);

          let optionStyle = "border-border hover:border-primary hover:bg-primary/5";

          if (showResult) {
            if (correct) {
              optionStyle = "border-green-500 bg-green-50 dark:bg-green-950/30";
            } else if (selected && !correct) {
              optionStyle = "border-red-500 bg-red-50 dark:bg-red-950/30";
            } else {
              optionStyle = "border-border opacity-60";
            }
          } else if (selected) {
            optionStyle = "border-primary bg-primary/10";
          }

          return (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              disabled={showResult}
              className={cn(
                "w-full flex items-start gap-4 p-4 rounded-lg border-2 text-left transition-all",
                optionStyle,
                !showResult && "cursor-pointer"
              )}
            >
              <span
                className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold text-sm",
                  showResult && correct
                    ? "border-green-500 bg-green-500 text-white"
                    : showResult && selected && !correct
                    ? "border-red-500 bg-red-500 text-white"
                    : selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted-foreground/30"
                )}
              >
                {option.label}
              </span>
              <span className="flex-1 text-foreground/90 pt-1">{option.text}</span>
            </button>
          );
        })}
      </div>

      {/* Explanation (shown after answer) */}
      {showResult && (
        <div
          className={cn(
            "p-4 rounded-lg border-l-4",
            isCorrect
              ? "bg-green-50 border-green-500 dark:bg-green-950/20"
              : "bg-amber-50 border-amber-500 dark:bg-amber-950/20"
          )}
        >
          <div className="flex items-center gap-2 mb-2">
            <span
              className={cn(
                "text-sm font-semibold",
                isCorrect ? "text-green-700 dark:text-green-400" : "text-amber-700 dark:text-amber-400"
              )}
            >
              {isCorrect ? "Correct!" : "Incorrect"}
            </span>
            <span className="text-sm text-muted-foreground">
              Answer: {question.correctAnswers.map(a => a.toUpperCase()).join(", ")}
            </span>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">
            {question.explanation}
          </p>
          {question.reference && (
            <p className="text-xs text-muted-foreground mt-2 italic">
              Reference: {question.reference}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
