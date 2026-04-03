import Link from "next/link";
import { ArrowRight, ClipboardCheck, BookOpen, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllExams } from "@/lib/exams";

export default function ExamsPage() {
  const exams = getAllExams();

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex justify-center animate-scale-in">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100">
              <ClipboardCheck className="h-7 w-7 text-amber-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl animate-fade-in-up">
            Practice Exams
          </h1>
          <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up stagger-1">
            Test your knowledge with practice quizzes covering the L1C course material.
            Questions are designed to match the style and difficulty of the Transport Canada exam.
          </p>
        </div>

        {/* Exam Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
          {exams.map((exam, index) => (
            <Link
              key={exam.slug}
              href={`/exams/${exam.slug}`}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms`, animationFillMode: 'backwards' }}
            >
              <Card className="h-full card-hover hover:border-amber-500/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">
                      {exam.questionCount} Questions
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      ~{Math.ceil(exam.questionCount * 1.5)} min
                    </div>
                  </div>
                  <CardTitle className="mt-2 group-hover:text-amber-600 transition-colors">
                    {exam.title}
                  </CardTitle>
                  <CardDescription>{exam.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-flex items-center text-sm font-medium text-amber-600">
                    Start Quiz
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Question Types Legend */}
        <div className="mt-12 mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
                Question Types
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="font-medium text-sm">Multiple Choice</p>
                    <p className="text-xs text-muted-foreground">Select one correct answer</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="font-medium text-sm">True/False</p>
                    <p className="text-xs text-muted-foreground">Determine if statement is correct</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="font-medium text-sm">Select All That Apply</p>
                    <p className="text-xs text-muted-foreground">Multiple correct answers possible</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="font-medium text-sm">Fill in the Blank</p>
                    <p className="text-xs text-muted-foreground">Complete the statement</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Info Box */}
        <div className="mt-6 mx-auto max-w-2xl">
          <Card className="border-amber-200 bg-amber-50/50">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Pass Requirement:</strong> The Transport Canada L1C exam requires 80% (40/50 questions) to pass.
                Use these practice quizzes to identify knowledge gaps and build confidence before attempting the official exam.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
