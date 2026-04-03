"use client";

import { NotesViewer } from "@/components/notes";
import type { StudyNote } from "@/lib/notes";

interface NotesViewerWrapperProps {
  note: StudyNote;
  prevNote?: { slug: string; title: string } | null;
  nextNote?: { slug: string; title: string } | null;
}

export function NotesViewerWrapper({ note, prevNote, nextNote }: NotesViewerWrapperProps) {
  return (
    <NotesViewer
      note={note}
      prevNote={prevNote}
      nextNote={nextNote}
    />
  );
}
