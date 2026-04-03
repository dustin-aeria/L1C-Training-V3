import Link from "next/link";
import { ArrowRight, FileText, Printer, BookOpen, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAllNotes } from "@/lib/notes";

// Estimated reading times and descriptions for each module
const noteDetails: Record<string, { description: string; pages: number }> = {
  introduction: {
    description: "Course objectives, L1C certification path, and regulatory overview",
    pages: 5,
  },
  "air-law": {
    description: "Complete CARs Part IX reference with Standards 921/922 summary",
    pages: 25,
  },
  systems: {
    description: "RPAS architecture, C2 links, payloads, and maintenance requirements",
    pages: 15,
  },
  "human-factors": {
    description: "CRM principles, threat & error management, fatigue and stress",
    pages: 12,
  },
  meteorology: {
    description: "Weather products, forecasts, and operational weather decision making",
    pages: 18,
  },
  navigation: {
    description: "GNSS systems, map reading, coordinates, and flight planning",
    pages: 14,
  },
  "flight-operations": {
    description: "Complete SORA methodology, operational volumes, and risk assessment",
    pages: 30,
  },
  "theory-of-flight": {
    description: "Aerodynamics, performance calculations, and flight envelopes",
    pages: 12,
  },
  radiotelephony: {
    description: "Radio procedures, standard phraseology, and communication protocols",
    pages: 10,
  },
  "flight-review-prep": {
    description: "Practical test standards and flight reviewer requirements",
    pages: 8,
  },
};

export default function StudyNotesPage() {
  const notes = getAllNotes();

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex justify-center animate-scale-in">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
              <FileText className="h-7 w-7 text-emerald-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl animate-fade-in-up">
            Study Notes
          </h1>
          <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up stagger-1">
            Comprehensive reference notes for each module. Read online with table of contents navigation, or print as clean PDFs for offline study.
          </p>
        </div>

        {/* Features */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
            <BookOpen className="h-4 w-4" />
            Table of contents navigation
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
            <Printer className="h-4 w-4" />
            Print-to-PDF export
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
            <Clock className="h-4 w-4" />
            Reading time estimates
          </div>
        </div>

        {/* Notes Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note, index) => {
            const details = noteDetails[note.slug] || { description: "", pages: 10 };
            return (
              <Link
                key={note.slug}
                href={`/study-notes/${note.slug}`}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 50}ms`, animationFillMode: 'backwards' }}
              >
                <Card className="h-full card-hover hover:border-emerald-500/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50">
                        Module {note.moduleNumber}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        ~{details.pages} pages
                      </span>
                    </div>
                    <CardTitle className="mt-2 group-hover:text-emerald-600 transition-colors">
                      {note.title}
                    </CardTitle>
                    <CardDescription>{details.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-flex items-center text-sm font-medium text-emerald-600">
                      Read Notes
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
