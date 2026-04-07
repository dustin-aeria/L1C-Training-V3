import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import topic content components
import { SoraProcessContent } from "./content/SoraProcess";
import { OperationalVolumesContent } from "./content/OperationalVolumes";
import { OperationTypesContent } from "./content/OperationTypes";
import { CarsOverviewContent } from "./content/CarsOverview";
import { PilotCertificatesContent } from "./content/PilotCertificates";
import { Standard922Content } from "./content/Standard922";
import { DeclarationsContent } from "./content/Declarations";
import { AirspaceRulesContent } from "./content/AirspaceRules";
import { SiteSurveyContent } from "./content/SiteSurvey";
import { GlossaryContent } from "./content/Glossary";
import { DensityAltitudeContent } from "./content/DensityAltitude";

const topics: Record<string, {
  title: string;
  description: string;
  component?: React.ComponentType;
}> = {
  "cars-part-ix-overview": {
    title: "CARs Part IX — The Big Picture",
    description: "Structure of Part IX, how to read regulation numbers, and the relationship between CARs, Standards, and ACs",
    component: CarsOverviewContent,
  },
  "pilot-certificates": {
    title: "Pilot Certificates & Recency",
    description: "Basic, Advanced, and L1C certificates — requirements, privileges, and renewal",
    component: PilotCertificatesContent,
  },
  "operation-types": {
    title: "Operation Types",
    description: "Basic, Advanced, L1C, SFOC — what you can fly and where",
    component: OperationTypesContent,
  },
  "sora-process": {
    title: "The SORA Process",
    description: "Step-by-step guide to the 10-step SORA risk assessment methodology",
    component: SoraProcessContent,
  },
  "operational-volumes": {
    title: "Operational Volumes Explained",
    description: "Flight Geography, Contingency Volume, and Ground Risk Buffer",
    component: OperationalVolumesContent,
  },
  "standard-922": {
    title: "Standard 922 — Safety Assurance",
    description: "Technical requirements for RPAS hardware and systems",
    component: Standard922Content,
  },
  declarations: {
    title: "Declarations & Compliance",
    description: "The declaration system, RPOC requirements, and operations manuals",
    component: DeclarationsContent,
  },
  "airspace-rules": {
    title: "Airspace Rules for RPAS",
    description: "Controlled vs uncontrolled airspace, aerodrome exclusions, and altitude limits",
    component: AirspaceRulesContent,
  },
  "site-survey-preflight": {
    title: "Site Survey & Pre-Flight",
    description: "Site survey requirements, pre-flight checklists, and emergency procedures",
    component: SiteSurveyContent,
  },
  glossary: {
    title: "Glossary & Quick Lookup",
    description: "Searchable definitions for all RPAS terms and acronyms",
    component: GlossaryContent,
  },
  "density-altitude": {
    title: "Density Altitude Calculator",
    description: "Calculate density altitude and understand its impact on RPAS performance",
    component: DensityAltitudeContent,
  },
};

interface ReferencePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ReferencePage({ params }: ReferencePageProps) {
  const { slug } = await params;
  const topic = topics[slug];

  if (!topic) {
    notFound();
  }

  const ContentComponent = topic.component;

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/reference">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All Reference Topics
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <Badge variant="secondary" className="mb-2 bg-teal-100 text-teal-700">
            Reference Guide
          </Badge>
          <h1 className="text-3xl font-bold text-foreground">
            {topic.title}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {topic.description}
          </p>
        </div>

        {/* Content */}
        {ContentComponent ? (
          <ContentComponent />
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/25 bg-muted/30 p-12 min-h-[400px]">
            <h2 className="text-xl font-semibold text-foreground">
              Content Coming Soon
            </h2>
            <p className="mt-2 text-center text-muted-foreground max-w-md">
              This reference topic is under development.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(topics).map((slug) => ({ slug }));
}
