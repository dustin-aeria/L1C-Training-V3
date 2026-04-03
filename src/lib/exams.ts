import fs from "fs";
import path from "path";

// Source content directory - relative to project root
const CONTENT_DIR = path.join(process.cwd(), "content", "courses");

// Exam metadata
export const exams = [
  {
    id: "day1",
    slug: "day-1",
    title: "Day 1 Quiz",
    description: "Air Law (L1C01) and Systems (L1C02)",
    file: "L1C_Quiz_Day1_Enhanced.md",
    questionCount: 21,
  },
  {
    id: "day2",
    slug: "day-2",
    title: "Day 2 Quiz",
    description: "Navigation (L1C05), Theory of Flight (L1C07), Radiotelephony (L1C08)",
    file: "L1C_Quiz_Day2_Enhanced.md",
    questionCount: 11,
  },
];

export interface QuestionOption {
  id: string;
  label: string;
  text: string;
}

export interface Question {
  id: number;
  category: string;
  bloomsLevel: string;
  questionText: string;
  questionType: "multiple-choice" | "true-false" | "select-all" | "fill-blank";
  options: QuestionOption[];
  correctAnswers: string[]; // Array of option IDs (e.g., ["a"] or ["a", "b"])
  explanation: string;
  reference: string;
}

export interface Exam {
  id: string;
  slug: string;
  title: string;
  description: string;
  questions: Question[];
}

export function getExamBySlug(slug: string) {
  return exams.find((e) => e.slug === slug);
}

export function getExamSlugs() {
  return exams.map((e) => e.slug);
}

export function getAllExams() {
  return exams.map((e) => ({
    id: e.id,
    slug: e.slug,
    title: e.title,
    description: e.description,
    questionCount: e.questionCount,
  }));
}

// Parse question text from markdown
function parseQuestionText(content: string): string {
  // Extract lines between the metadata line and options
  const lines = content.split("\n");
  const textLines: string[] = [];
  let foundMetadata = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Skip metadata line
    if (trimmed.startsWith("**Category:**")) {
      foundMetadata = true;
      continue;
    }

    // Stop at options
    if (trimmed.startsWith("- ☐") || trimmed.startsWith(">")) {
      break;
    }

    if (foundMetadata && trimmed) {
      textLines.push(trimmed);
    }
  }

  return textLines.join("\n").trim();
}

// Parse options from markdown
function parseOptions(content: string): QuestionOption[] {
  const options: QuestionOption[] = [];
  const optionRegex = /- ☐ ([a-z])\)\s*(.+)/g;

  let match;
  while ((match = optionRegex.exec(content)) !== null) {
    options.push({
      id: match[1],
      label: match[1].toUpperCase(),
      text: match[2].trim(),
    });
  }

  return options;
}

// Determine question type
function determineQuestionType(content: string, options: QuestionOption[]): Question["questionType"] {
  // Check for fill in the blank
  if (content.includes("Fill in the blank") || content.includes("fill in the blank")) {
    return "fill-blank";
  }

  // Check for select all
  if (content.includes("Select all") || content.includes("select all")) {
    return "select-all";
  }

  // Check for true/false
  if (options.length === 2) {
    const texts = options.map(o => o.text.toLowerCase());
    if (texts.includes("true") && texts.includes("false")) {
      return "true-false";
    }
  }

  return "multiple-choice";
}

// Parse correct answer(s) from the answer block
function parseCorrectAnswers(answerBlock: string): string[] {
  const answers: string[] = [];

  // Match patterns like "Answer: a)", "Answer: a) and b)", "Answer: a), b), c)"
  const answerLine = answerBlock.split("\n")[0];

  // Extract letter patterns
  const letterMatches = answerLine.match(/\b([a-z])\)/g);
  if (letterMatches) {
    for (const match of letterMatches) {
      answers.push(match.replace(")", ""));
    }
  }

  // Also check for fill-in-the-blank answers (just numbers or words after "Answer:")
  if (answers.length === 0) {
    const fillMatch = answerLine.match(/\*\*Answer:\s*([^*]+)\*\*/);
    if (fillMatch) {
      // For fill-in-blank, store the answer text
      answers.push(fillMatch[1].trim());
    }
  }

  return answers;
}

// Parse explanation from answer block
function parseExplanation(answerBlock: string): { explanation: string; reference: string } {
  const lines = answerBlock.split("\n");
  const explanationLines: string[] = [];
  let reference = "";

  let skipFirst = true;
  for (const line of lines) {
    const cleaned = line.replace(/^>\s*/, "").trim();

    // Skip the answer line
    if (skipFirst && cleaned.startsWith("**Answer:")) {
      skipFirst = false;
      // But include any text after the answer on the same line
      const afterAnswer = cleaned.replace(/\*\*Answer:[^*]+\*\*\s*/, "").trim();
      if (afterAnswer) {
        explanationLines.push(afterAnswer);
      }
      continue;
    }

    // Check for reference
    if (cleaned.startsWith("**Reference:**")) {
      reference = cleaned.replace("**Reference:**", "").trim();
      continue;
    }

    // Skip empty lines and other formatting
    if (cleaned && !cleaned.startsWith(">")) {
      explanationLines.push(cleaned);
    }
  }

  return {
    explanation: explanationLines.join(" ").replace(/\s+/g, " ").trim(),
    reference,
  };
}

// Parse metadata (category and Bloom's level)
function parseMetadata(content: string): { category: string; bloomsLevel: string } {
  const metaMatch = content.match(/\*\*Category:\*\*\s*([^|]+)\|\s*\*\*Bloom's Level:\*\*\s*([^\n]+)/);

  if (metaMatch) {
    return {
      category: metaMatch[1].trim(),
      bloomsLevel: metaMatch[2].trim().replace(/\s*\(.*\)/, ""), // Remove parenthetical like "(Select All)"
    };
  }

  return {
    category: "General",
    bloomsLevel: "Recall",
  };
}

// Parse a single question from its markdown block
function parseQuestion(questionBlock: string, questionNumber: number): Question {
  const { category, bloomsLevel } = parseMetadata(questionBlock);
  const questionText = parseQuestionText(questionBlock);
  const options = parseOptions(questionBlock);
  const questionType = determineQuestionType(questionBlock, options);

  // Extract answer block (everything in blockquotes after options)
  const answerBlockMatch = questionBlock.match(/>\s*\*\*Answer:[\s\S]+?(?=\n---|\n## |$)/);
  const answerBlock = answerBlockMatch ? answerBlockMatch[0] : "";

  const correctAnswers = parseCorrectAnswers(answerBlock);
  const { explanation, reference } = parseExplanation(answerBlock);

  return {
    id: questionNumber,
    category,
    bloomsLevel,
    questionText,
    questionType,
    options,
    correctAnswers,
    explanation,
    reference,
  };
}

// Load and parse exam from markdown file
export function loadExam(slug: string): Exam | null {
  const examMeta = getExamBySlug(slug);
  if (!examMeta) {
    console.error(`Exam not found for slug: ${slug}`);
    return null;
  }

  const filePath = path.join(CONTENT_DIR, examMeta.file);
  console.log(`Loading exam from: ${filePath}`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    console.error(`Exam file not found: ${filePath}`);
    return null;
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Split by question headers
    const questionBlocks = fileContent.split(/\n(?=## Question \d+)/);

    const questions: Question[] = [];
    let questionNumber = 1;

    for (const block of questionBlocks) {
      // Skip non-question blocks (like the header)
      if (!block.trim().startsWith("## Question")) {
        continue;
      }

      const question = parseQuestion(block, questionNumber);
      questions.push(question);
      questionNumber++;
    }

    console.log(`Parsed ${questions.length} questions for ${slug}`);

    return {
      id: examMeta.id,
      slug: examMeta.slug,
      title: examMeta.title,
      description: examMeta.description,
      questions,
    };
  } catch (err) {
    console.error(`Error loading exam ${slug}:`, err);
    return null;
  }
}
