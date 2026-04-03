"use client";

import { RegTooltip, Highlight, Callout } from "@/components/reference";
import { QuickTable, KeyValueTable } from "@/components/reference";
import Link from "next/link";
import { BookOpen, FileText, Scale, ArrowRight } from "lucide-react";

const regulationHierarchy = [
  { label: "Aeronautics Act", value: "Primary legislation", note: "Federal law enabling aviation regulations" },
  { label: "CARs (Canadian Aviation Regulations)", value: "Regulatory requirements", note: "What you MUST do — legally binding" },
  { label: "Standards", value: "Technical specifications", note: "HOW to comply — referenced by CARs" },
  { label: "Advisory Circulars (ACs)", value: "Guidance material", note: "Best practices — not legally binding" },
];

const partIXStructure = [
  { section: "901", title: "Interpretation", description: "Definitions used throughout Part IX" },
  { section: "902", title: "General Operating Rules", description: "Rules that apply to all RPAS operations" },
  { section: "903", title: "Registration & Marking", description: "How to register and mark your drone" },
  { section: "904", title: "Pilot Certificates", description: "Basic, Advanced, and complex certificates" },
  { section: "905-906", title: "Flight Rules", description: "Where and how you can fly" },
  { section: "907-910", title: "Complex Operations", description: "L1C, L2C, and SFOC requirements" },
  { section: "921-922", title: "Standards Reference", description: "Technical and operational standards" },
];

const keyDefinitions = [
  { term: "RPAS", definition: "Remotely Piloted Aircraft System — the complete system including aircraft, control station, and data links" },
  { term: "Small RPAS", definition: "An RPAS weighing more than 250g but not more than 25kg" },
  { term: "Pilot", definition: "The person manipulating the flight controls or, if not manipulating, the person responsible for the flight" },
  { term: "Visual Observer", definition: "A crew member who assists the pilot by watching the RPAS and surrounding airspace" },
  { term: "VLOS", definition: "Visual Line of Sight — unaided visual contact with the RPAS at all times" },
  { term: "BVLOS", definition: "Beyond Visual Line of Sight — operations where VLOS cannot be maintained" },
];

export function CarsOverviewContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600">
          <RegTooltip term="CARs Part IX" definition="Canadian Aviation Regulations Part IX — Remotely Piloted Aircraft Systems. The primary regulatory framework for drone operations in Canada." reference="SOR/96-433">
            CARs Part IX
          </RegTooltip>{" "}
          is the regulatory framework governing all RPAS (drone) operations in Canada. Understanding its structure
          helps you navigate the rules efficiently and know where to find specific requirements.
        </p>
      </div>

      {/* Regulation Hierarchy */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">The Regulatory Hierarchy</h2>
        <p className="text-slate-600 mb-4">
          Canadian aviation regulations follow a hierarchy from broad legislation down to specific guidance:
        </p>

        <div className="space-y-3">
          {regulationHierarchy.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                {idx + 1}
              </div>
              <div className="flex-1 p-4 rounded-lg bg-slate-50 border">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900">{item.label}</span>
                  <span className="text-sm text-teal-600">{item.value}</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">{item.note}</p>
              </div>
              {idx < regulationHierarchy.length - 1 && (
                <ArrowRight className="w-5 h-5 text-slate-300 flex-shrink-0 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      <Callout variant="tip" title="CARs vs Standards">
        <p>
          <strong>CARs</strong> tell you WHAT you must do (e.g., "The pilot must hold a valid certificate").
          <strong> Standards</strong> tell you HOW to do it (e.g., the exam content and passing grades).
          Always check both when researching a requirement.
        </p>
      </Callout>

      {/* Part IX Structure */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Part IX Structure</h2>
        <p className="text-slate-600 mb-4">
          Part IX is organized into sections. Here's how to navigate:
        </p>

        <QuickTable
          title="Part IX Sections at a Glance"
          columns={[
            { key: "section", header: "Section", width: "15%" },
            { key: "title", header: "Title", width: "30%" },
            { key: "description", header: "What It Covers", width: "55%" },
          ]}
          rows={partIXStructure}
        />
      </div>

      {/* Reading Regulation Numbers */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Reading Regulation Numbers</h2>

        <div className="bg-slate-900 text-white rounded-xl p-6">
          <div className="text-center mb-6">
            <div className="text-4xl font-mono tracking-wider">
              <span className="text-teal-400">901</span>
              <span className="text-slate-500">.</span>
              <span className="text-amber-400">01</span>
            </div>
            <p className="text-slate-400 mt-2">Example: CAR 901.01</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="text-teal-400 font-mono text-2xl mb-2">901</div>
              <div className="text-sm">
                <strong className="text-white">Section Number</strong>
                <p className="text-slate-400 mt-1">Indicates the topic area (901 = Interpretation/Definitions)</p>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg p-4">
              <div className="text-amber-400 font-mono text-2xl mb-2">.01</div>
              <div className="text-sm">
                <strong className="text-white">Subsection</strong>
                <p className="text-slate-400 mt-1">Specific regulation within the section</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-slate-400">
            <p>Standards use a similar format: <span className="font-mono text-white">Standard 922.01</span></p>
          </div>
        </div>
      </div>

      {/* Key Definitions */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Definitions (CAR 901.01)</h2>
        <p className="text-slate-600 mb-4">
          These definitions from Section 901 are used throughout Part IX:
        </p>

        <div className="grid gap-3">
          {keyDefinitions.map((item, idx) => (
            <div key={idx} className="p-4 rounded-lg border bg-white hover:border-teal-500 transition-colors">
              <div className="font-semibold text-slate-900">{item.term}</div>
              <p className="text-sm text-slate-600 mt-1">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Important Standards */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Standards for L1C</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border-2 border-blue-500 bg-blue-50 p-6">
            <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-blue-800">Standard 921</h3>
            <p className="text-sm text-blue-700 mt-2">
              Pilot certificate requirements, knowledge standards, and recency requirements
            </p>
            <Link href="/reference/pilot-certificates" className="inline-flex items-center text-sm text-blue-600 mt-3 hover:underline">
              Learn more <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="rounded-xl border-2 border-amber-500 bg-amber-50 p-6">
            <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center mb-4">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-amber-800">Standard 922</h3>
            <p className="text-sm text-amber-700 mt-2">
              Safety assurance, RPAS technical requirements, and operational standards
            </p>
            <Link href="/reference/standard-922" className="inline-flex items-center text-sm text-amber-600 mt-3 hover:underline">
              Learn more <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Advisory Circulars */}
      <Callout variant="info" title="Advisory Circulars (ACs)">
        <p>
          Transport Canada publishes Advisory Circulars that provide guidance on how to comply with regulations.
          Key ACs for RPAS include:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>AC 922-001</strong> — RPAS Safety Assurance</li>
          <li><strong>AC 903-001</strong> — RPAS Registration</li>
          <li><strong>AC 901-001</strong> — Small RPAS Operations</li>
        </ul>
        <p className="mt-2 text-sm">
          ACs are not legally binding but represent Transport Canada's interpretation of the regulations.
        </p>
      </Callout>

      {/* Links */}
      <div className="mt-12 p-6 bg-slate-100 rounded-xl">
        <h3 className="font-bold text-slate-900 mb-4">Related Topics</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/reference/pilot-certificates" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Pilot Certificates
          </Link>
          <Link href="/reference/standard-922" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Standard 922
          </Link>
          <Link href="/reference/glossary" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Full Glossary
          </Link>
        </div>
      </div>
    </div>
  );
}
