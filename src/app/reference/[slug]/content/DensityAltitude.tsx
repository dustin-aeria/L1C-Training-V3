"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";

export function DensityAltitudeContent() {
  // Input states
  const [elevation, setElevation] = useState<string>("1000");
  const [elevationUnit, setElevationUnit] = useState<"ft" | "m">("ft");
  const [temperature, setTemperature] = useState<string>("25");
  const [tempUnit, setTempUnit] = useState<"C" | "F">("C");
  const [altimeterSetting, setAltimeterSetting] = useState<string>("29.92");
  const [altimeterUnit, setAltimeterUnit] = useState<"inHg" | "hPa">("inHg");

  // Calculated values
  const [pressureAltitude, setPressureAltitude] = useState<number>(0);
  const [isaTemp, setIsaTemp] = useState<number>(0);
  const [isaDeviation, setIsaDeviation] = useState<number>(0);
  const [densityAltitude, setDensityAltitude] = useState<number>(0);
  const [performanceImpact, setPerformanceImpact] = useState<string>("");

  useEffect(() => {
    calculateDensityAltitude();
  }, [elevation, elevationUnit, temperature, tempUnit, altimeterSetting, altimeterUnit]);

  const calculateDensityAltitude = () => {
    // Convert elevation to feet
    let elevFt = parseFloat(elevation) || 0;
    if (elevationUnit === "m") {
      elevFt = elevFt * 3.28084;
    }

    // Convert temperature to Celsius
    let tempC = parseFloat(temperature) || 0;
    if (tempUnit === "F") {
      tempC = (tempC - 32) * (5 / 9);
    }

    // Convert altimeter to inHg
    let altInHg = parseFloat(altimeterSetting) || 29.92;
    if (altimeterUnit === "hPa") {
      altInHg = altInHg * 0.02953;
    }

    // Calculate Pressure Altitude
    const pressAlt = elevFt + (29.92 - altInHg) * 1000;
    setPressureAltitude(Math.round(pressAlt));

    // Calculate ISA temperature at this altitude
    const isaTemperature = 15 - (2 * (elevFt / 1000));
    setIsaTemp(Math.round(isaTemperature * 10) / 10);

    // Calculate ISA deviation
    const deviation = tempC - isaTemperature;
    setIsaDeviation(Math.round(deviation * 10) / 10);

    // Calculate Density Altitude using Koch Chart approximation
    const densAlt = pressAlt + (120 * deviation);
    setDensityAltitude(Math.round(densAlt));

    // Determine performance impact
    if (densAlt < 0) {
      setPerformanceImpact("excellent");
    } else if (densAlt < 2000) {
      setPerformanceImpact("good");
    } else if (densAlt < 4000) {
      setPerformanceImpact("moderate");
    } else if (densAlt < 6000) {
      setPerformanceImpact("reduced");
    } else if (densAlt < 8000) {
      setPerformanceImpact("significant");
    } else {
      setPerformanceImpact("severe");
    }
  };

  const getPerformanceColor = () => {
    switch (performanceImpact) {
      case "excellent":
      case "good":
        return "text-green-600 bg-green-50 border-green-200";
      case "moderate":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "reduced":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "significant":
      case "severe":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getPerformanceText = () => {
    switch (performanceImpact) {
      case "excellent":
        return "Excellent — Better than rated performance. Cold, dense air provides extra lift.";
      case "good":
        return "Good — Near rated performance. Normal operations.";
      case "moderate":
        return "Moderate — Slight reduction in climb rate and endurance. Plan conservatively.";
      case "reduced":
        return "Reduced — Noticeable performance degradation. Reduce payload, increase battery reserves.";
      case "significant":
        return "Significant — 15-25% reduction expected. Consider postponing or flying earlier in day.";
      case "severe":
        return "Severe — Near aircraft limits. High risk of insufficient power for safe operations.";
      default:
        return "";
    }
  };

  const getPerformanceIcon = () => {
    switch (performanceImpact) {
      case "excellent":
      case "good":
        return <CheckCircle className="h-5 w-5" />;
      case "moderate":
        return <Info className="h-5 w-5" />;
      default:
        return <AlertTriangle className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-muted-foreground">
          Density altitude represents the altitude at which your RPAS "thinks" it's flying based on air density.
          Higher density altitude means thinner air, less lift per motor revolution, and reduced performance.
        </p>
      </div>

      {/* Calculator */}
      <Card className="border-2 border-primary/20">
        <CardHeader className="bg-primary/5">
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🧮</span>
            Density Altitude Calculator
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Elevation Input */}
            <div className="space-y-2">
              <Label htmlFor="elevation">Site Elevation</Label>
              <div className="flex gap-2">
                <Input
                  id="elevation"
                  type="number"
                  value={elevation}
                  onChange={(e) => setElevation(e.target.value)}
                  className="flex-1"
                />
                <Select value={elevationUnit} onValueChange={(v) => setElevationUnit(v as "ft" | "m")}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ft">ft</SelectItem>
                    <SelectItem value="m">m</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Temperature Input */}
            <div className="space-y-2">
              <Label htmlFor="temperature">Outside Air Temperature</Label>
              <div className="flex gap-2">
                <Input
                  id="temperature"
                  type="number"
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                  className="flex-1"
                />
                <Select value={tempUnit} onValueChange={(v) => setTempUnit(v as "C" | "F")}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="C">°C</SelectItem>
                    <SelectItem value="F">°F</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Altimeter Setting Input */}
            <div className="space-y-2">
              <Label htmlFor="altimeter">Altimeter Setting</Label>
              <div className="flex gap-2">
                <Input
                  id="altimeter"
                  type="number"
                  step="0.01"
                  value={altimeterSetting}
                  onChange={(e) => setAltimeterSetting(e.target.value)}
                  className="flex-1"
                />
                <Select value={altimeterUnit} onValueChange={(v) => setAltimeterUnit(v as "inHg" | "hPa")}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inHg">inHg</SelectItem>
                    <SelectItem value="hPa">hPa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="rounded-lg bg-slate-50 p-4 text-center">
              <div className="text-sm text-muted-foreground">Pressure Altitude</div>
              <div className="text-2xl font-bold text-slate-800">{pressureAltitude.toLocaleString()} ft</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-4 text-center">
              <div className="text-sm text-muted-foreground">ISA Temp @ Elevation</div>
              <div className="text-2xl font-bold text-slate-800">{isaTemp}°C</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-4 text-center">
              <div className="text-sm text-muted-foreground">ISA Deviation</div>
              <div className={`text-2xl font-bold ${isaDeviation > 0 ? "text-red-600" : "text-green-600"}`}>
                {isaDeviation > 0 ? "+" : ""}{isaDeviation}°C
              </div>
            </div>
            <div className="rounded-lg bg-primary/10 p-4 text-center border-2 border-primary/30">
              <div className="text-sm text-primary font-medium">Density Altitude</div>
              <div className="text-3xl font-bold text-primary">{densityAltitude.toLocaleString()} ft</div>
            </div>
          </div>

          {/* Performance Impact */}
          <div className={`mt-6 rounded-lg border-2 p-4 ${getPerformanceColor()}`}>
            <div className="flex items-start gap-3">
              {getPerformanceIcon()}
              <div>
                <div className="font-semibold">Performance Impact</div>
                <div className="mt-1">{getPerformanceText()}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reference Tables */}
      <Card>
        <CardHeader>
          <CardTitle>ISA Standard Temperatures by Elevation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-slate-50">
                  <th className="px-4 py-2 text-left">Elevation (ft)</th>
                  <th className="px-4 py-2 text-left">Elevation (m)</th>
                  <th className="px-4 py-2 text-left">ISA Temperature</th>
                  <th className="px-4 py-2 text-left">Std Pressure (hPa)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { ft: 0, m: 0, temp: "15°C (59°F)", pressure: 1013 },
                  { ft: 1000, m: 305, temp: "13°C (55°F)", pressure: 977 },
                  { ft: 2000, m: 610, temp: "11°C (52°F)", pressure: 942 },
                  { ft: 3000, m: 914, temp: "9°C (48°F)", pressure: 908 },
                  { ft: 4000, m: 1219, temp: "7°C (45°F)", pressure: 875 },
                  { ft: 5000, m: 1524, temp: "5°C (41°F)", pressure: 843 },
                  { ft: 6000, m: 1829, temp: "3°C (37°F)", pressure: 812 },
                  { ft: 8000, m: 2438, temp: "-1°C (30°F)", pressure: 753 },
                  { ft: 10000, m: 3048, temp: "-5°C (23°F)", pressure: 697 },
                ].map((row) => (
                  <tr key={row.ft} className="border-b">
                    <td className="px-4 py-2">{row.ft.toLocaleString()}</td>
                    <td className="px-4 py-2">{row.m.toLocaleString()}</td>
                    <td className="px-4 py-2">{row.temp}</td>
                    <td className="px-4 py-2">{row.pressure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Common Scenarios */}
      <Card>
        <CardHeader>
          <CardTitle>Common Scenarios — Quick Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-slate-50">
                  <th className="px-4 py-2 text-left">Scenario</th>
                  <th className="px-4 py-2 text-left">Elevation</th>
                  <th className="px-4 py-2 text-left">Temp</th>
                  <th className="px-4 py-2 text-left">Density Alt</th>
                  <th className="px-4 py-2 text-left">Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { scenario: "Cool morning, low elevation", elev: "500 ft", temp: "10°C", da: "~20 ft", impact: "Excellent", color: "text-green-600" },
                  { scenario: "Standard day, sea level", elev: "0 ft", temp: "15°C", da: "0 ft", impact: "As rated", color: "text-green-600" },
                  { scenario: "Hot summer afternoon", elev: "1,000 ft", temp: "35°C", da: "~3,400 ft", impact: "Reduced", color: "text-orange-600" },
                  { scenario: "High altitude site", elev: "4,000 ft", temp: "25°C", da: "~6,200 ft", impact: "Significant", color: "text-red-600" },
                  { scenario: "AB summer, mountains", elev: "5,000 ft", temp: "32°C", da: "~8,200 ft", impact: "Severe", color: "text-red-600" },
                  { scenario: "Cold winter operation", elev: "2,000 ft", temp: "-15°C", da: "~-1,100 ft", impact: "Excellent lift", color: "text-green-600" },
                ].map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="px-4 py-2">{row.scenario}</td>
                    <td className="px-4 py-2">{row.elev}</td>
                    <td className="px-4 py-2">{row.temp}</td>
                    <td className="px-4 py-2 font-medium">{row.da}</td>
                    <td className={`px-4 py-2 font-medium ${row.color}`}>{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Formula Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Calculation Formula</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-slate max-w-none">
          <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm">
            <p className="font-bold mb-2">Density Altitude = Pressure Altitude + (120 × ISA Deviation)</p>
            <p className="text-muted-foreground mb-4">Where:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>Pressure Altitude = Elevation + [(29.92 − Altimeter Setting) × 1,000]</li>
              <li>ISA Temp = 15°C − (2°C × [Elevation in 1000s of ft])</li>
              <li>ISA Deviation = Outside Air Temp − ISA Temp</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
