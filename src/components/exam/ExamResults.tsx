"use client";

import { CheckCircle, XCircle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Question } from "@/lib/exams";

interface ExamResultsProps {
  examTitle: string;
  questions: Question[];
  correctQuestions: Set<number>;
  onRestart: () => void;
  onReviewQuestion: (index: number) => void;
}

export function ExamResults({
  examTitle,
  questions,
  correctQuestions,
  onRestart,
  onReviewQuestion,
}: ExamResultsProps) {
  const totalQuestions = questions.length;
  const correctCount = correctQuestions.size;
  const incorrectCount = totalQuestions - correctCount;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  // Pass threshold is 80%
  const passed = percentage >= 80;

  // Group questions by category
  const categoryResults = questions.reduce((acc, q, index) => {
    const category = q.category;
    if (!acc[category]) {
      acc[category] = { correct: 0, total: 0 };
    }
    acc[category].total++;
    if (correctQuestions.has(index + 1)) {
      acc[category].correct++;
    }
    return acc;
  }, {} as Record<string, { correct: number; total: number }>);

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Score circle */}
      <div className="text-center">
        <div
          className={`inline-flex items-center justify-center w-32 h-32 rounded-full border-8 ${
            passed
              ? "border-green-500 bg-green-50 dark:bg-green-950/30"
              : "border-red-500 bg-red-50 dark:bg-red-950/30"
          }`}
        >
          <div>
            <div
              className={`text-4xl font-bold ${
                passed ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
              }`}
            >
              {percentage}%
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-4">
          {passed ? "Congratulations!" : "Keep Practicing"}
        </h2>
        <p className="text-muted-foreground mt-1">
          {passed
            ? "You passed the quiz!"
            : "You need 80% to pass. Review the material and try again."}
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-muted/30 rounded-lg text-center">
          <div className="text-2xl font-bold text-foreground">{totalQuestions}</div>
          <div className="text-sm text-muted-foreground">Questions</div>
        </div>
        <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
            {correctCount}
          </div>
          <div className="text-sm text-green-600/70 dark:text-green-400/70">Correct</div>
        </div>
        <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg text-center">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">
            {incorrectCount}
          </div>
          <div className="text-sm text-red-600/70 dark:text-red-400/70">Incorrect</div>
        </div>
      </div>

      {/* Category breakdown */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Results by Category</h3>
        {Object.entries(categoryResults).map(([category, result]) => {
          const catPercent = Math.round((result.correct / result.total) * 100);
          return (
            <div key={category} className="flex items-center gap-3">
              <div className="flex-1">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground/80">{category}</span>
                  <span className="text-muted-foreground">
                    {result.correct}/{result.total} ({catPercent}%)
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      catPercent >= 80 ? "bg-green-500" : catPercent >= 60 ? "bg-amber-500" : "bg-red-500"
                    }`}
                    style={{ width: `${catPercent}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Question review list */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Review Questions</h3>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {questions.map((q, index) => {
            const isCorrect = correctQuestions.has(index + 1);
            return (
              <button
                key={q.id}
                onClick={() => onReviewQuestion(index)}
                className="w-full flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors text-left"
              >
                {isCorrect ? (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                )}
                <span className="text-sm text-muted-foreground w-8">Q{index + 1}</span>
                <span className="flex-1 text-sm text-foreground/80 line-clamp-1">
                  {q.questionText}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={onRestart} variant="outline" className="flex-1">
          <RotateCcw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
        <Button asChild className="flex-1">
          <Link href="/exams">
            <Home className="w-4 h-4 mr-2" />
            Back to Exams
          </Link>
        </Button>
      </div>
    </div>
  );
}
