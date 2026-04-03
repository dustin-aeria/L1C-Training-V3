"use client";

import { RegTooltip, Highlight, Callout } from "@/components/reference";
import { ComparisonTable, KeyValueTable } from "@/components/reference";
import { Flowchart, FlowchartNode } from "@/components/reference";
import Link from "next/link";
import { Award, Clock, BookOpen, CheckCircle2 } from "lucide-react";

const certificateComparison = [
  { feature: "Exam Type", basic: "Online (35 Q)", advanced: "Online (50 Q)", l1c: "Course exam" },
  { feature: "Passing Grade", basic: "65%", advanced: "80%", l1c: "Per provider" },
  { feature: "Flight Review", basic: false, advanced: true, l1c: true },
  { feature: "Recency (24 months)", basic: true, advanced: true, l1c: true },
  { feature: "VLOS Privileges", basic: true, advanced: true, l1c: true },
  { feature: "BVLOS Privileges", basic: false, advanced: false, l1c: true },
  { feature: "Controlled Airspace", basic: false, advanced: true, l1c: true },
  { feature: "Near People (<30m)", basic: false, advanced: true, l1c: true },
  { feature: "Training Provider Required", basic: false, advanced: false, l1c: true },
];

const recencyRequirements = [
  { label: "Review Period", value: "Every 24 months", note: "From date of last review or initial certification" },
  { label: "Basic Recency", value: "Online recency exam", note: "Shorter version of initial exam" },
  { label: "Advanced Recency", value: "Flight review OR recency exam", note: "Flight review with certified evaluator preferred" },
  { label: "L1C Recency", value: "Flight review required", note: "Must demonstrate BVLOS competencies" },
];

const certificationPath: FlowchartNode[] = [
  {
    id: "start",
    type: "start",
    label: "Start: Get Certified",
    description: "Choose your certification path based on your operational needs.",
    next: "register",
  },
  {
    id: "register",
    type: "process",
    label: "Register Your Drone",
    description: "All drones 250g-25kg must be registered with Transport Canada before flying.",
    next: "q1",
  },
  {
    id: "q1",
    type: "decision",
    label: "Need controlled airspace or fly near people?",
    description: "Will you operate in controlled airspace or within 30m of bystanders?",
    yes: "advanced",
    no: "basic",
  },
  {
    id: "basic",
    type: "process",
    label: "Get Basic Certificate",
    description: "Pass the Small RPAS Exam (Basic) — 35 questions, 65% to pass, online.",
    next: "basic-done",
    highlight: "success",
  },
  {
    id: "basic-done",
    type: "decision",
    label: "Need more privileges later?",
    description: "You can upgrade to Advanced at any time.",
    yes: "advanced",
    no: "end-basic",
  },
  {
    id: "end-basic",
    type: "end",
    label: "Basic Certificate Complete",
    description: "You can fly VLOS in uncontrolled airspace, >30m from people.",
  },
  {
    id: "advanced",
    type: "process",
    label: "Get Advanced Certificate",
    description: "Pass Advanced exam (50 Q, 80%) + complete flight review with evaluator.",
    next: "q2",
    highlight: "info",
  },
  {
    id: "q2",
    type: "decision",
    label: "Need BVLOS operations?",
    description: "Will you fly beyond visual line of sight?",
    yes: "l1c",
    no: "end-advanced",
  },
  {
    id: "end-advanced",
    type: "end",
    label: "Advanced Certificate Complete",
    description: "You can fly VLOS in controlled airspace and near people.",
  },
  {
    id: "l1c",
    type: "process",
    label: "Get L1C Certificate",
    description: "Complete approved L1C training course + flight review demonstrating BVLOS competencies.",
    next: "end-l1c",
    highlight: "warning",
  },
  {
    id: "end-l1c",
    type: "end",
    label: "L1C Certificate Complete",
    description: "You can conduct BVLOS operations under declaration system.",
  },
];

export function PilotCertificatesContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600">
          Transport Canada issues three levels of RPAS pilot certificates, each with increasing privileges
          and requirements. Your certificate determines what operations you can legally conduct.
        </p>
      </div>

      {/* Certificate Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border-2 border-green-500 bg-green-50 p-6">
          <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-green-800 text-lg">Basic Certificate</h3>
          <p className="text-sm text-green-700 mt-2">Entry-level for recreational and simple commercial operations</p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle2 className="w-4 h-4" /> Online exam only
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle2 className="w-4 h-4" /> VLOS operations
            </div>
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle2 className="w-4 h-4" /> Uncontrolled airspace
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 border-blue-500 bg-blue-50 p-6">
          <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-blue-800 text-lg">Advanced Certificate</h3>
          <p className="text-sm text-blue-700 mt-2">Full VLOS privileges including controlled airspace</p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2 text-blue-700">
              <CheckCircle2 className="w-4 h-4" /> Exam + flight review
            </div>
            <div className="flex items-center gap-2 text-blue-700">
              <CheckCircle2 className="w-4 h-4" /> Controlled airspace
            </div>
            <div className="flex items-center gap-2 text-blue-700">
              <CheckCircle2 className="w-4 h-4" /> Near/over people
            </div>
          </div>
        </div>

        <div className="rounded-xl border-2 border-amber-500 bg-amber-50 p-6">
          <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-amber-800 text-lg">L1C Certificate</h3>
          <p className="text-sm text-amber-700 mt-2">BVLOS operations under declaration system</p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2 text-amber-700">
              <CheckCircle2 className="w-4 h-4" /> Approved training
            </div>
            <div className="flex items-center gap-2 text-amber-700">
              <CheckCircle2 className="w-4 h-4" /> BVLOS privileges
            </div>
            <div className="flex items-center gap-2 text-amber-700">
              <CheckCircle2 className="w-4 h-4" /> SORA competency
            </div>
          </div>
        </div>
      </div>

      {/* Certification Path Flowchart */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Certification Path</h2>
        <Flowchart
          title="How to Get Certified"
          nodes={certificationPath}
          startNodeId="start"
        />
      </div>

      {/* Comparison Table */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Certificate Comparison</h2>
        <ComparisonTable
          title="Basic vs Advanced vs L1C"
          items={certificateComparison}
        />
      </div>

      {/* Exam Details */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Exam Details</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-900">Basic Exam</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><strong>Questions:</strong> 35 multiple choice</li>
              <li><strong>Time limit:</strong> 60 minutes</li>
              <li><strong>Passing grade:</strong> 65% (23/35)</li>
              <li><strong>Topics:</strong> Regulations, airspace, weather, safety</li>
              <li><strong>Delivery:</strong> Online, any time</li>
              <li><strong>Cost:</strong> $10 CAD</li>
            </ul>
          </div>

          <div className="rounded-xl border bg-white p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900">Advanced Exam</h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><strong>Questions:</strong> 50 multiple choice</li>
              <li><strong>Time limit:</strong> 75 minutes</li>
              <li><strong>Passing grade:</strong> 80% (40/50)</li>
              <li><strong>Topics:</strong> All basic topics + controlled airspace, emergency procedures</li>
              <li><strong>Delivery:</strong> Online, any time</li>
              <li><strong>Cost:</strong> $10 CAD</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Flight Review */}
      <Callout variant="warning" title="Flight Review Requirement">
        <p>
          <strong>Advanced and L1C certificates</strong> require a flight review with a Transport Canada
          certified flight reviewer. The reviewer will assess your:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Pre-flight procedures and site assessment</li>
          <li>Normal flight maneuvers</li>
          <li>Emergency procedures</li>
          <li>Post-flight procedures</li>
          <li>For L1C: BVLOS-specific competencies</li>
        </ul>
      </Callout>

      {/* Recency */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Clock className="w-6 h-6" />
          Recency Requirements
        </h2>
        <p className="text-slate-600 mb-4">
          All pilot certificates must be kept current. You cannot exercise certificate privileges if
          more than 24 months have passed since your last review.
        </p>

        <KeyValueTable
          title="Recency Requirements by Certificate"
          items={recencyRequirements}
        />
      </div>

      <Callout variant="tip" title="Staying Current">
        <p>
          Set a calendar reminder 60 days before your certificate expires. This gives you time to
          schedule a flight review or complete a recency exam without rushing.
        </p>
      </Callout>

      {/* Links */}
      <div className="mt-12 p-6 bg-slate-100 rounded-xl">
        <h3 className="font-bold text-slate-900 mb-4">Related Topics</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/reference/operation-types" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Operation Types
          </Link>
          <Link href="/reference/cars-part-ix-overview" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            CARs Part IX
          </Link>
          <Link href="/reference/declarations" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Declarations
          </Link>
        </div>
      </div>
    </div>
  );
}
