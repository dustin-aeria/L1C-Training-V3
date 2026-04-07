import Link from "next/link";
import { ArrowRight, Scale, BookOpen, Shield, Compass, FileCheck, MapPin, Radio, Search, Plane, ScrollText, Thermometer } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const referenceTopics = [
  {
    slug: "cars-part-ix-overview",
    title: "CARs Part IX — The Big Picture",
    description: "Structure of Part IX, how to read regulation numbers, and the relationship between CARs, Standards, and ACs",
    icon: ScrollText,
    tag: "Start Here",
  },
  {
    slug: "pilot-certificates",
    title: "Pilot Certificates & Recency",
    description: "Basic, Advanced, and L1C certificates — requirements, privileges, and renewal",
    icon: FileCheck,
    tag: "Essential",
  },
  {
    slug: "operation-types",
    title: "Operation Types",
    description: "Basic, Advanced, L1C, SFOC — what you can fly and where",
    icon: Plane,
    tag: "Essential",
  },
  {
    slug: "sora-process",
    title: "The SORA Process",
    description: "Step-by-step guide to the 10-step SORA risk assessment methodology",
    icon: Shield,
    tag: "Core",
  },
  {
    slug: "operational-volumes",
    title: "Operational Volumes Explained",
    description: "Flight Geography, Contingency Volume, and Ground Risk Buffer — what they mean and how they're calculated",
    icon: MapPin,
    tag: "Core",
  },
  {
    slug: "standard-922",
    title: "Standard 922 — Safety Assurance",
    description: "Technical requirements for RPAS hardware and systems, declarations and PVDs",
    icon: Shield,
  },
  {
    slug: "declarations",
    title: "Declarations & Compliance",
    description: "The declaration system, RPOC requirements, and operations manuals",
    icon: FileCheck,
  },
  {
    slug: "airspace-rules",
    title: "Airspace Rules for RPAS",
    description: "Controlled vs uncontrolled airspace, aerodrome exclusions, and altitude limits",
    icon: Compass,
  },
  {
    slug: "site-survey-preflight",
    title: "Site Survey & Pre-Flight",
    description: "Site survey requirements, pre-flight checklists, and emergency procedures",
    icon: MapPin,
  },
  {
    slug: "glossary",
    title: "Glossary & Quick Lookup",
    description: "Searchable definitions for all RPAS terms, acronyms, and regulatory references",
    icon: BookOpen,
  },
  {
    slug: "density-altitude",
    title: "Density Altitude Calculator",
    description: "Calculate density altitude and understand its impact on RPAS performance",
    icon: Thermometer,
    tag: "Tool",
  },
];

export default function ReferencePage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex justify-center animate-scale-in">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100">
              <Scale className="h-7 w-7 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl animate-fade-in-up">
            Reference Guide
          </h1>
          <p className="mt-4 text-lg text-muted-foreground animate-fade-in-up stagger-1">
            Plain-language explanations of Canadian drone regulations, the SORA methodology, and operational requirements. Your quick-reference companion for L1C operations.
          </p>
        </div>

        {/* Search */}
        <div className="mt-8 mx-auto max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search all reference content..."
              className="pl-10"
            />
          </div>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Search across all topics, definitions, and regulatory references
          </p>
        </div>

        {/* Topic Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {referenceTopics.map((topic, index) => (
            <Link
              key={topic.slug}
              href={`/reference/${topic.slug}`}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 50}ms`, animationFillMode: 'backwards' }}
            >
              <Card className="h-full card-hover hover:border-teal-500/50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                      <topic.icon className="h-5 w-5 text-teal-600" />
                    </div>
                    {topic.tag && (
                      <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50">
                        {topic.tag}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="mt-4 group-hover:text-teal-600 transition-colors">
                    {topic.title}
                  </CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-flex items-center text-sm font-medium text-teal-600">
                    Read Guide
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 mx-auto max-w-2xl">
          <Card className="border-teal-200 bg-teal-50/50">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">About this reference:</strong> This section presents regulations and SORA concepts in plain language. Hover over highlighted terms to see definitions. Click regulation references to see the actual CARs text. This is not a replacement for reading the regulations — it&apos;s a learning aid.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
