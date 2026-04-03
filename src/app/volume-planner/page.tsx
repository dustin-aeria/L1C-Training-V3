"use client";

import { Layers, Ruler } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import MapView with SSR disabled (Mapbox GL requires browser APIs)
const MapView = dynamic(
  () => import("@/components/volume-planner/MapView").then((mod) => mod.MapView),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
        <div className="text-white/60">Loading map...</div>
      </div>
    ),
  }
);

// Helper to extract value from slider callback
function getSliderValue(val: number | readonly number[]): number {
  if (Array.isArray(val)) {
    return val[0] as number;
  }
  return val as number;
}

// Default parameter values
const defaultParams = {
  // Flight Geography
  gnssAccuracy: 3.0,
  positionHoldError: 3.0,
  mapError: 1.0,
  // Contingency Volume
  maxSpeed: 10.0,
  contingencyTime: 3.0,
  // Ground Risk Buffer
  maxAltitude: 100.0,
};

export default function VolumePlannerPage() {
  const [params, setParams] = useState(defaultParams);
  const [visibleLayers, setVisibleLayers] = useState({
    flightGeography: true,
    contingencyVolume: true,
    groundRiskBuffer: true,
  });

  // Calculate buffer distances
  const fgBuffer =
    params.gnssAccuracy +
    params.positionHoldError +
    params.mapError;

  const cvBuffer = params.maxSpeed * params.contingencyTime;

  const grbBuffer = params.maxAltitude;

  const operationalVolume = fgBuffer + cvBuffer + grbBuffer;

  const handleLayerToggle = (layer: keyof typeof visibleLayers) => {
    setVisibleLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)]">
      {/* Map Area */}
      <div className="flex-1 min-h-[400px] relative bg-slate-900" style={{ minHeight: '400px' }}>
        <MapView
          buffers={{
            flightGeography: fgBuffer,
            contingencyVolume: cvBuffer,
            groundRiskBuffer: grbBuffer,
          }}
          visibleLayers={visibleLayers}
          onLayerToggle={handleLayerToggle}
        />

        {/* Layer Controls (Floating) */}
        <div className="absolute top-4 left-4 z-20 bg-slate-800/90 backdrop-blur rounded-lg p-3 border border-slate-700">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="h-4 w-4 text-slate-400" />
            <span className="text-sm font-medium text-white">Layers</span>
          </div>
          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={visibleLayers.flightGeography}
                onChange={() => handleLayerToggle("flightGeography")}
                className="rounded"
              />
              <span className="w-3 h-3 rounded-sm bg-blue-500"></span>
              Flight Geography
            </label>
            <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={visibleLayers.contingencyVolume}
                onChange={() => handleLayerToggle("contingencyVolume")}
                className="rounded"
              />
              <span className="w-3 h-3 rounded-sm bg-amber-500"></span>
              Contingency Volume
            </label>
            <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
              <input
                type="checkbox"
                checked={visibleLayers.groundRiskBuffer}
                onChange={() => handleLayerToggle("groundRiskBuffer")}
                className="rounded"
              />
              <span className="w-3 h-3 rounded-sm bg-red-500"></span>
              Ground Risk Buffer
            </label>
          </div>
        </div>
      </div>

      {/* Parameter Sidebar */}
      <div className="w-full lg:w-96 lg:max-h-full border-t lg:border-t-0 lg:border-l bg-slate-900 text-white overflow-y-auto">
        <div className="p-6">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Ruler className="h-5 w-5" />
            Volume Parameters
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Adjust parameters to see volume calculations update in real-time.
          </p>

          {/* Flight Geography */}
          <Card className="mt-6 bg-slate-800 border-blue-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2 text-blue-400">
                <span className="w-3 h-3 rounded-sm bg-blue-500"></span>
                Flight Geography
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">GNSS Accuracy</span>
                  <span className="text-slate-400">{params.gnssAccuracy.toFixed(1)} m</span>
                </div>
                <Slider
                  value={[params.gnssAccuracy]}
                  onValueChange={(v) => setParams({ ...params, gnssAccuracy: getSliderValue(v) })}
                  min={0.5}
                  max={10}
                  step={0.5}
                  className="[&_[role=slider]]:bg-blue-500"
                />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">Position Hold Error</span>
                  <span className="text-slate-400">{params.positionHoldError.toFixed(1)} m</span>
                </div>
                <Slider
                  value={[params.positionHoldError]}
                  onValueChange={(v) => setParams({ ...params, positionHoldError: getSliderValue(v) })}
                  min={0.5}
                  max={10}
                  step={0.5}
                  className="[&_[role=slider]]:bg-blue-500"
                />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">Map Error</span>
                  <span className="text-slate-400">{params.mapError.toFixed(1)} m</span>
                </div>
                <Slider
                  value={[params.mapError]}
                  onValueChange={(v) => setParams({ ...params, mapError: getSliderValue(v) })}
                  min={0.5}
                  max={5}
                  step={0.5}
                  className="[&_[role=slider]]:bg-blue-500"
                />
              </div>
              <div className="pt-2 border-t border-slate-700">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-blue-400">FG Buffer</span>
                  <span className="text-blue-400">{fgBuffer.toFixed(1)} m</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contingency Volume */}
          <Card className="mt-4 bg-slate-800 border-amber-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2 text-amber-400">
                <span className="w-3 h-3 rounded-sm bg-amber-500"></span>
                Contingency Volume
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">Max Aircraft Speed</span>
                  <span className="text-slate-400">{params.maxSpeed.toFixed(1)} m/s</span>
                </div>
                <Slider
                  value={[params.maxSpeed]}
                  onValueChange={(v) => setParams({ ...params, maxSpeed: getSliderValue(v) })}
                  min={1}
                  max={30}
                  step={0.5}
                  className="[&_[role=slider]]:bg-amber-500"
                />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">Contingency Time</span>
                  <span className="text-slate-400">{params.contingencyTime.toFixed(1)} s</span>
                </div>
                <Slider
                  value={[params.contingencyTime]}
                  onValueChange={(v) => setParams({ ...params, contingencyTime: getSliderValue(v) })}
                  min={1}
                  max={15}
                  step={0.5}
                  className="[&_[role=slider]]:bg-amber-500"
                />
              </div>
              <div className="pt-2 border-t border-slate-700">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-amber-400">CV Buffer</span>
                  <span className="text-amber-400">{cvBuffer.toFixed(1)} m</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ground Risk Buffer */}
          <Card className="mt-4 bg-slate-800 border-red-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2 text-red-400">
                <span className="w-3 h-3 rounded-sm bg-red-500"></span>
                Ground Risk Buffer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">Max Flight Altitude</span>
                  <span className="text-slate-400">{params.maxAltitude.toFixed(0)} m</span>
                </div>
                <Slider
                  value={[params.maxAltitude]}
                  onValueChange={(v) => setParams({ ...params, maxAltitude: getSliderValue(v) })}
                  min={10}
                  max={400}
                  step={5}
                  className="[&_[role=slider]]:bg-red-500"
                />
              </div>
              <div className="pt-2 border-t border-slate-700">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-red-400">GRB Buffer</span>
                  <span className="text-red-400">{grbBuffer.toFixed(1)} m</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Operational Volume Summary */}
          <Card className="mt-4 bg-slate-800 border-green-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-green-400">Operational Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Flight Geography</span>
                  <span className="text-blue-400">{fgBuffer.toFixed(1)} m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">+ Contingency Volume</span>
                  <span className="text-amber-400">{cvBuffer.toFixed(1)} m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">+ Ground Risk Buffer</span>
                  <span className="text-red-400">{grbBuffer.toFixed(1)} m</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-slate-700 font-medium">
                  <span className="text-green-400">Total Operational Volume</span>
                  <span className="text-green-400">{operationalVolume.toFixed(1)} m</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instructions */}
          <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
            <h3 className="text-sm font-medium text-white mb-2">How to Use</h3>
            <ol className="text-xs text-slate-400 space-y-1 list-decimal list-inside">
              <li>Search for a location or navigate the map</li>
              <li>Click "Draw Path" to start drawing waypoints</li>
              <li>Click on the map to add flight path waypoints</li>
              <li>Adjust parameters in the sidebar to modify buffer zones</li>
              <li>Toggle layers using the checkboxes</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
