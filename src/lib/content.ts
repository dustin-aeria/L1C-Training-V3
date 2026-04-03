import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

// Module metadata
export const modules = [
  { number: 0, slug: "introduction", title: "Introduction", file: "L1C00_Introduction_Enhanced.md" },
  { number: 1, slug: "air-law", title: "Air Law", file: "L1C01_Air_Law_Enhanced.md" },
  { number: 2, slug: "systems", title: "Systems", file: "L1C02_Systems_Enhanced.md" },
  { number: 3, slug: "human-factors", title: "Human Factors", file: "L1C03_Human_Factors_Enhanced.md" },
  { number: 4, slug: "meteorology", title: "Meteorology", file: "L1C04_Meteorology_Enhanced.md" },
  { number: 5, slug: "navigation", title: "Navigation", file: "L1C05_Navigation_Enhanced.md" },
  { number: 6, slug: "flight-operations", title: "Flight Operations", file: "L1C06_Flight_Operations_Enhanced.md" },
  { number: 7, slug: "theory-of-flight", title: "Theory of Flight", file: "L1C07_Theory_of_Flight_Enhanced.md" },
  { number: 8, slug: "radiotelephony", title: "Radiotelephony", file: "L1C08_Radiotelephony_Enhanced.md" },
  { number: 9, slug: "flight-review-prep", title: "Flight Review Preparation", file: "L1C09_Flight_Review_Prep_Enhanced.md" },
];

// Source content directory - relative to project root
const CONTENT_DIR = path.join(process.cwd(), "content", "courses");

export function getModuleBySlug(slug: string) {
  return modules.find((m) => m.slug === slug);
}

export function getModuleSlugs() {
  return modules.map((m) => m.slug);
}

// Count words in text (rough estimate)
function countWords(text: string): number {
  return text.split(/\s+/).filter(word => word.length > 0).length;
}

// Target slide length for keyword-focused presentation
const TARGET_MIN_WORDS = 150;
const TARGET_MAX_WORDS = 400;
const TARGET_MAX_CHARS = 2000;

// Split markdown content into slides - enhanced for keyword-focused presentation
function splitIntoSlides(content: string): string[] {
  // Remove frontmatter if present
  const withoutFrontmatter = content.replace(/^---[\s\S]*?---\n/, "");

  // Split by SECTION headers as primary slide boundaries
  const sections = withoutFrontmatter.split(/\n(?=## SECTION \d+:)/);

  const slides: string[] = [];

  for (const section of sections) {
    const trimmed = section.trim();
    if (!trimmed) continue;

    const wordCount = countWords(trimmed);

    // If section is small enough, use as-is
    if (wordCount <= TARGET_MAX_WORDS && trimmed.length <= TARGET_MAX_CHARS) {
      if (trimmed.length > 100) {
        slides.push(trimmed);
      }
      continue;
    }

    // Split larger sections by ### subsections
    const subSections = trimmed.split(/\n(?=### \d+\.\d+)/);

    for (const sub of subSections) {
      const subTrimmed = sub.trim();
      if (!subTrimmed || subTrimmed.length < 100) continue;

      const subWordCount = countWords(subTrimmed);

      // If subsection is small enough, use as-is
      if (subWordCount <= TARGET_MAX_WORDS && subTrimmed.length <= TARGET_MAX_CHARS) {
        slides.push(subTrimmed);
        continue;
      }

      // Split by #### headers or blockquotes for very large subsections
      const chunks = subTrimmed.split(/\n(?=####\s|>\s*\*\*(?:Key Concept|Discussion Prompt|Instructor Note))/);

      let currentSlide = "";

      for (const chunk of chunks) {
        const chunkTrimmed = chunk.trim();
        if (!chunkTrimmed) continue;

        const chunkWords = countWords(chunkTrimmed);
        const currentWords = countWords(currentSlide);

        // If adding this chunk would exceed target, start new slide
        if (currentSlide && (currentWords + chunkWords > TARGET_MAX_WORDS ||
            (currentSlide + "\n\n" + chunkTrimmed).length > TARGET_MAX_CHARS)) {
          if (currentSlide.length > 100) {
            slides.push(currentSlide);
          }
          currentSlide = chunkTrimmed;
        } else {
          // Add to current slide
          currentSlide = currentSlide
            ? currentSlide + "\n\n" + chunkTrimmed
            : chunkTrimmed;
        }
      }

      // Don't forget the last accumulated slide
      if (currentSlide && currentSlide.length > 100) {
        slides.push(currentSlide);
      }
    }
  }

  // If no sections found, split by ## headers
  if (slides.length === 0) {
    const h2Sections = withoutFrontmatter.split(/\n(?=## )/);
    for (const section of h2Sections) {
      const trimmed = section.trim();
      if (trimmed && trimmed.length > 100) {
        slides.push(trimmed);
      }
    }
  }

  // Fallback: if still empty, return entire content as one slide
  if (slides.length === 0 && withoutFrontmatter.trim()) {
    slides.push(withoutFrontmatter.trim());
  }

  return slides;
}

// Configure marked for GFM (GitHub Flavored Markdown)
marked.setOptions({
  gfm: true,
  breaks: false,
});

// Extract title from slide content
function extractTitle(content: string): string {
  // Look for first heading
  const h1Match = content.match(/^#\s+(.+?)$/m);
  if (h1Match) return h1Match[1].replace(/[*_`]/g, "").trim().slice(0, 60);

  const h2Match = content.match(/^##\s+(.+?)$/m);
  if (h2Match) return h2Match[1].replace(/[*_`]/g, "").trim().slice(0, 60);

  const h3Match = content.match(/^###\s+(.+?)$/m);
  if (h3Match) return h3Match[1].replace(/[*_`]/g, "").trim().slice(0, 60);

  // Take first non-empty line if no heading
  const lines = content.split("\n").filter(l => l.trim());
  if (lines.length > 0) {
    return lines[0].slice(0, 50).replace(/[#*_`>]/g, "").trim() || "Slide";
  }

  return "Slide";
}

export async function getModuleSlides(slug: string) {
  const module = getModuleBySlug(slug);
  if (!module) {
    console.error(`Module not found for slug: ${slug}`);
    throw new Error(`Module not found: ${slug}`);
  }

  const filePath = path.join(CONTENT_DIR, module.file);
  console.log(`Loading module from: ${filePath}`);

  // Check if file exists
  let fileExists = false;
  try {
    fileExists = fs.existsSync(filePath);
  } catch (err) {
    console.error(`Error checking file existence: ${err}`);
  }

  if (!fileExists) {
    console.log(`File not found, returning placeholder: ${filePath}`);
    // Return placeholder slides if file not found
    const placeholderHtml = await marked.parse(
      `# ${module.title}\n\n## Module ${module.number}\n\nContent will be loaded from:\n\n\`${module.file}\`\n\nPlease ensure the source files are in the correct location.`
    );
    return {
      module,
      slides: [
        {
          id: "placeholder-1",
          title: module.title,
          content: placeholderHtml,
        },
      ],
    };
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content } = matter(fileContent);

    // Split into slides
    const slideContents = splitIntoSlides(content);
    console.log(`Found ${slideContents.length} slides for ${slug}`);

    // Parse each slide to HTML
    const slides = await Promise.all(
      slideContents.map(async (slideContent, index) => {
        try {
          const html = await marked.parse(slideContent);
          return {
            id: `slide-${index}`,
            title: extractTitle(slideContent),
            content: html,
          };
        } catch (err) {
          console.error(`Error parsing slide ${index}:`, err);
          // Return error slide
          return {
            id: `slide-${index}`,
            title: `Slide ${index + 1}`,
            content: `<h2>Slide ${index + 1}</h2><p>Error loading this slide content.</p>`,
          };
        }
      })
    );

    return {
      module,
      slides,
    };
  } catch (err) {
    console.error(`Error loading module ${slug}:`, err);
    throw err;
  }
}

// Get all modules with basic info for index page
export function getAllModules() {
  return modules.map((m) => ({
    number: m.number,
    slug: m.slug,
    title: m.title,
  }));
}
