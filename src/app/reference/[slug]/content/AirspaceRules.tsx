"use client";

import { RegTooltip, Highlight, Callout } from "@/components/reference";
import { QuickTable, ComparisonTable } from "@/components/reference";
import Link from "next/link";
import { Plane, MapPin, Radio, AlertTriangle } from "lucide-react";

const airspaceClasses = [
  { class: "Class A", altitude: "18,000 ft+", type: "Controlled", rpas: "SFOC only", note: "High-altitude IFR" },
  { class: "Class B", altitude: "Varies", type: "Controlled", rpas: "SFOC only", note: "Major airports (YYZ, YVR, YUL)" },
  { class: "Class C", altitude: "Surface-12,500", type: "Controlled", rpas: "Advanced+ with auth", note: "Busy airports with radar" },
  { class: "Class D", altitude: "Surface-3,000", type: "Controlled", rpas: "Advanced+ with auth", note: "Airports with towers" },
  { class: "Class E", altitude: "Varies", type: "Controlled", rpas: "Advanced+ with auth", note: "Controlled, no tower" },
  { class: "Class F", altitude: "Varies", type: "Special Use", rpas: "Depends on type", note: "Restricted, advisory, etc." },
  { class: "Class G", altitude: "Surface-varies", type: "Uncontrolled", rpas: "Basic OK", note: "Most rural areas" },
];

const distanceRestrictions = [
  { feature: "Distance Restrictions", basic: ">5.6 km from airports", advanced: "Authorized access", l1c: "As declared" },
  { feature: "Controlled Airspace", basic: false, advanced: true, l1c: true },
  { feature: "Max Altitude AGL", basic: "400 ft", advanced: "400 ft", l1c: "As declared" },
  { feature: "Near Aerodromes", basic: false, advanced: "With authorization", l1c: "With authorization" },
  { feature: "Near Heliports", basic: ">1.9 km", advanced: "Authorized", l1c: "As declared" },
];

const prohibitedAreas = [
  { area: "Forest Fires", distance: "5 NM horizontal, 3000 ft vertical", authority: "TFR/NOTAM" },
  { area: "Emergency Scenes", distance: "As restricted", authority: "Police/Fire authority" },
  { area: "Advertised Events", distance: "As NOTAMed", authority: "Event NOTAM" },
  { area: "Military Zones", distance: "Varies", authority: "DND authorization" },
  { area: "Prisons", distance: "Prohibited without auth", authority: "Correctional Service" },
  { area: "Nuclear Facilities", distance: "Prohibited", authority: "CNSC" },
];

export function AirspaceRulesContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600">
          Understanding Canadian airspace is essential for legal RPAS operations. Where you can fly
          depends on your certificate level, the airspace class, and any temporary restrictions in effect.
        </p>
      </div>

      {/* Airspace Diagram */}
      <div className="bg-gradient-to-b from-blue-900 to-blue-600 rounded-xl p-6 text-white">
        <h3 className="text-lg font-bold mb-4 text-center">Canadian Airspace Structure (Simplified)</h3>

        <div className="relative max-w-2xl mx-auto">
          {/* Class A */}
          <div className="border-2 border-blue-300 rounded-t-xl p-3 bg-blue-800/50">
            <div className="flex justify-between items-center">
              <span className="font-bold">Class A</span>
              <span className="text-sm text-blue-200">18,000 ft and above</span>
            </div>
            <p className="text-xs text-blue-200 mt-1">IFR only — No RPAS (SFOC required)</p>
          </div>

          {/* Class B/C/D/E */}
          <div className="border-2 border-t-0 border-amber-400 p-3 bg-amber-900/30">
            <div className="flex justify-between items-center">
              <span className="font-bold text-amber-300">Class B/C/D/E (Controlled)</span>
              <span className="text-sm text-amber-200">Varies by location</span>
            </div>
            <p className="text-xs text-amber-200 mt-1">Advanced certificate + authorization required</p>
          </div>

          {/* Class G */}
          <div className="border-2 border-t-0 border-green-400 rounded-b-xl p-3 bg-green-900/30">
            <div className="flex justify-between items-center">
              <span className="font-bold text-green-300">Class G (Uncontrolled)</span>
              <span className="text-sm text-green-200">Surface to controlled airspace</span>
            </div>
            <p className="text-xs text-green-200 mt-1">Basic certificate OK (with distance limits)</p>
          </div>

          {/* Ground */}
          <div className="mt-2 p-2 bg-slate-700 rounded text-center text-sm">
            Ground Level
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-500"></div>
            <span>Basic OK</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-amber-500"></div>
            <span>Advanced Required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-500"></div>
            <span>SFOC Only</span>
          </div>
        </div>
      </div>

      {/* Airspace Classes Table */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Airspace Classes</h2>
        <QuickTable
          title="Canadian Airspace Classes and RPAS Access"
          columns={[
            { key: "class", header: "Class", width: "12%" },
            { key: "altitude", header: "Altitude", width: "18%" },
            { key: "type", header: "Type", width: "15%", align: "center" },
            { key: "rpas", header: "RPAS Access", width: "25%" },
            { key: "note", header: "Notes", width: "30%" },
          ]}
          rows={airspaceClasses}
        />
      </div>

      {/* By Certificate */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Access by Certificate Type</h2>
        <ComparisonTable
          title="Airspace Access Comparison"
          items={distanceRestrictions}
        />
      </div>

      {/* Aerodrome Rules */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Plane className="w-6 h-6" />
          Aerodrome Distance Rules
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border-2 border-green-500 bg-green-50 p-6">
            <h3 className="font-bold text-green-800">Basic Operations</h3>
            <ul className="mt-3 space-y-2 text-sm text-green-700">
              <li><strong>Airports (certified):</strong> Stay &gt;5.6 km (3 NM) from center</li>
              <li><strong>Airports (registered):</strong> Stay &gt;1.9 km (1 NM) from center</li>
              <li><strong>Heliports:</strong> Stay &gt;1.9 km from center</li>
              <li><strong>Seaplane bases:</strong> Stay &gt;1.9 km from center</li>
            </ul>
          </div>

          <div className="rounded-xl border-2 border-blue-500 bg-blue-50 p-6">
            <h3 className="font-bold text-blue-800">Advanced/L1C Operations</h3>
            <ul className="mt-3 space-y-2 text-sm text-blue-700">
              <li><strong>Controlled airspace:</strong> Request authorization via NAV CANADA</li>
              <li><strong>Near airports:</strong> Authorization required within control zone</li>
              <li><strong>LAANC-like system:</strong> NAV Drone app for quick authorizations</li>
              <li><strong>L1C:</strong> As specified in declaration and SORA</li>
            </ul>
          </div>
        </div>
      </div>

      <Callout variant="warning" title="NAV Drone Authorization">
        <p>
          NAV CANADA's <strong>NAV Drone</strong> app/portal allows Advanced pilots to request controlled
          airspace authorization quickly. Some requests are auto-approved; others require review.
          Plan ahead — review can take 24-48 hours.
        </p>
      </Callout>

      {/* Prohibited/Restricted Areas */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" />
          Prohibited & Restricted Areas
        </h2>
        <p className="text-slate-600 mb-4">
          Some areas are off-limits to all RPAS regardless of certificate level:
        </p>

        <QuickTable
          title="No-Fly Zones"
          columns={[
            { key: "area", header: "Area Type", width: "25%" },
            { key: "distance", header: "Restriction", width: "35%" },
            { key: "authority", header: "Authority", width: "40%" },
          ]}
          rows={prohibitedAreas}
        />
      </div>

      {/* NOTAMs */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Checking NOTAMs & TFRs</h2>
        <p className="text-slate-600 mb-4">
          Before every flight, check for <RegTooltip term="NOTAM" definition="Notice to Airmen/Air Missions — official notices containing information about hazards or changes to facilities, services, or procedures." reference="AIM RAC 4.1">
            NOTAMs
          </RegTooltip> and Temporary Flight Restrictions that may affect your operation:
        </p>

        <div className="bg-slate-100 rounded-xl p-6">
          <h3 className="font-bold text-slate-900 mb-3">Where to Check</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">NAV CANADA NOTAM Website</strong>
                <p className="text-sm text-slate-600">Official source for all Canadian NOTAMs</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Radio className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">NAV Drone App</strong>
                <p className="text-sm text-slate-600">Map-based view of restrictions for your location</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Plane className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">NRC Drone Site Selection Tool</strong>
                <p className="text-sm text-slate-600">Shows airspace, aerodromes, and known restrictions</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Altitude Limits */}
      <Callout variant="info" title="400 ft AGL Limit">
        <p>
          The standard maximum altitude for RPAS is <strong>400 feet AGL</strong> (above ground level).
          This keeps drones below most manned aircraft traffic. Exceptions:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Within 400 ft horizontal of a structure — can fly up to 400 ft above structure height</li>
          <li>L1C operations — as declared in SORA (may be higher with mitigations)</li>
          <li>SFOC — as specifically approved</li>
        </ul>
      </Callout>

      {/* Links */}
      <div className="mt-12 p-6 bg-slate-100 rounded-xl">
        <h3 className="font-bold text-slate-900 mb-4">Related Topics</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/reference/operation-types" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Operation Types
          </Link>
          <Link href="/reference/site-survey-preflight" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Site Survey
          </Link>
          <Link href="/reference/operational-volumes" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Operational Volumes
          </Link>
        </div>
      </div>
    </div>
  );
}
