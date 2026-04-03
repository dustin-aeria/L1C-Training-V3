"use client";

import { ExamViewer } from "@/components/exam";
import type { Exam } from "@/lib/exams";

interface ExamViewerWrapperProps {
  exam: Exam;
}

export function ExamViewerWrapper({ exam }: ExamViewerWrapperProps) {
  return <ExamViewer exam={exam} />;
}
