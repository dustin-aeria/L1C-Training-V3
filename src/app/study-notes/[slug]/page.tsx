import { notFound } from "next/navigation";
import { loadStudyNote, getNoteSlugs, getAllNotes } from "@/lib/notes";
import { NotesViewerWrapper } from "./NotesViewerWrapper";

interface StudyNotesPageProps {
  params: Promise<{ slug: string }>;
}

export default async function StudyNotePage({ params }: StudyNotesPageProps) {
  const { slug } = await params;

  // Validate slug
  const validSlugs = getNoteSlugs();
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  // Load note
  const note = await loadStudyNote(slug);

  if (!note) {
    notFound();
  }

  // Get prev/next notes for navigation
  const allNotes = getAllNotes();
  const currentIndex = allNotes.findIndex((n) => n.slug === slug);
  const prevNote = currentIndex > 0 ? allNotes[currentIndex - 1] : null;
  const nextNote = currentIndex < allNotes.length - 1 ? allNotes[currentIndex + 1] : null;

  return (
    <NotesViewerWrapper
      note={note}
      prevNote={prevNote}
      nextNote={nextNote}
    />
  );
}

export function generateStaticParams() {
  return getNoteSlugs().map((slug) => ({ slug }));
}

// Force dynamic rendering since we're reading files from disk
export const dynamic = "force-dynamic";
