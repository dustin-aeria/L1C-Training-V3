"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { QuestionCard } from "./QuestionCard";
import { ExamProgress } from "./ExamProgress";
import { ExamResults } from "./ExamResults";
import type { Exam } from "@/lib/exams";

interface ExamViewerProps {
  exam: Exam;
}

type ExamState = "taking" | "results";

export function ExamViewer({ exam }: ExamViewerProps) {
  const [state, setState] = useState<ExamState>("taking");
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Track answers for each question (question number -> array of selected option IDs)
  const [answers, setAnswers] = useState<Map<number, string[]>>(new Map());

  // Track which questions have been submitted
  const [submittedQuestions, setSubmittedQuestions] = useState<Set<number>>(new Set());

  // Track correct/incorrect
  const [correctQuestions, setCorrectQuestions] = useState<Set<number>>(new Set());
  const [incorrectQuestions, setIncorrectQuestions] = useState<Set<number>>(new Set());

  const question = exam.questions[currentQuestion];
  const questionNumber = currentQuestion + 1;
  const totalQuestions = exam.questions.length;

  const selectedAnswers = answers.get(questionNumber) || [];
  const isSubmitted = submittedQuestions.has(questionNumber);
  const isCorrect = correctQuestions.has(questionNumber);

  // Handle selecting an answer
  const handleSelectAnswer = useCallback(
    (optionId: string) => {
      const isMultiSelect = question.questionType === "select-all";

      setAnswers((prev) => {
        const newAnswers = new Map(prev);
        const current = newAnswers.get(questionNumber) || [];

        if (isMultiSelect) {
          // Toggle selection for multi-select
          if (current.includes(optionId)) {
            newAnswers.set(
              questionNumber,
              current.filter((id) => id !== optionId)
            );
          } else {
            newAnswers.set(questionNumber, [...current, optionId]);
          }
        } else {
          // Single selection
          newAnswers.set(questionNumber, [optionId]);
        }

        return newAnswers;
      });
    },
    [questionNumber, question.questionType]
  );

  // Submit the current answer
  const handleSubmitAnswer = useCallback(() => {
    if (selectedAnswers.length === 0) return;

    // Check if answer is correct
    const correctAnswerSet = new Set(question.correctAnswers);
    const selectedSet = new Set(selectedAnswers);

    const isAnswerCorrect =
      correctAnswerSet.size === selectedSet.size &&
      [...correctAnswerSet].every((a) => selectedSet.has(a));

    setSubmittedQuestions((prev) => new Set(prev).add(questionNumber));

    if (isAnswerCorrect) {
      setCorrectQuestions((prev) => new Set(prev).add(questionNumber));
    } else {
      setIncorrectQuestions((prev) => new Set(prev).add(questionNumber));
    }
  }, [selectedAnswers, question.correctAnswers, questionNumber]);

  // Navigation
  const goToPrevious = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }, [currentQuestion]);

  const goToNext = useCallback(() => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }, [currentQuestion, totalQuestions]);

  const goToQuestion = useCallback((index: number) => {
    setCurrentQuestion(index);
  }, []);

  // Finish exam
  const handleFinish = useCallback(() => {
    setState("results");
  }, []);

  // Restart exam
  const handleRestart = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers(new Map());
    setSubmittedQuestions(new Set());
    setCorrectQuestions(new Set());
    setIncorrectQuestions(new Set());
    setState("taking");
  }, []);

  // Review question from results
  const handleReviewQuestion = useCallback((index: number) => {
    setCurrentQuestion(index);
    setState("taking");
  }, []);

  // Check if all questions are answered
  const allAnswered = submittedQuestions.size === totalQuestions;
  const canFinish = allAnswered;

  if (state === "results") {
    return (
      <div className="min-h-[calc(100vh-theme(spacing.32))] p-6">
        <ExamResults
          examTitle={exam.title}
          questions={exam.questions}
          correctQuestions={correctQuestions}
          onRestart={handleRestart}
          onReviewQuestion={handleReviewQuestion}
        />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-theme(spacing.32))] flex flex-col">
      {/* Header */}
      <div className="border-b bg-muted/30 px-4 py-3 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/exams">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Exit
              </Link>
            </Button>
            <div className="h-6 w-px bg-border" />
            <h1 className="font-semibold text-foreground">{exam.title}</h1>
          </div>

          {canFinish && (
            <Button onClick={handleFinish} size="sm">
              View Results
            </Button>
          )}
        </div>
      </div>

      {/* Progress */}
      <div className="border-b px-4 py-3 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ExamProgress
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            answeredQuestions={submittedQuestions}
            correctQuestions={correctQuestions}
            incorrectQuestions={incorrectQuestions}
            onJumpToQuestion={goToQuestion}
          />
        </div>
      </div>

      {/* Question content */}
      <div className="flex-1 px-4 py-6 sm:px-6 sm:py-8">
        <div className="max-w-3xl mx-auto">
          <QuestionCard
            question={question}
            questionNumber={questionNumber}
            totalQuestions={totalQuestions}
            selectedAnswers={selectedAnswers}
            onSelectAnswer={handleSelectAnswer}
            showResult={isSubmitted}
            isCorrect={isCorrect}
          />
        </div>
      </div>

      {/* Navigation footer */}
      <div className="border-t px-4 py-3 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={goToPrevious}
            disabled={currentQuestion === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>

          <div className="flex gap-2">
            {!isSubmitted && (
              <Button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswers.length === 0}
              >
                <Check className="h-4 w-4 mr-1" />
                Submit Answer
              </Button>
            )}

            {isSubmitted && currentQuestion < totalQuestions - 1 && (
              <Button onClick={goToNext}>
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            )}

            {isSubmitted && currentQuestion === totalQuestions - 1 && (
              <Button onClick={handleFinish}>
                View Results
              </Button>
            )}
          </div>

          <Button
            variant="ghost"
            onClick={goToNext}
            disabled={currentQuestion === totalQuestions - 1}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
