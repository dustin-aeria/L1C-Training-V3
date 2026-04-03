"use client";

import { Flowchart, FlowchartNode } from "@/components/reference";
import { Callout, Step, RegTooltip, Highlight } from "@/components/reference";
import { KeyValueTable } from "@/components/reference";
import Link from "next/link";

const soraSteps: FlowchartNode[] = [
  {
    id: "start",
    type: "start",
    label: "Begin SORA Assessment",
    description: "Gather information about your intended operation including aircraft specs, operational area, and mission profile.",
    next: "step1",
  },
  {
    id: "step1",
    type: "process",
    label: "Step 1: ConOps Description",
    description: "Document the Concept of Operations — describe your UAS, operational environment, and mission objectives in detail.",
    next: "step2",
  },
  {
    id: "step2",
    type: "process",
    label: "Step 2: Determine Intrinsic GRC",
    description: "Assess the intrinsic Ground Risk Class based on max UAS dimensions, operational scenario, and population density of the overflown area.",
    next: "step3",
  },
  {
    id: "step3",
    type: "process",
    label: "Step 3: Apply GRC Mitigations",
    description: "Apply mitigations (M1: strategic, M2: effects reduction, M3: ERP) to reduce the intrinsic GRC to a final GRC.",
    next: "step4",
  },
  {
    id: "step4",
    type: "process",
    label: "Step 4: Determine Initial ARC",
    description: "Assess the initial Air Risk Class based on the airspace you'll operate in (atypical vs typical airspace encounter rates).",
    next: "step5",
  },
  {
    id: "step5",
    type: "process",
    label: "Step 5: Apply ARC Mitigations (TMPRs)",
    description: "Apply Tactical Mitigation Performance Requirements to reduce air risk through strategic and tactical measures.",
    next: "step6",
  },
  {
    id: "step6",
    type: "process",
    label: "Step 6: TMPR & Robustness Levels",
    description: "Determine required robustness levels for tactical mitigations based on residual ARC.",
    next: "step7",
  },
  {
    id: "step7",
    type: "process",
    label: "Step 7: SAIL Determination",
    description: "Combine final GRC and residual ARC to determine the Specific Assurance and Integrity Level (SAIL I-VI).",
    next: "step8",
    highlight: "info",
  },
  {
    id: "step8",
    type: "process",
    label: "Step 8: Identify OSOs",
    description: "Based on the SAIL, identify which Operational Safety Objectives apply and at what robustness level.",
    next: "step9",
  },
  {
    id: "step9",
    type: "process",
    label: "Step 9: Adjacent Area Considerations",
    description: "Evaluate risks to areas adjacent to your operational volume and apply appropriate containment measures.",
    next: "step10",
  },
  {
    id: "step10",
    type: "process",
    label: "Step 10: Comprehensive Safety Portfolio",
    description: "Compile all documentation into a complete safety case demonstrating how all risks are mitigated to acceptable levels.",
    next: "end",
  },
  {
    id: "end",
    type: "end",
    label: "SORA Complete",
    description: "Your risk assessment is complete. Submit to the appropriate authority for approval.",
  },
];

const sailTable = [
  { label: "SAIL I", value: "Lowest risk", note: "Simplified declaration process" },
  { label: "SAIL II", value: "Low risk", note: "Standard declaration with basic OSOs" },
  { label: "SAIL III", value: "Moderate risk", note: "Enhanced OSOs required" },
  { label: "SAIL IV", value: "Elevated risk", note: "Full OSO compliance, increased oversight" },
  { label: "SAIL V", value: "High risk", note: "Comprehensive safety case required" },
  { label: "SAIL VI", value: "Highest risk", note: "Most stringent requirements, rare approval" },
];

export function SoraProcessContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600">
          The <RegTooltip term="SORA" definition="Specific Operations Risk Assessment — a methodology developed by JARUS to assess risk for drone operations that don't fit standard categories." reference="JARUS Guidelines">SORA</RegTooltip> is
          a 10-step risk assessment methodology that helps operators demonstrate their operation can be conducted safely.
          It's the foundation for <Highlight variant="info">Level 1 Complex (L1C)</Highlight> operations in Canada.
        </p>
      </div>

      <Callout variant="tip" title="Why SORA Matters for L1C">
        Level 1 Complex operations require a SORA-based risk assessment because they involve operations
        beyond what Basic and Advanced certificates cover — like BVLOS flight. The SORA process ensures
        you've systematically identified and mitigated all risks.
      </Callout>

      {/* Interactive Flowchart */}
      <Flowchart
        title="The 10-Step SORA Process"
        nodes={soraSteps}
        startNodeId="start"
      />

      {/* Detailed Steps */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Step-by-Step Breakdown</h2>

        <div className="space-y-2">
          <Step number={1} title="Concept of Operations (ConOps)">
            <p>Document everything about your operation:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
              <li>UAS specifications (weight, dimensions, performance)</li>
              <li>Operational environment (terrain, population, airspace)</li>
              <li>Mission profile (altitude, speed, duration, frequency)</li>
              <li>Crew qualifications and responsibilities</li>
            </ul>
          </Step>

          <Step number={2} title="Intrinsic Ground Risk Class (GRC)">
            <p>Determine initial ground risk based on:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
              <li><strong>UAS size:</strong> Characteristic dimension and kinetic energy</li>
              <li><strong>Scenario:</strong> VLOS vs BVLOS, over people vs controlled area</li>
              <li><strong>Population density:</strong> Sparse, populated, assemblies</li>
            </ul>
            <p className="mt-2">GRC ranges from 1 (lowest) to 10 (highest intrinsic risk).</p>
          </Step>

          <Step number={3} title="GRC Mitigations">
            <p>Apply mitigations to reduce ground risk:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
              <li><strong>M1 - Strategic:</strong> Ground risk buffer, time/space management</li>
              <li><strong>M2 - Effects Reduction:</strong> Parachute, frangible design</li>
              <li><strong>M3 - ERP:</strong> Emergency Response Plan effectiveness</li>
            </ul>
          </Step>

          <Step number={4} title="Initial Air Risk Class (ARC)">
            <p>Assess collision risk with manned aircraft based on:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
              <li>Airspace classification (controlled vs uncontrolled)</li>
              <li>Altitude of operation</li>
              <li>Typical air traffic density in the area</li>
            </ul>
            <p className="mt-2">ARC ranges from ARC-a (lowest) to ARC-d (highest).</p>
          </Step>

          <Step number={5} title="ARC Mitigations (Strategic)">
            <p>Reduce air risk through strategic measures:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
              <li>Operational restrictions (time, location, altitude)</li>
              <li>Coordination with ATC</li>
              <li>NOTAMs and airspace reservations</li>
            </ul>
          </Step>

          <Step number={6} title="Tactical Mitigations (TMPRs)">
            <p>Implement tactical mitigation performance requirements:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
              <li><strong>See and Avoid:</strong> Visual observers, DAA systems</li>
              <li><strong>Be Seen:</strong> Transponders, ADS-B, lighting</li>
              <li>Robustness level depends on residual ARC</li>
            </ul>
          </Step>

          <Step number={7} title="SAIL Determination" active>
            <p>
              Combine final GRC and residual ARC to determine your
              <RegTooltip term="SAIL" definition="Specific Assurance and Integrity Level — indicates the level of confidence required that the operation will stay under control. Ranges from I (lowest) to VI (highest)." reference="SORA 2.5">
                SAIL
              </RegTooltip>:
            </p>
            <p className="mt-2 text-slate-600">
              The SAIL determines what Operational Safety Objectives (OSOs) you must meet
              and at what robustness level.
            </p>
          </Step>

          <Step number={8} title="Operational Safety Objectives (OSOs)">
            <p>Based on your SAIL, identify required OSOs:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
              <li>Technical OSOs (UAS design and maintenance)</li>
              <li>Operational OSOs (procedures and training)</li>
              <li>Each OSO has a required robustness level (Low/Medium/High)</li>
            </ul>
          </Step>

          <Step number={9} title="Adjacent Area Considerations">
            <p>Ensure your operation doesn't create unacceptable risk to adjacent areas:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
              <li>Evaluate containment provisions</li>
              <li>Consider contingency and emergency scenarios</li>
              <li>Document ground risk buffer calculations</li>
            </ul>
          </Step>

          <Step number={10} title="Comprehensive Safety Portfolio">
            <p>Compile your complete safety case including:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-slate-600">
              <li>ConOps documentation</li>
              <li>Risk assessment worksheets</li>
              <li>Mitigation evidence and compliance matrix</li>
              <li>Operations manual references</li>
            </ul>
          </Step>
        </div>
      </div>

      {/* SAIL Reference */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">SAIL Quick Reference</h2>
        <KeyValueTable
          title="Specific Assurance and Integrity Levels"
          items={sailTable}
        />
      </div>

      {/* Links */}
      <div className="mt-12 p-6 bg-slate-100 rounded-xl">
        <h3 className="font-bold text-slate-900 mb-4">Related Topics</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/reference/operational-volumes" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Operational Volumes
          </Link>
          <Link href="/reference/operation-types" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Operation Types
          </Link>
          <Link href="/volume-planner" className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
            Volume Planner Tool
          </Link>
        </div>
      </div>
    </div>
  );
}
