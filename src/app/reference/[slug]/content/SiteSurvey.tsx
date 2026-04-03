"use client";

import { RegTooltip, Highlight, Callout, Step } from "@/components/reference";
import { QuickTable, KeyValueTable } from "@/components/reference";
import Link from "next/link";
import { MapPin, Eye, Cloud, Radio, AlertTriangle, CheckCircle2 } from "lucide-react";

const siteSurveyItems = [
  { category: "Airspace", items: "Airspace class, nearby aerodromes, NOTAMs, TFRs" },
  { category: "Terrain", items: "Elevation changes, obstacles, terrain type" },
  { category: "Hazards", items: "Power lines, towers, birds, wildlife, people" },
  { category: "Communications", items: "RF environment, interference sources, C2 coverage" },
  { category: "Emergency", items: "Egress routes, emergency landing areas, hospitals" },
  { category: "Legal", items: "Land ownership, permits needed, restricted areas" },
];

const preflightChecklist = [
  { phase: "Documentation", checks: "Certificate valid, registration current, insurance active, NOTAM check complete" },
  { phase: "Weather", checks: "Current conditions, forecast, wind speed/direction, visibility, precipitation" },
  { phase: "Aircraft", checks: "Battery charged, propellers secure, no damage, firmware current" },
  { phase: "Control Station", checks: "Controller charged, display visible, apps updated, connection test" },
  { phase: "Site", checks: "Launch/recovery area clear, hazards identified, bystanders managed" },
  { phase: "Crew", checks: "Briefing complete, roles assigned, communication plan, emergency procedures reviewed" },
];

const weatherLimits = [
  { label: "Wind Speed", value: "Per RPAS limits", note: "Check manufacturer specs (typically 10-15 m/s max)" },
  { label: "Visibility", value: ">1 statute mile", note: "For VLOS; BVLOS has specific requirements" },
  { label: "Cloud Base", value: ">500 ft AGL", note: "Maintain clearance from clouds" },
  { label: "Precipitation", value: "None (unless rated)", note: "Most RPAS are not waterproof" },
  { label: "Temperature", value: "Per RPAS limits", note: "Affects battery performance significantly" },
  { label: "Icing", value: "Not permitted", note: "No RPAS operations in icing conditions" },
];

export function SiteSurveyContent() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600">
          A thorough site survey and pre-flight inspection are essential for safe RPAS operations.
          For L1C BVLOS operations, site assessment is part of your SORA and must be documented.
        </p>
      </div>

      {/* Two-Phase Overview */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border-2 border-teal-500 bg-teal-50 p-6">
          <div className="w-12 h-12 rounded-lg bg-teal-500 flex items-center justify-center mb-4">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-teal-800 text-lg">Site Survey</h3>
          <p className="text-sm text-teal-700 mt-2">
            Done before the day of operation — research and reconnaissance of the operational area
          </p>
        </div>

        <div className="rounded-xl border-2 border-blue-500 bg-blue-50 p-6">
          <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-bold text-blue-800 text-lg">Pre-Flight</h3>
          <p className="text-sm text-blue-700 mt-2">
            Done on the day of operation — verify conditions and perform equipment checks
          </p>
        </div>
      </div>

      {/* Site Survey */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <MapPin className="w-6 h-6" />
          Site Survey Process
        </h2>
        <p className="text-slate-600 mb-4">
          The site survey should be completed before the day of operation. For new sites, an on-site
          visit is recommended. For familiar sites, a desktop review may be sufficient.
        </p>

        <QuickTable
          title="Site Survey Categories"
          columns={[
            { key: "category", header: "Category", width: "25%" },
            { key: "items", header: "Items to Assess", width: "75%" },
          ]}
          rows={siteSurveyItems}
        />
      </div>

      {/* Site Survey Steps */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Site Survey Steps</h3>

        <Step number={1} title="Desktop Research">
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Check airspace classification using NRC tool or NAV Drone</li>
            <li>Identify nearby aerodromes and their control zones</li>
            <li>Review satellite imagery for obstacles and terrain</li>
            <li>Research land ownership and any permit requirements</li>
          </ul>
        </Step>

        <Step number={2} title="Airspace Check">
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Determine if controlled airspace authorization needed</li>
            <li>Check for permanent restricted areas (military, prisons, etc.)</li>
            <li>Note any regular air traffic patterns</li>
            <li>Plan for authorization requests if needed</li>
          </ul>
        </Step>

        <Step number={3} title="On-Site Reconnaissance">
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Visit the site (if new location)</li>
            <li>Identify launch and recovery areas</li>
            <li>Note obstacles not visible in imagery (wires, antennas)</li>
            <li>Assess RF environment for potential interference</li>
            <li>Identify emergency landing areas</li>
          </ul>
        </Step>

        <Step number={4} title="Documentation">
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            <li>Record all findings in site survey form</li>
            <li>Take photos of key features and hazards</li>
            <li>Update SORA if conditions differ from assumptions</li>
            <li>Create site-specific briefing materials</li>
          </ul>
        </Step>
      </div>

      {/* L1C Considerations */}
      <Callout variant="warning" title="L1C Site Survey Requirements">
        <p>For BVLOS operations, your site survey must address:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Ground Risk Buffer coverage</strong> — What's within the entire GRB?</li>
          <li><strong>Contingency areas</strong> — Where will you execute contingency procedures?</li>
          <li><strong>Emergency landing zones</strong> — Pre-identified areas for controlled termination</li>
          <li><strong>Visual observer positions</strong> — If using VOs, where will they be stationed?</li>
          <li><strong>Communication coverage</strong> — C2 link reliability throughout the volume</li>
        </ul>
      </Callout>

      {/* Pre-Flight */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6" />
          Pre-Flight Checklist
        </h2>
        <p className="text-slate-600 mb-4">
          Before every flight, complete a systematic pre-flight check. Many operators use a
          written checklist to ensure nothing is missed.
        </p>

        <QuickTable
          title="Pre-Flight Check Phases"
          columns={[
            { key: "phase", header: "Phase", width: "25%" },
            { key: "checks", header: "Items to Verify", width: "75%" },
          ]}
          rows={preflightChecklist}
        />
      </div>

      {/* Weather */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Cloud className="w-6 h-6" />
          Weather Requirements
        </h2>

        <KeyValueTable
          title="Weather Limits for RPAS Operations"
          items={weatherLimits}
        />
      </div>

      <Callout variant="tip" title="Weather Resources">
        <p>Check these sources before every flight:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>Environment Canada</strong> — Current conditions and forecasts</li>
          <li><strong>NAV CANADA AWWS</strong> — Aviation weather (METARs, TAFs)</li>
          <li><strong>Windy.com</strong> — Detailed wind forecasts at various altitudes</li>
          <li><strong>UAV Forecast apps</strong> — RPAS-specific weather assessment</li>
        </ul>
      </Callout>

      {/* Emergency Procedures */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" />
          Emergency Procedures
        </h2>
        <p className="text-slate-600 mb-4">
          Review emergency procedures before every flight. Know what to do for these scenarios:
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border bg-white p-6">
            <h3 className="font-bold text-red-700 mb-3">Loss of C2 Link</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>Know your RTH settings and failsafe behavior</li>
              <li>Verify home point is set correctly</li>
              <li>Understand RTH altitude settings</li>
              <li>Have a plan if RTH fails</li>
            </ul>
          </div>

          <div className="rounded-xl border bg-white p-6">
            <h3 className="font-bold text-red-700 mb-3">Low Battery</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>Know low battery warning thresholds</li>
              <li>Plan landing before critical level</li>
              <li>Identify nearest safe landing spot</li>
              <li>Account for wind on return</li>
            </ul>
          </div>

          <div className="rounded-xl border bg-white p-6">
            <h3 className="font-bold text-red-700 mb-3">Flyaway</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>Attempt to regain control immediately</li>
              <li>Use flight termination if available</li>
              <li>Track last known position</li>
              <li>Report if aircraft not recovered</li>
            </ul>
          </div>

          <div className="rounded-xl border bg-white p-6">
            <h3 className="font-bold text-red-700 mb-3">Manned Aircraft Conflict</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>Descend immediately and land if safe</li>
              <li>Give way to manned aircraft always</li>
              <li>Maintain awareness of aircraft position</li>
              <li>Do not attempt to maneuver around</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Crew Briefing */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Crew Briefing</h2>
        <p className="text-slate-600 mb-4">
          Before operations begin, brief all crew members on:
        </p>

        <div className="bg-slate-100 rounded-xl p-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-2">Mission Brief</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>Flight objectives and plan</li>
                <li>Route and altitude profile</li>
                <li>Duration and battery plan</li>
                <li>Go/no-go criteria</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-2">Safety Brief</h3>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>Roles and responsibilities</li>
                <li>Communication plan</li>
                <li>Emergency procedures</li>
                <li>Site-specific hazards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="mt-12 p-6 bg-slate-100 rounded-xl">
        <h3 className="font-bold text-slate-900 mb-4">Related Topics</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/reference/airspace-rules" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Airspace Rules
          </Link>
          <Link href="/reference/operational-volumes" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            Operational Volumes
          </Link>
          <Link href="/reference/sora-process" className="px-4 py-2 bg-white rounded-lg border hover:border-teal-500 hover:text-teal-600 transition-colors">
            SORA Process
          </Link>
        </div>
      </div>
    </div>
  );
}
