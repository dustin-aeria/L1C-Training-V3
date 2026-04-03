"use client";

import { useState } from "react";
import { Search, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";

interface GlossaryTerm {
  term: string;
  definition: string;
  reference?: string;
  category: "general" | "sora" | "airspace" | "technical" | "operations";
}

const glossaryTerms: GlossaryTerm[] = [
  // General Terms
  { term: "RPAS", definition: "Remotely Piloted Aircraft System — the complete system including the remotely piloted aircraft, control station, command and control links, and any other components.", reference: "CAR 101.01", category: "general" },
  { term: "RPA", definition: "Remotely Piloted Aircraft — the aircraft component of an RPAS that is flown without a pilot on board.", reference: "CAR 101.01", category: "general" },
  { term: "Small RPAS", definition: "An RPAS with a maximum takeoff weight of more than 250 grams but not more than 25 kilograms.", reference: "CAR 101.01", category: "general" },
  { term: "Pilot", definition: "The person who manipulates the flight controls of an RPAS during flight or, if the person is not manipulating the flight controls, the person who is responsible for the flight.", reference: "CAR 101.01", category: "general" },
  { term: "Visual Observer (VO)", definition: "A crew member who assists the pilot by watching the RPAS and the surrounding airspace for hazards.", reference: "CAR 101.01", category: "general" },
  { term: "VLOS", definition: "Visual Line of Sight — operations where the pilot maintains continuous unaided visual contact with the RPAS.", reference: "CAR 901.01", category: "general" },
  { term: "BVLOS", definition: "Beyond Visual Line of Sight — operations where the pilot cannot maintain continuous visual contact with the RPAS at all times.", reference: "CAR 901.01", category: "general" },
  { term: "AGL", definition: "Above Ground Level — altitude measured from the ground directly below the aircraft.", category: "general" },
  { term: "SFOC", definition: "Special Flight Operations Certificate — individual approval from Transport Canada for operations not covered by standard rules.", reference: "CAR 903", category: "general" },

  // SORA Terms
  { term: "SORA", definition: "Specific Operations Risk Assessment — a methodology for assessing risk in drone operations that require more than standard rules allow.", reference: "JARUS", category: "sora" },
  { term: "ConOps", definition: "Concept of Operations — a detailed description of the intended operation including aircraft, environment, and procedures.", category: "sora" },
  { term: "GRC", definition: "Ground Risk Class — a classification (1-10) indicating the level of risk to people and property on the ground.", reference: "SORA 2.5", category: "sora" },
  { term: "ARC", definition: "Air Risk Class — a classification (a-d) indicating the level of risk of collision with manned aircraft.", reference: "SORA 2.5", category: "sora" },
  { term: "SAIL", definition: "Specific Assurance and Integrity Level — the overall risk level (I-VI) determined by combining GRC and ARC.", reference: "SORA 2.5", category: "sora" },
  { term: "OSO", definition: "Operational Safety Objective — specific safety requirements that must be met based on the SAIL level.", reference: "SORA 2.5", category: "sora" },
  { term: "TMPR", definition: "Tactical Mitigation Performance Requirement — requirements for tactical systems to mitigate air risk.", reference: "SORA 2.5", category: "sora" },
  { term: "Flight Geography", definition: "The 3D volume where the RPAS is intended to fly during normal operations, including navigation error buffers.", reference: "SORA Annex B", category: "sora" },
  { term: "Contingency Volume", definition: "The volume surrounding the Flight Geography where contingency procedures may be executed.", reference: "SORA Annex B", category: "sora" },
  { term: "Ground Risk Buffer", definition: "The area surrounding the Contingency Volume where the RPAS could impact if control is lost.", reference: "SORA Annex B", category: "sora" },
  { term: "Operational Volume", definition: "The total volume encompassing Flight Geography, Contingency Volume, and Ground Risk Buffer.", reference: "SORA Annex B", category: "sora" },

  // Airspace Terms
  { term: "Controlled Airspace", definition: "Airspace of defined dimensions within which air traffic control service is provided (Class A, B, C, D, E).", reference: "AIM", category: "airspace" },
  { term: "Uncontrolled Airspace", definition: "Class G airspace where ATC service is not provided, typically from surface to the base of controlled airspace.", reference: "AIM", category: "airspace" },
  { term: "Control Zone", definition: "Controlled airspace extending from the surface to a specified upper limit, surrounding airports with control towers.", category: "airspace" },
  { term: "NOTAM", definition: "Notice to Air Missions — notices containing time-critical information on changes to aeronautical facilities, services, or procedures.", reference: "AIM RAC 4.1", category: "airspace" },
  { term: "TFR", definition: "Temporary Flight Restriction — a regulatory action that temporarily restricts certain aircraft from operating in a defined area.", category: "airspace" },
  { term: "CYA", definition: "Canadian Advisory Area — special use airspace where activity requires awareness but not necessarily a clearance.", category: "airspace" },
  { term: "CYR", definition: "Canadian Restricted Area — special use airspace where flight is restricted without permission from the controlling authority.", category: "airspace" },

  // Technical Terms
  { term: "C2 Link", definition: "Command and Control Link — the data link between the control station and the RPA for piloting and payload control.", category: "technical" },
  { term: "RTH", definition: "Return to Home — automatic or commanded flight to a predetermined location, typically the takeoff point.", category: "technical" },
  { term: "FTS", definition: "Flight Termination System — a system designed to immediately end the flight in an emergency, typically by cutting power.", category: "technical" },
  { term: "DAA", definition: "Detect and Avoid — systems or procedures for detecting nearby aircraft and avoiding collision.", category: "technical" },
  { term: "ADS-B", definition: "Automatic Dependent Surveillance-Broadcast — a surveillance technology where aircraft broadcast their position.", category: "technical" },
  { term: "GNSS", definition: "Global Navigation Satellite System — satellite-based navigation systems including GPS, GLONASS, Galileo.", category: "technical" },
  { term: "PVD", definition: "Pilot-Owner Verification Document — documentation confirming an RPAS meets applicable technical requirements.", reference: "Standard 922", category: "technical" },
  { term: "MTOW", definition: "Maximum Takeoff Weight — the maximum weight at which the aircraft is certified to take off.", category: "technical" },

  // Operations Terms
  { term: "RPOC", definition: "RPAS Pilot Operator Certificate — an organizational certificate required for complex RPAS operations.", reference: "CAR 907.03", category: "operations" },
  { term: "Operations Manual", definition: "Document describing an organization's policies, procedures, and operational practices for RPAS operations.", category: "operations" },
  { term: "SMS", definition: "Safety Management System — a systematic approach to managing safety including policies, procedures, and practices.", category: "operations" },
  { term: "ERP", definition: "Emergency Response Plan — documented procedures for responding to emergencies during operations.", category: "operations" },
  { term: "Flight Review", definition: "An assessment by a certified flight reviewer to verify pilot competency for certificate renewal.", reference: "Standard 921", category: "operations" },
  { term: "Recency", definition: "The requirement to have completed a review or exam within the preceding 24 months to exercise certificate privileges.", reference: "CAR 901.54", category: "operations" },
];

const categories = [
  { key: "all", label: "All Terms" },
  { key: "general", label: "General" },
  { key: "sora", label: "SORA" },
  { key: "airspace", label: "Airspace" },
  { key: "technical", label: "Technical" },
  { key: "operations", label: "Operations" },
];

export function GlossaryContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTerms = glossaryTerms
    .filter(term => {
      const matchesSearch = searchQuery === "" ||
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || term.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600">
          A comprehensive glossary of terms used in Canadian RPAS regulations, the SORA methodology,
          and drone operations. Use the search and filters to find specific definitions.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="sticky top-0 z-10 bg-white py-4 border-b">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === cat.key
                    ? "bg-teal-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        <p className="text-sm text-slate-500 mt-2">
          Showing {filteredTerms.length} of {glossaryTerms.length} terms
        </p>
      </div>

      {/* Terms List */}
      <div className="space-y-4">
        {filteredTerms.map((item) => (
          <div
            key={item.term}
            className="p-4 rounded-lg border bg-white hover:border-teal-500 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900">{item.term}</h3>
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    item.category === "sora" ? "bg-amber-100 text-amber-700" :
                    item.category === "airspace" ? "bg-blue-100 text-blue-700" :
                    item.category === "technical" ? "bg-purple-100 text-purple-700" :
                    item.category === "operations" ? "bg-green-100 text-green-700" :
                    "bg-slate-100 text-slate-700"
                  }`}>
                    {item.category}
                  </span>
                </div>
                <p className="mt-1 text-slate-600">{item.definition}</p>
                {item.reference && (
                  <p className="mt-2 text-xs text-slate-400">Reference: {item.reference}</p>
                )}
              </div>
            </div>
          </div>
        ))}

        {filteredTerms.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No terms found matching your search.</p>
          </div>
        )}
      </div>

      {/* Quick Reference */}
      <div className="mt-12 p-6 bg-slate-100 rounded-xl">
        <h3 className="font-bold text-slate-900 mb-4">Quick Reference Links</h3>
        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-slate-800 mb-2">Official Sources</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• CARs Part IX (Transport Canada)</li>
              <li>• Standard 921 & 922</li>
              <li>• JARUS SORA Guidelines</li>
              <li>• Aeronautical Information Manual (AIM)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-800 mb-2">Related Topics</h4>
            <ul className="space-y-1 text-slate-600">
              <li>• <a href="/reference/cars-part-ix-overview" className="text-teal-600 hover:underline">CARs Part IX Overview</a></li>
              <li>• <a href="/reference/sora-process" className="text-teal-600 hover:underline">SORA Process</a></li>
              <li>• <a href="/reference/airspace-rules" className="text-teal-600 hover:underline">Airspace Rules</a></li>
              <li>• <a href="/reference/operation-types" className="text-teal-600 hover:underline">Operation Types</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
