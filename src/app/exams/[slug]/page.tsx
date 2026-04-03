import { notFound } from "next/navigation";
import { loadExam, getExamSlugs } from "@/lib/exams";
import { ExamViewerWrapper } from "./ExamViewerWrapper";

interface ExamPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ExamPage({ params }: ExamPageProps) {
  const { slug } = await params;

  // Validate slug
  const validSlugs = getExamSlugs();
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  // Load exam
  const exam = loadExam(slug);

  if (!exam || exam.questions.length === 0) {
    notFound();
  }

  return <ExamViewerWrapper exam={exam} />;
}

export function generateStaticParams() {
  return getExamSlugs().map((slug) => ({ slug }));
}

// Force dynamic rendering since we're reading files from disk
export const dynamic = "force-dynamic";
