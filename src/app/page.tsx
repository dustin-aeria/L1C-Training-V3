import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  ClipboardCheck,
  FileText,
  Map,
  Scale,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const modules = [
  { number: 0, title: "Introduction", slug: "introduction" },
  { number: 1, title: "Air Law", slug: "air-law" },
  { number: 2, title: "Systems", slug: "systems" },
  { number: 3, title: "Human Factors", slug: "human-factors" },
  { number: 4, title: "Meteorology", slug: "meteorology" },
  { number: 5, title: "Navigation", slug: "navigation" },
  { number: 6, title: "Flight Operations", slug: "flight-operations" },
  { number: 7, title: "Theory of Flight", slug: "theory-of-flight" },
  { number: 8, title: "Radiotelephony", slug: "radiotelephony" },
  { number: 9, title: "Flight Review Prep", slug: "flight-review-prep" },
];

const sections = [
  {
    title: "Course Modules",
    description:
      "10 comprehensive slide presentations covering all TP 15530 knowledge requirements",
    href: "/modules",
    icon: BookOpen,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Practice Exams",
    description:
      "Test your knowledge with multiple choice and written Q&A practice questions",
    href: "/exams",
    icon: ClipboardCheck,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    title: "Study Notes",
    description:
      "Comprehensive reference notes for each module with print-to-PDF",
    href: "/study-notes",
    icon: FileText,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Volume Planner",
    description:
      "Interactive SORA operational volume calculator with live map visualization",
    href: "/volume-planner",
    icon: Map,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
  },
  {
    title: "Reference Guide",
    description:
      "Plain-language explanations of CARs Part IX, SORA, and operational requirements",
    href: "/reference",
    icon: Scale,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
  },
];

const highlights = [
  "Transport Canada TP 15530 compliant",
  "CARs Part IX Division VI coverage",
  "SORA v2.5 methodology",
  "BVLOS operations focus",
  "Interactive learning tools",
  "Flight reviewer preparation",
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <Badge variant="secondary" className="mb-4 animate-fade-in">
              Transport Canada Approved Curriculum
            </Badge>

            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-in-up">
              Level 1 Complex
              <span className="block text-primary">RPAS Operations</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl animate-fade-in-up stagger-1">
              Professional training for Beyond Visual Line of Sight (BVLOS)
              drone pilots. Master the knowledge requirements for Transport
              Canada&apos;s Level 1 Complex pilot certificate.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up stagger-2">
              <Button size="lg" asChild>
                <Link href="/modules">
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/volume-planner">Try Volume Planner</Link>
              </Button>
            </div>

            {/* Highlights */}
            <div className="mt-10 flex flex-wrap justify-center gap-3 animate-fade-in-up stagger-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1 text-sm text-muted-foreground"
                >
                  <CheckCircle className="h-3.5 w-3.5 text-primary" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Sections */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A complete training platform with interactive tools and
              comprehensive content
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <Link key={section.title} href={section.href} className={`group animate-fade-in-up stagger-${Math.min(index + 1, 5)}`}>
                <Card className="h-full card-hover hover:border-primary/50">
                  <CardHeader>
                    <div
                      className={`mb-2 flex h-12 w-12 items-center justify-center rounded-lg ${section.bgColor}`}
                    >
                      <section.icon className={`h-6 w-6 ${section.color}`} />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {section.title}
                    </CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-flex items-center text-sm font-medium text-primary">
                      Explore
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules Overview */}
      <section className="border-t bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Course Modules
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              10 comprehensive modules covering all TP 15530 knowledge areas
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {modules.map((module) => (
              <Link
                key={module.slug}
                href={`/modules/${module.slug}`}
                className="group"
              >
                <Card className="h-full card-hover hover:border-primary/50">
                  <CardContent className="flex items-center gap-3 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                      {module.number}
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {module.title}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/modules">
                View All Modules
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About This Course
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              This Level 1 Complex (L1C) training course is designed to meet
              Transport Canada&apos;s TP 15530 knowledge requirements for BVLOS
              operations. The course covers CARs Part IX Division VI
              regulations, the SORA risk assessment methodology, operational
              planning, and all essential knowledge areas for professional RPAS
              pilots.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The interactive Operational Volume Planner demonstrates how flight
              geography, contingency volumes, and ground risk buffers are
              calculated under the SORA framework — an essential skill for L1C
              operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
