import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// Source content directory
const CONTENT_DIR = path.resolve("C:/Users/Dusti/OneDrive/Desktop/level 1 Complex Training Page/New Material");

// Module metadata (reuse from content.ts structure)
export const studyNotes = [
  { slug: "introduction", title: "Introduction", file: "L1C00_Introduction_Enhanced.md", moduleNumber: 0 },
  { slug: "air-law", title: "Air Law", file: "L1C01_Air_Law_Enhanced.md", moduleNumber: 1 },
  { slug: "systems", title: "Systems", file: "L1C02_Systems_Enhanced.md", moduleNumber: 2 },
  { slug: "human-factors", title: "Human Factors", file: "L1C03_Human_Factors_Enhanced.md", moduleNumber: 3 },
  { slug: "meteorology", title: "Meteorology", file: "L1C04_Meteorology_Enhanced.md", moduleNumber: 4 },
  { slug: "navigation", title: "Navigation", file: "L1C05_Navigation_Enhanced.md", moduleNumber: 5 },
  { slug: "flight-operations", title: "Flight Operations", file: "L1C06_Flight_Operations_Enhanced.md", moduleNumber: 6 },
  { slug: "theory-of-flight", title: "Theory of Flight", file: "L1C07_Theory_of_Flight_Enhanced.md", moduleNumber: 7 },
  { slug: "radiotelephony", title: "Radiotelephony", file: "L1C08_Radiotelephony_Enhanced.md", moduleNumber: 8 },
  { slug: "flight-review-prep", title: "Flight Review Preparation", file: "L1C09_Flight_Review_Prep_Enhanced.md", moduleNumber: 9 },
];

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface StudyNote {
  slug: string;
  title: string;
  moduleNumber: number;
  content: string;
  toc: TocItem[];
  wordCount: number;
  readingTime: number;
}

export function getNoteBySlug(slug: string) {
  return studyNotes.find((n) => n.slug === slug);
}

export function getNoteSlugs() {
  return studyNotes.map((n) => n.slug);
}

export function getAllNotes() {
  return studyNotes.map((n) => ({
    slug: n.slug,
    title: n.title,
    moduleNumber: n.moduleNumber,
  }));
}

// Configure marked for GFM
marked.setOptions({
  gfm: true,
  breaks: false,
});

// Custom renderer to add IDs to headings for TOC navigation
function createCustomRenderer() {
  const renderer = new marked.Renderer();

  renderer.heading = function({ text, depth }: { text: string; depth: number }) {
    // Create slug from heading text
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    const id = `heading-${slug}`;

    return `<h${depth} id="${id}" class="scroll-mt-20">${text}</h${depth}>`;
  };

  return renderer;
}

// Extract TOC from markdown content
function extractToc(content: string): TocItem[] {
  const toc: TocItem[] = [];
  const headingRegex = /^(#{1,4})\s+(.+)$/gm;

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();

    // Skip instructor notes and very deep headings
    if (text.toLowerCase().includes('instructor note')) continue;
    if (level > 3) continue;

    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();

    toc.push({
      id: `heading-${slug}`,
      text: text.replace(/\*\*/g, '').replace(/\*/g, ''), // Remove markdown bold/italic
      level,
    });
  }

  return toc;
}

// Calculate reading time (average 200 words per minute)
function calculateReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}

// Count words
function countWords(content: string): number {
  return content.split(/\s+/).filter(word => word.length > 0).length;
}

// Remove instructor notes sections for student view
function removeInstructorNotes(content: string): string {
  // Remove sections starting with "## INSTRUCTOR NOTES" until the next ## heading
  let cleaned = content.replace(/## INSTRUCTOR NOTES[\s\S]*?(?=\n## [^I]|$)/gi, '');

  // Also remove inline instructor notes in blockquotes
  cleaned = cleaned.replace(/>\s*\*\*Instructor Note[^*]*\*\*[^\n]*\n?/gi, '');

  return cleaned;
}

// Load and parse study note from markdown file
export async function loadStudyNote(slug: string): Promise<StudyNote | null> {
  const noteMeta = getNoteBySlug(slug);
  if (!noteMeta) {
    console.error(`Study note not found for slug: ${slug}`);
    return null;
  }

  const filePath = path.join(CONTENT_DIR, noteMeta.file);
  console.log(`Loading study note from: ${filePath}`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    console.error(`Study note file not found: ${filePath}`);
    return null;
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content } = matter(fileContent);

    // Remove instructor notes for student-facing view
    const studentContent = removeInstructorNotes(content);

    // Extract TOC before parsing
    const toc = extractToc(studentContent);

    // Parse markdown to HTML with custom renderer
    const renderer = createCustomRenderer();
    const html = await marked.parse(studentContent, { renderer });

    // Calculate stats
    const wordCount = countWords(studentContent);
    const readingTime = calculateReadingTime(studentContent);

    console.log(`Parsed study note ${slug}: ${wordCount} words, ~${readingTime} min read, ${toc.length} TOC items`);

    return {
      slug: noteMeta.slug,
      title: noteMeta.title,
      moduleNumber: noteMeta.moduleNumber,
      content: html,
      toc,
      wordCount,
      readingTime,
    };
  } catch (err) {
    console.error(`Error loading study note ${slug}:`, err);
    return null;
  }
}
