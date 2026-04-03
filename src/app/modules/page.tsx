import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const modules = [
  {
    number: 0,
    title: "Introduction",
    slug: "introduction",
    description: "Course overview, objectives, and introduction to L1C operations",
    duration: "30 min",
  },
  {
    number: 1,
    title: "Air Law",
    slug: "air-law",
    description: "CARs Part IX, Division VI, Standards 921/922, and regulatory framework",
    duration: "90 min",
  },
  {
    number: 2,
    title: "Systems",
    slug: "systems",
    description: "RPAS components, C2 links, payloads, and system architecture",
    duration: "60 min",
  },
  {
    number: 3,
    title: "Human Factors",
    slug: "human-factors",
    description: "Crew resource management, fatigue, stress, and decision making",
    duration: "45 min",
  },
  {
    number: 4,
    title: "Meteorology",
    slug: "meteorology",
    description: "Weather assessment, forecasts, and operational weather limits",
    duration: "60 min",
  },
  {
    number: 5,
    title: "Navigation",
    slug: "navigation",
    description: "GNSS, map reading, coordinate systems, and flight planning",
    duration: "60 min",
  },
  {
    number: 6,
    title: "Flight Operations",
    slug: "flight-operations",
    description: "SORA methodology, operational volumes, risk assessment, and procedures",
    duration: "90 min",
  },
  {
    number: 7,
    title: "Theory of Flight",
    slug: "theory-of-flight",
    description: "Aerodynamics, performance, weight and balance for RPAS",
    duration: "45 min",
  },
  {
    number: 8,
    title: "Radiotelephony",
    slug: "radiotelephony",
    description: "Radio procedures, phraseology, and ATC communications",
    duration: "45 min",
  },
  {
    number: 9,
    title: "Flight Review Preparation",
    slug: "flight-review-prep",
    description: "Practical skills review and flight reviewer requirements",
    duration: "30 min",
  },
];

export default function ModulesPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4 animate-fade-in">
            10 Modules
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl animate-fade-in-up">
            Course Modules
          </h1>
          <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up stagger-1">
            Comprehensive slide presentations covering all Transport Canada TP 15530 knowledge requirements for Level 1 Complex operations.
          </p>
        </div>

        {/* Module Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((module, index) => (
            <Link
              key={module.slug}
              href={`/modules/${module.slug}`}
              className={`group animate-fade-in-up`}
              style={{ animationDelay: `${(index + 1) * 50}ms`, animationFillMode: 'backwards' }}
            >
              <Card className="h-full card-hover hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xl font-bold">
                      {module.number}
                    </div>
                    <Badge variant="outline">{module.duration}</Badge>
                  </div>
                  <CardTitle className="mt-4 group-hover:text-primary transition-colors">
                    {module.title}
                  </CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Start Module
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
