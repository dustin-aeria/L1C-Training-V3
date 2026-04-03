"use client";

import { useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Printer, Clock, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "./TableOfContents";
import type { StudyNote } from "@/lib/notes";

interface NotesViewerProps {
  note: StudyNote;
  prevNote?: { slug: string; title: string } | null;
  nextNote?: { slug: string; title: string } | null;
}

export function NotesViewer({ note, prevNote, nextNote }: NotesViewerProps) {
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Print header - only visible when printing */}
      <div className="hidden print:block print:mb-8">
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <p className="text-sm text-gray-500">Aeria Solutions - L1C Training</p>
            <h1 className="text-2xl font-bold">{note.title}</h1>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p>Module {note.moduleNumber}</p>
            <p>{note.wordCount.toLocaleString()} words</p>
          </div>
        </div>
      </div>

      {/* Screen layout */}
      <div className="print:hidden">
        {/* Sticky header */}
        <div className="sticky top-16 z-10 bg-background/95 backdrop-blur border-b">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/study-notes">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    All Notes
                  </Link>
                </Button>
                <div className="hidden sm:block h-6 w-px bg-border" />
                <div className="hidden sm:flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    {note.wordCount.toLocaleString()} words
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    ~{note.readingTime} min read
                  </span>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={handlePrint}>
                <Printer className="mr-2 h-4 w-4" />
                Print PDF
              </Button>
            </div>
          </div>
        </div>

        {/* Main content area with sidebar */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-8">
            {/* Sidebar with TOC */}
            <aside className="lg:sticky lg:top-36 lg:self-start mb-8 lg:mb-0">
              <div className="lg:pr-4">
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    Module {note.moduleNumber}
                  </div>
                  <h1 className="text-2xl font-bold text-foreground">{note.title}</h1>
                </div>
                <TableOfContents items={note.toc} />
              </div>
            </aside>

            {/* Main content */}
            <main>
              <article
                className="prose prose-lg prose-slate dark:prose-invert max-w-none
                  prose-headings:text-foreground prose-headings:scroll-mt-24
                  prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6
                  prose-h2:text-2xl prose-h2:font-semibold prose-h2:mb-4 prose-h2:mt-12 prose-h2:pb-2 prose-h2:border-b
                  prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-8
                  prose-h4:text-lg prose-h4:font-medium prose-h4:mb-2 prose-h4:mt-6
                  prose-p:text-foreground/90 prose-p:mb-4 prose-p:leading-relaxed
                  prose-ul:my-4 prose-ol:my-4
                  prose-li:text-foreground/90 prose-li:leading-relaxed
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:pl-4 prose-blockquote:py-2 prose-blockquote:pr-4 prose-blockquote:my-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                  prose-strong:font-semibold prose-strong:text-foreground
                  prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
                  prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
                  prose-table:w-full prose-table:border-collapse prose-table:my-6
                  prose-thead:bg-muted
                  prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-foreground prose-th:border prose-th:border-border
                  prose-td:px-4 prose-td:py-3 prose-td:text-foreground/90 prose-td:border prose-td:border-border
                  prose-hr:border-border prose-hr:my-8
                  prose-a:text-primary prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-primary/80
                  prose-img:rounded-lg prose-img:shadow-md"
                dangerouslySetInnerHTML={{ __html: note.content }}
              />

              {/* Navigation to prev/next modules */}
              <div className="mt-16 pt-8 border-t">
                <div className="flex items-center justify-between">
                  {prevNote ? (
                    <Link
                      href={`/study-notes/${prevNote.slug}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Previous</div>
                        <div className="font-medium">{prevNote.title}</div>
                      </div>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {nextNote ? (
                    <Link
                      href={`/study-notes/${nextNote.slug}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group text-right"
                    >
                      <div>
                        <div className="text-xs text-muted-foreground">Next</div>
                        <div className="font-medium">{nextNote.title}</div>
                      </div>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Print-only content */}
      <div
        className="hidden print:block prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: note.content }}
      />

      {/* Print footer */}
      <div className="hidden print:block print:mt-8 print:pt-4 print:border-t">
        <p className="text-xs text-gray-500 text-center">
          Aeria Solutions L1C Training Platform - {note.title} - Page <span className="print-page-number"></span>
        </p>
      </div>
    </div>
  );
}
