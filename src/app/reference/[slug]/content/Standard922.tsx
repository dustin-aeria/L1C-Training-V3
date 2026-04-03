"use client";

import { RegTooltip, Highlight, Callout } from "@/components/reference";
import { QuickTable, KeyValueTable } from "@/components/reference";
import Link from "next/link";
import { Shield, FileCheck, Settings, AlertTriangle } from "lucide-react";

const standard922Sections = [
  { section: "922.01", title: "Definitions", description: "Terms specific to safety assurance and technical requirements" },
  { section: "922.02", title: "RPAS Technical Requirements", description: "Minimum technical specifications for the aircraft" },
  { section: "922.03", title: "Operational Requirements", description: "Procedures and limitations for operations" },
  { section: "922.04", title: "Manufacturer Declarations", description: "What manufacturers must declare about their products" },
  { section: "922.05", title: "Pilot-Owner Verification", description: "What pilots must verify before operations" },
];

const technicalRequirements = [
  { requirement: "Lights", value: "Required for night ops", note: "Visible for 3 statute miles" },
  { requirement: "Geo-Fencing", value: "Recommended", note: "Required for some operations near airports" },
  { requirement: "Return-to-Home", value: "Recommended", note: "Automatic RTH on signal loss" },
  { requirement: "Flight Termination", value: "Required for L1C", note: "Independent system to end flight" },
  { requirement: "Data Recording", value: "Required for L1C", note: "Flight data for post-incident analysis" },
  { requirement: "C2 Link", value: "Redundancy recommended", note: "Command and control reliability" },
];

const pvdItems = [
  { label: "Maximum Takeoff Weight", value: "Required", note: "MTOW in kg" },
  { label: "Maximum Speed", value: "Required", note: "Vne in m/s or km/h" },
  { label: "Operating Limitations", value: "Required", note: "Temperature, wind, precipitation limits" },
  { label: "Control Link Range", value: "Required", note: "Maximum reliable C2 distance" },
  { label: "Endurance", value: "Required", note: "Maximum flight time" },
  { label: "Emergency Procedures", value: "Required", note: "Link loss, low battery, flyaway" },
];

export function Standard922Content() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600">
          <RegTooltip term="Standard 922" definition="The technical and operational standard for RPAS safety assurance, referenced by CARs Part IX. Specifies requirements for aircraft systems, declarations, and operational procedures." reference="Standard 922">
            Standard 922
          </RegTooltip>{" "}
          establishes the safety assurance requirements for RPAS operations. It defines what technical
          specifications your drone must meet and what documentation you need.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 text-center">
          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-4">
            <Settings className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-bold text-slate-900">Technical</h3>
          <p className="text-sm text-slate-600 mt-2">Aircraft system requirements and specifications</p>
        </div>

        <div className="rounded-xl border bg-white p-6 text-center">
          <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mx-auto mb-4">
            <FileCheck className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="font-bold text-slate-900">Declarations</h3>
          <p className="text-sm text-slate-600 mt-2">Manufacturer and operator documentation</p>
        </div>

        <div className="rounded-xl border bg-white p-6 text-center">
          <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="font-bold text-slate-900">Operational</h3>
          <p className="text-sm text-slate-600 mt-2">Procedures and safety requirements</p>
        </div>
      </div>

      {/* Standard Structure */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Standard 922 Structure</h2>
        <QuickTable
          title="Sections Overview"
          columns={[
            { key: "section", header: "Section", width: "15%" },
            { key: "title", header: "Title", width: "30%" },
            { key: "description", header: "Description", width: "55%" },
          ]}
          rows={standard922Sections}
        />
      </div>

      {/* Technical Requirements */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Technical Requirements</h2>
        <p className="text-slate-600 mb-4">
          Standard 922 specifies minimum technical requirements for RPAS. Requirements vary by operation type:
        </p>

        <QuickTable
          title="Key Technical Requirements"
          columns={[
            { key: "requirement", header: "System", width: "25%" },
            { key: "value", header: "Status", width: "25%", align: "center" },
            { key: "note", header: "Notes", width: "50%" },
          ]}
          rows={technicalRequirements}
        />
      </div>

      <Callout variant="warning" title="L1C-Specific Requirements">
        <p>Level 1 Complex operations have additional technical requirements beyond Basic/Advanced:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Flight Termination System</strong> — Independent means to end flight in emergencies</li>
          <li><strong>Data Recording</strong> — Flight parameters for safety analysis</li>
          <li><strong>Redundant C2</strong> — Backup command link recommended</li>
          <li><strong>Geo-Awareness</strong> — System awareness of operational boundaries</li>
        </ul>
      </Callout>

      {/* PVD */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Pilot-Owner Verification Document (PVD)</h2>
        <p className="text-slate-600 mb-4">
          The <RegTooltip term="PVD" definition="Pilot-Owner Verification Document — a document confirming the RPAS meets applicable technical requirements. Required for Advanced and L1C operations." reference="Standard 922.05">
            PVD
          </RegTooltip> is documentation you create or obtain confirming your RPAS meets Standard 922 requirements.
          For commercial drones, this often comes from the manufacturer.
        </p>

        <KeyValueTable
          title="PVD Required Information"
          items={pvdItems}
        />
      </div>

      {/* Manufacturer Declaration */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Manufacturer Declarations</h2>
        <p className="text-slate-600 mb-4">
          Major manufacturers (DJI, Autel, etc.) provide declarations that their products meet Canadian requirements.
          These declarations simplify your PVD process.
        </p>

        <div className="bg-slate-100 rounded-xl p-6">
          <h3 className="font-bold text-slate-900 mb-3">What Manufacturers Declare</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-slate-800">Safety Features</h4>
              <ul className="text-sm text-slate-600 mt-2 space-y-1">
                <li>Return-to-home capability</li>
                <li>Low battery warnings</li>
                <li>Geo-fencing systems</li>
                <li>Obstacle avoidance</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-slate-800">Performance Data</h4>
              <ul className="text-sm text-slate-600 mt-2 space-y-1">
                <li>Maximum speeds and altitudes</li>
                <li>Operating temperature range</li>
                <li>Wind resistance ratings</li>
                <li>Control link specifications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Self-Declared Operations */}
      <Callout variant="tip" title="Self-Built or Modified RPAS">
        <p>
          If you build or significantly modify your RPAS, you become responsible for creating the PVD
          and demonstrating compliance with Standard 922. This requires:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Documenting all technical specifications</li>
          <li>Testing and verifying performance claims</li>
          <li>Maintaining records of modifications</li>
          <li>For L1C: Additional engineering assessment may be required</li>
        </ul>
      </Callout>

      {/* Links */}
      <div className="mt-12 p-6 bg-slate-100 rounded-xl">
        <h3 className="font-bold text-slate-900 mb-4">Related Topics</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/reference/declarations" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Declarations & Compliance
          </Link>
          <Link href="/reference/operation-types" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Operation Types
          </Link>
          <Link href="/reference/sora-process" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            SORA Process
          </Link>
        </div>
      </div>
    </div>
  );
}
