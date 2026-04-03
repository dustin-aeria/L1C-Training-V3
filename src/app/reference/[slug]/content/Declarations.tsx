"use client";

import { RegTooltip, Highlight, Callout } from "@/components/reference";
import { QuickTable, KeyValueTable } from "@/components/reference";
import { Flowchart, FlowchartNode } from "@/components/reference";
import Link from "next/link";
import { FileCheck, Building2, ClipboardList, Send } from "lucide-react";

const declarationTypes = [
  { type: "Safety Declaration", applies: "Advanced (over people)", description: "Declares RPAS meets safety requirements for flight over people" },
  { type: "L1C Declaration", applies: "Level 1 Complex", description: "Declares operation meets SORA requirements for BVLOS" },
  { type: "Manufacturer Declaration", applies: "All operations", description: "Manufacturer's statement of compliance with standards" },
  { type: "PVD", applies: "Advanced & L1C", description: "Pilot-Owner Verification Document for technical compliance" },
];

const rpocRequirements = [
  { label: "Operations Manual", value: "Required", note: "Documented procedures for all operations" },
  { label: "Safety Management System", value: "Required for L1C", note: "Systematic approach to safety" },
  { label: "Training Program", value: "Required", note: "Initial and recurrent training records" },
  { label: "Maintenance Program", value: "Required", note: "Scheduled and unscheduled maintenance procedures" },
  { label: "Record Keeping", value: "2 years minimum", note: "Flight logs, maintenance, training records" },
  { label: "Insurance", value: "Required for L1C", note: "Liability coverage for operations" },
];

const declarationProcess: FlowchartNode[] = [
  {
    id: "start",
    type: "start",
    label: "Prepare L1C Declaration",
    description: "Gather all required documentation before declaring.",
    next: "sora",
  },
  {
    id: "sora",
    type: "process",
    label: "Complete SORA Assessment",
    description: "Conduct the 10-step SORA process for your intended operation.",
    next: "opsmanual",
  },
  {
    id: "opsmanual",
    type: "process",
    label: "Develop Operations Manual",
    description: "Document all procedures, checklists, and emergency responses.",
    next: "pvd",
  },
  {
    id: "pvd",
    type: "process",
    label: "Obtain/Create PVD",
    description: "Verify your RPAS meets technical requirements (manufacturer docs or self-verification).",
    next: "rpoc-q",
  },
  {
    id: "rpoc-q",
    type: "decision",
    label: "Operating under RPOC?",
    description: "Are you working under an RPAS Pilot Operator Certificate holder?",
    yes: "submit-rpoc",
    no: "get-rpoc",
  },
  {
    id: "get-rpoc",
    type: "process",
    label: "Obtain RPOC or Work Under One",
    description: "Apply for your own RPOC or join an organization that has one.",
    next: "submit-rpoc",
  },
  {
    id: "submit-rpoc",
    type: "process",
    label: "Submit Declaration",
    description: "File your L1C declaration through the RPOC's processes.",
    next: "end",
    highlight: "success",
  },
  {
    id: "end",
    type: "end",
    label: "Declaration Active",
    description: "You can now conduct the declared BVLOS operations.",
  },
];

export function DeclarationsContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600">
          The Canadian RPAS framework uses a <RegTooltip term="Declaration System" definition="A regulatory approach where operators declare compliance with requirements rather than seeking individual approval for each operation. Shifts responsibility to the operator." reference="CAR 907">
            declaration system
          </RegTooltip> for many operations. Instead of getting pre-approval for every flight,
          you declare that your operation meets all applicable requirements.
        </p>
      </div>

      {/* Declaration Types */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Types of Declarations</h2>
        <QuickTable
          title="Declaration Types in Canadian RPAS Operations"
          columns={[
            { key: "type", header: "Declaration Type", width: "25%" },
            { key: "applies", header: "Applies To", width: "25%" },
            { key: "description", header: "Description", width: "50%" },
          ]}
          rows={declarationTypes}
        />
      </div>

      <Callout variant="important" title="Declaration = Responsibility">
        <p>
          When you make a declaration, you are <strong>legally asserting</strong> that you meet all requirements.
          Transport Canada can audit your operations at any time. If you can't demonstrate compliance,
          you face enforcement action. The declaration system is based on trust — don't abuse it.
        </p>
      </Callout>

      {/* RPOC */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Building2 className="w-6 h-6" />
          RPAS Pilot Operator Certificate (RPOC)
        </h2>
        <p className="text-slate-600 mb-4">
          L1C operations require working under an <RegTooltip term="RPOC" definition="RPAS Pilot Operator Certificate — an organizational certificate required for complex RPAS operations. The RPOC holder is responsible for safety management and regulatory compliance." reference="CAR 907.03">
            RPOC
          </RegTooltip>. This is an organizational certificate (like an airline's Air Operator Certificate)
          that provides oversight for complex operations.
        </p>

        <KeyValueTable
          title="RPOC Requirements"
          items={rpocRequirements}
        />
      </div>

      {/* Declaration Process */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">L1C Declaration Process</h2>
        <Flowchart
          title="Steps to Make an L1C Declaration"
          nodes={declarationProcess}
          startNodeId="start"
        />
      </div>

      {/* Operations Manual */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <ClipboardList className="w-6 h-6" />
          Operations Manual
        </h2>
        <p className="text-slate-600 mb-4">
          Your operations manual is the cornerstone of compliance. It documents how you conduct
          safe operations and must be followed by all crew members.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-white p-6">
            <h3 className="font-bold text-slate-900 mb-3">Required Sections</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Organization and responsibilities</li>
              <li>• Pilot qualifications and training</li>
              <li>• RPAS specifications and limitations</li>
              <li>• Normal operating procedures</li>
              <li>• Emergency procedures</li>
              <li>• Maintenance procedures</li>
            </ul>
          </div>

          <div className="rounded-xl border bg-white p-6">
            <h3 className="font-bold text-slate-900 mb-3">L1C-Specific Additions</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• SORA documentation</li>
              <li>• BVLOS procedures</li>
              <li>• Contingency procedures</li>
              <li>• Ground risk buffer management</li>
              <li>• Air risk mitigations</li>
              <li>• Visual observer protocols</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Record Keeping */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Record Keeping Requirements</h2>

        <div className="bg-slate-100 rounded-xl p-6">
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Flight Records</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>Date, time, location</li>
                <li>Pilot and crew names</li>
                <li>RPAS used</li>
                <li>Flight duration</li>
                <li>Any incidents or anomalies</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-2">Maintenance Records</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>Scheduled maintenance completed</li>
                <li>Component replacements</li>
                <li>Firmware updates</li>
                <li>Damage and repairs</li>
                <li>Pre-flight inspection logs</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-2">Training Records</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>Initial training dates</li>
                <li>Recurrent training</li>
                <li>Competency assessments</li>
                <li>Certificate expiry dates</li>
                <li>Specialized training (BVLOS)</li>
              </ul>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            <strong>Retention:</strong> All records must be kept for a minimum of 2 years and be available
            for Transport Canada inspection upon request.
          </p>
        </div>
      </div>

      <Callout variant="tip" title="Digital Record Keeping">
        <p>
          Consider using digital logbook apps or spreadsheets for record keeping. They make it easier to:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Search and retrieve records quickly</li>
          <li>Generate reports for audits</li>
          <li>Track maintenance schedules</li>
          <li>Back up data securely</li>
        </ul>
      </Callout>

      {/* Links */}
      <div className="mt-12 p-6 bg-slate-100 rounded-xl">
        <h3 className="font-bold text-slate-900 mb-4">Related Topics</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/reference/sora-process" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            SORA Process
          </Link>
          <Link href="/reference/standard-922" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Standard 922
          </Link>
          <Link href="/reference/operation-types" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Operation Types
          </Link>
        </div>
      </div>
    </div>
  );
}
