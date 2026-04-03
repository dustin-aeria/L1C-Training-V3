"use client";

import { Flowchart, FlowchartNode } from "@/components/reference";
import { ComparisonTable, KeyValueTable } from "@/components/reference";
import { RegTooltip, Highlight, Callout } from "@/components/reference";
import Link from "next/link";
import { Shield, Eye, Radio, MapPin } from "lucide-react";

const operationDecisionTree: FlowchartNode[] = [
  {
    id: "start",
    type: "start",
    label: "What type of operation do you need?",
    description: "Consider your mission requirements: where you need to fly, visibility conditions, and risk level.",
    next: "q1",
  },
  {
    id: "q1",
    type: "decision",
    label: "Will you fly BVLOS?",
    description: "Beyond Visual Line of Sight — will the pilot or VO lose sight of the drone at any point?",
    yes: "bvlos",
    no: "q2",
  },
  {
    id: "q2",
    type: "decision",
    label: "Near people or controlled airspace?",
    description: "Will you fly closer than 30m to people, over people, or in controlled airspace?",
    yes: "advanced",
    no: "basic",
  },
  {
    id: "basic",
    type: "end",
    label: "Basic Operations",
    description: "Fly in uncontrolled airspace, >30m from people, VLOS only. Requires Basic certificate.",
    highlight: "success",
  },
  {
    id: "advanced",
    type: "end",
    label: "Advanced Operations",
    description: "Fly in controlled airspace, near/over people (with conditions), VLOS only. Requires Advanced certificate.",
    highlight: "info",
  },
  {
    id: "bvlos",
    type: "decision",
    label: "Standard BVLOS scenario (low risk)?",
    description: "Is your operation over sparsely populated areas with low air traffic?",
    yes: "l1c",
    no: "sfoc",
  },
  {
    id: "l1c",
    type: "end",
    label: "Level 1 Complex (L1C)",
    description: "BVLOS in approved scenarios via declaration. Requires L1C certificate and SORA assessment.",
    highlight: "warning",
  },
  {
    id: "sfoc",
    type: "end",
    label: "SFOC Required",
    description: "Special Flight Operations Certificate — individual approval from Transport Canada for complex/high-risk operations.",
    highlight: "danger",
  },
];

const comparisonData = [
  { feature: "Certificate Required", basic: "Basic", advanced: "Advanced", l1c: "L1C (+ Advanced)", sfoc: "Varies" },
  { feature: "VLOS Operations", basic: true, advanced: true, l1c: true, sfoc: true },
  { feature: "BVLOS Operations", basic: false, advanced: false, l1c: true, sfoc: true },
  { feature: "Controlled Airspace", basic: false, advanced: true, l1c: true, sfoc: true },
  { feature: "Over People", basic: false, advanced: "Limited", l1c: "With GRC", sfoc: true },
  { feature: "Fly at Night", basic: true, advanced: true, l1c: true, sfoc: true },
  { feature: "Max Altitude AGL", basic: "400 ft", advanced: "400 ft", l1c: "Declared", sfoc: "Approved" },
  { feature: "Authorization Method", basic: "Self-declare", advanced: "Self-declare", l1c: "Declaration", sfoc: "TC Approval" },
  { feature: "SORA Required", basic: false, advanced: false, l1c: true, sfoc: "Usually" },
  { feature: "Operations Manual", basic: false, advanced: false, l1c: true, sfoc: true },
  { feature: "Insurance Required", basic: "Recommended", advanced: "Recommended", l1c: true, sfoc: true },
];

const certificateRequirements = [
  { label: "Basic Certificate", value: "Online exam (35 questions, 65% pass)", note: "Small RPAS Exam (Basic)" },
  { label: "Advanced Certificate", value: "Online exam + flight review", note: "Small RPAS Exam (Advanced) + in-person review" },
  { label: "L1C Certificate", value: "Advanced + L1C training + flight review", note: "Requires approved training provider" },
];

export function OperationTypesContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600">
          Canadian drone regulations define four main categories of operations, each with different
          privileges and requirements. Understanding which category your operation falls into
          determines what certificate you need and how you can legally conduct your flights.
        </p>
      </div>

      {/* Quick Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border-2 border-green-500 bg-green-50 p-4">
          <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center mb-3">
            <Eye className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-bold text-green-800">Basic</h3>
          <p className="text-sm text-green-700 mt-1">VLOS only, away from people & controlled airspace</p>
        </div>

        <div className="rounded-xl border-2 border-blue-500 bg-blue-50 p-4">
          <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center mb-3">
            <Radio className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-bold text-blue-800">Advanced</h3>
          <p className="text-sm text-blue-700 mt-1">VLOS with access to controlled airspace & near people</p>
        </div>

        <div className="rounded-xl border-2 border-amber-500 bg-amber-50 p-4">
          <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center mb-3">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-bold text-amber-800">L1C</h3>
          <p className="text-sm text-amber-700 mt-1">BVLOS via SORA declaration in approved scenarios</p>
        </div>

        <div className="rounded-xl border-2 border-red-500 bg-red-50 p-4">
          <div className="w-10 h-10 rounded-lg bg-red-500 flex items-center justify-center mb-3">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-bold text-red-800">SFOC</h3>
          <p className="text-sm text-red-700 mt-1">Special approval for high-risk or unique operations</p>
        </div>
      </div>

      {/* Decision Tree */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Which Do You Need?</h2>
        <Flowchart
          title="Operation Type Decision Tree"
          nodes={operationDecisionTree}
          startNodeId="start"
        />
      </div>

      {/* Comparison Table */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Feature Comparison</h2>
        <ComparisonTable
          title="Basic vs Advanced vs L1C vs SFOC"
          items={comparisonData}
          showSFOC
        />
      </div>

      {/* Detailed Explanations */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Detailed Breakdown</h2>

        {/* Basic */}
        <div className="border-l-4 border-green-500 pl-6">
          <h3 className="text-xl font-bold text-green-800">Basic Operations</h3>
          <p className="text-slate-600 mt-2">
            The simplest category — suitable for recreational flying and low-risk commercial work.
            You can self-declare and start flying immediately after passing the online exam.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <div className="flex items-start gap-2">
              <Highlight variant="success">Allowed</Highlight>
              <span className="text-sm text-slate-600">Uncontrolled airspace (Class G)</span>
            </div>
            <div className="flex items-start gap-2">
              <Highlight variant="success">Allowed</Highlight>
              <span className="text-sm text-slate-600">More than 30m from bystanders</span>
            </div>
            <div className="flex items-start gap-2">
              <Highlight variant="danger">Not Allowed</Highlight>
              <span className="text-sm text-slate-600">Controlled airspace</span>
            </div>
            <div className="flex items-start gap-2">
              <Highlight variant="danger">Not Allowed</Highlight>
              <span className="text-sm text-slate-600">Over or near people</span>
            </div>
          </div>
        </div>

        {/* Advanced */}
        <div className="border-l-4 border-blue-500 pl-6">
          <h3 className="text-xl font-bold text-blue-800">Advanced Operations</h3>
          <p className="text-slate-600 mt-2">
            Unlocks controlled airspace and operations near people. Requires both an exam and
            a flight review with a certified evaluator.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <div className="flex items-start gap-2">
              <Highlight variant="success">Allowed</Highlight>
              <span className="text-sm text-slate-600">Controlled airspace (with authorization)</span>
            </div>
            <div className="flex items-start gap-2">
              <Highlight variant="success">Allowed</Highlight>
              <span className="text-sm text-slate-600">Within 30m of bystanders (not over)</span>
            </div>
            <div className="flex items-start gap-2">
              <Highlight variant="warning">Limited</Highlight>
              <span className="text-sm text-slate-600">Over people with safety declaration</span>
            </div>
            <div className="flex items-start gap-2">
              <Highlight variant="danger">Not Allowed</Highlight>
              <span className="text-sm text-slate-600">BVLOS operations</span>
            </div>
          </div>
        </div>

        {/* L1C */}
        <div className="border-l-4 border-amber-500 pl-6">
          <h3 className="text-xl font-bold text-amber-800">Level 1 Complex (L1C)</h3>
          <p className="text-slate-600 mt-2">
            <RegTooltip term="BVLOS" definition="Beyond Visual Line of Sight — operations where the pilot cannot maintain direct visual contact with the RPAS at all times." reference="CAR 101.01">
              BVLOS
            </RegTooltip>{" "}
            operations under a declaration system. Requires completing an approved L1C training course,
            conducting a SORA risk assessment, and operating under an RPOC or operator's certificate.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <div className="flex items-start gap-2">
              <Highlight variant="success">Allowed</Highlight>
              <span className="text-sm text-slate-600">BVLOS in declared scenarios</span>
            </div>
            <div className="flex items-start gap-2">
              <Highlight variant="success">Allowed</Highlight>
              <span className="text-sm text-slate-600">All Advanced privileges</span>
            </div>
            <div className="flex items-start gap-2">
              <Highlight variant="warning">Required</Highlight>
              <span className="text-sm text-slate-600">SORA risk assessment</span>
            </div>
            <div className="flex items-start gap-2">
              <Highlight variant="warning">Required</Highlight>
              <span className="text-sm text-slate-600">Operations manual & SMS</span>
            </div>
          </div>
        </div>

        {/* SFOC */}
        <div className="border-l-4 border-red-500 pl-6">
          <h3 className="text-xl font-bold text-red-800">SFOC (Special Flight Operations Certificate)</h3>
          <p className="text-slate-600 mt-2">
            For operations that don't fit the standard categories — very high risk, unusual scenarios,
            or operations that exceed L1C limitations. Requires individual approval from Transport Canada.
          </p>
          <Callout variant="important" title="When is SFOC needed?">
            <ul className="list-disc list-inside space-y-1">
              <li>BVLOS over populated areas with high GRC</li>
              <li>Operations above 400 ft AGL outside approved zones</li>
              <li>Operations that can't meet standard mitigations</li>
              <li>Experimental or research operations</li>
            </ul>
          </Callout>
        </div>
      </div>

      {/* Certificate Requirements */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Certificate Requirements</h2>
        <KeyValueTable
          title="How to Get Certified"
          items={certificateRequirements}
        />
      </div>

      {/* Links */}
      <div className="mt-12 p-6 bg-slate-100 rounded-xl">
        <h3 className="font-bold text-slate-900 mb-4">Related Topics</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/reference/sora-process" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            SORA Process
          </Link>
          <Link href="/reference/operational-volumes" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Operational Volumes
          </Link>
          <Link href="/reference/pilot-certificates" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Pilot Certificates
          </Link>
        </div>
      </div>
    </div>
  );
}
