"use client";

import { RegTooltip, Highlight, Callout } from "@/components/reference";
import { QuickTable, KeyValueTable } from "@/components/reference";
import Link from "next/link";
import { MapPin, Layers, AlertTriangle } from "lucide-react";

const volumeComponents = [
  {
    key: "fg",
    name: "Flight Geography (FG)",
    color: "blue",
    description: "Where you intend to fly",
    includes: "Planned flight path + navigation errors",
  },
  {
    key: "cv",
    name: "Contingency Volume (CV)",
    color: "amber",
    description: "Buffer for abnormal situations",
    includes: "FG + distance to regain control",
  },
  {
    key: "grb",
    name: "Ground Risk Buffer (GRB)",
    color: "red",
    description: "Protection for ground in emergencies",
    includes: "CV + uncontrolled descent area",
  },
];

const fgFactors = [
  { label: "GNSS Accuracy", value: "1-10 m", note: "Depends on receiver quality and conditions" },
  { label: "Position Hold Error", value: "1-10 m", note: "Flight controller accuracy in hover" },
  { label: "Map/Charting Error", value: "1-5 m", note: "Accuracy of your reference maps" },
];

const cvFactors = [
  { label: "Max Aircraft Speed", value: "Varies by UAS", note: "Maximum possible speed in any axis" },
  { label: "Contingency Time", value: "1-15 seconds", note: "Time to detect anomaly and react" },
];

const grbFactors = [
  { label: "Max Flight Altitude", value: "Operation dependent", note: "Highest point in your operation" },
  { label: "Ballistic Coefficient", value: "UAS dependent", note: "Affects descent trajectory (advanced)" },
];

export function OperationalVolumesContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600">
          SORA defines three nested volumes that together form your{" "}
          <RegTooltip term="Operational Volume" definition="The total 3D volume encompassing your operation, including all buffers for navigation error, contingencies, and ground risk." reference="SORA 2.5 Annex B">
            Operational Volume
          </RegTooltip>
          . Understanding these volumes is critical for L1C operations — they determine your ground risk assessment
          and what areas you need to control or avoid.
        </p>
      </div>

      {/* Visual Diagram */}
      <div className="bg-slate-900 rounded-xl p-8 text-white">
        <h3 className="text-lg font-bold mb-6 text-center">Operational Volume Structure</h3>
        <div className="relative max-w-md mx-auto">
          {/* GRB - outermost */}
          <div className="border-4 border-red-500 border-dashed rounded-2xl p-6 bg-red-500/10">
            <div className="absolute -top-3 left-4 px-2 bg-slate-900 text-red-400 text-sm font-medium">
              Ground Risk Buffer (GRB)
            </div>

            {/* CV - middle */}
            <div className="border-4 border-amber-500 rounded-xl p-6 bg-amber-500/10 mt-4">
              <div className="absolute left-8 -mt-9 px-2 bg-slate-900 text-amber-400 text-sm font-medium">
                Contingency Volume (CV)
              </div>

              {/* FG - innermost */}
              <div className="border-4 border-blue-500 rounded-lg p-6 bg-blue-500/20 mt-4">
                <div className="absolute left-12 -mt-9 px-2 bg-slate-900 text-blue-400 text-sm font-medium">
                  Flight Geography (FG)
                </div>

                {/* Flight Path */}
                <div className="flex items-center justify-center py-4">
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                  <div className="w-20 h-1 bg-white"></div>
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                  <div className="w-16 h-1 bg-white"></div>
                  <div className="w-4 h-4 rounded-full bg-white"></div>
                </div>
                <p className="text-center text-sm text-slate-300 mt-2">Flight Path</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-500"></div>
            <span>Flight Geography</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-amber-500"></div>
            <span>Contingency Volume</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border-2 border-dashed border-red-500"></div>
            <span>Ground Risk Buffer</span>
          </div>
        </div>
      </div>

      {/* Volume Explanations */}
      <div className="grid gap-6 md:grid-cols-3">
        {volumeComponents.map((vol) => (
          <div
            key={vol.key}
            className={`rounded-xl border-2 p-6 ${
              vol.color === "blue"
                ? "border-blue-500 bg-blue-50"
                : vol.color === "amber"
                ? "border-amber-500 bg-amber-50"
                : "border-red-500 bg-red-50"
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
              vol.color === "blue"
                ? "bg-blue-500"
                : vol.color === "amber"
                ? "bg-amber-500"
                : "bg-red-500"
            }`}>
              {vol.key === "fg" ? (
                <MapPin className="w-5 h-5 text-white" />
              ) : vol.key === "cv" ? (
                <Layers className="w-5 h-5 text-white" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-white" />
              )}
            </div>
            <h3 className={`font-bold ${
              vol.color === "blue"
                ? "text-blue-800"
                : vol.color === "amber"
                ? "text-amber-800"
                : "text-red-800"
            }`}>
              {vol.name}
            </h3>
            <p className={`mt-2 text-sm ${
              vol.color === "blue"
                ? "text-blue-700"
                : vol.color === "amber"
                ? "text-amber-700"
                : "text-red-700"
            }`}>
              {vol.description}
            </p>
            <p className={`mt-3 text-xs font-medium ${
              vol.color === "blue"
                ? "text-blue-600"
                : vol.color === "amber"
                ? "text-amber-600"
                : "text-red-600"
            }`}>
              Includes: {vol.includes}
            </p>
          </div>
        ))}
      </div>

      {/* Flight Geography Details */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-blue-500"></div>
          Flight Geography (FG)
        </h2>
        <p className="text-slate-600 mb-4">
          The Flight Geography is where you <em>intend</em> to fly. It accounts for navigation errors
          that could cause the UAS to deviate from its planned path during normal operations.
        </p>

        <KeyValueTable
          title="FG Calculation Factors"
          items={fgFactors}
        />

        <Callout variant="info" title="FG Formula" reference="SORA Annex B">
          <code className="text-sm">
            FG Buffer = GNSS Accuracy + Position Hold Error + Map Error
          </code>
        </Callout>
      </div>

      {/* Contingency Volume Details */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-amber-500"></div>
          Contingency Volume (CV)
        </h2>
        <p className="text-slate-600 mb-4">
          The Contingency Volume provides space to handle <em>abnormal</em> situations where
          the operation is still under control but deviating from normal parameters.
          This is where contingency procedures are executed.
        </p>

        <KeyValueTable
          title="CV Calculation Factors"
          items={cvFactors}
        />

        <Callout variant="warning" title="CV Formula" reference="SORA Annex B">
          <code className="text-sm">
            CV Buffer = Max Aircraft Speed × Contingency Time
          </code>
          <p className="mt-2 text-sm">
            This represents the distance the UAS could travel before the pilot detects an issue
            and initiates a contingency procedure.
          </p>
        </Callout>
      </div>

      {/* Ground Risk Buffer Details */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-red-500"></div>
          Ground Risk Buffer (GRB)
        </h2>
        <p className="text-slate-600 mb-4">
          The Ground Risk Buffer accounts for <em>emergency</em> situations where control is lost.
          It defines the area where the UAS could crash if it suffers a catastrophic failure at the
          edge of the Contingency Volume.
        </p>

        <KeyValueTable
          title="GRB Calculation Factors"
          items={grbFactors}
        />

        <Callout variant="important" title="Simplified GRB (1:1 Rule)" reference="SORA Annex B">
          <code className="text-sm">
            GRB Buffer = Max Flight Altitude
          </code>
          <p className="mt-2 text-sm">
            The simplified 1:1 rule assumes the UAS could glide/fall at a 45° angle.
            For every meter of altitude, add one meter of horizontal buffer.
          </p>
        </Callout>
      </div>

      {/* Practical Application */}
      <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-teal-800 mb-4">Practical Application</h2>
        <div className="space-y-4 text-teal-700">
          <p>
            <strong>1. Define your FG</strong> — Draw your flight path and add buffers for navigation uncertainty.
            The FG should contain your entire planned operation.
          </p>
          <p>
            <strong>2. Add the CV</strong> — Expand the FG by your contingency buffer.
            You must be able to execute contingency procedures within this volume.
          </p>
          <p>
            <strong>3. Add the GRB</strong> — Expand the CV by the ground risk buffer.
            This entire area must meet your GRC requirements (controlled area, sparse population, etc.).
          </p>
          <p>
            <strong>4. Assess the ground</strong> — Everything within the GRB affects your Ground Risk Class.
            People, property, and critical infrastructure within this zone increase your GRC.
          </p>
        </div>

        <div className="mt-6">
          <Link
            href="/volume-planner"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Try the Volume Planner Tool
          </Link>
        </div>
      </div>

      {/* Links */}
      <div className="mt-12 p-6 bg-slate-100 rounded-xl">
        <h3 className="font-bold text-slate-900 mb-4">Related Topics</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/reference/sora-process" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            SORA Process
          </Link>
          <Link href="/reference/operation-types" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Operation Types
          </Link>
        </div>
      </div>
    </div>
  );
}
