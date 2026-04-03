"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import buffer from "@turf/buffer";
import { lineString } from "@turf/helpers";
import { Search, Plus, Trash2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

// Get token from environment
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";

// Check if token is valid (must start with pk.)
const isValidToken = MAPBOX_TOKEN.startsWith("pk.");

interface BufferDistances {
  flightGeography: number;
  contingencyVolume: number;
  groundRiskBuffer: number;
}

interface MapViewProps {
  buffers: BufferDistances;
  visibleLayers: {
    flightGeography: boolean;
    contingencyVolume: boolean;
    groundRiskBuffer: boolean;
  };
  onLayerToggle: (layer: keyof BufferDistances) => void;
}

// Default center on Edmonton, Alberta (common RPAS operating area)
const DEFAULT_CENTER: [number, number] = [-113.4909, 53.5444];
const DEFAULT_ZOOM = 12;

export function MapView({ buffers, visibleLayers, onLayerToggle }: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [flightPath, setFlightPath] = useState<[number, number][]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);

  // Initialize map
  useEffect(() => {
    console.log("[MapView] Init effect running, container:", mapContainer.current, "map exists:", !!map.current);
    console.log("[MapView] Token:", MAPBOX_TOKEN ? `${MAPBOX_TOKEN.substring(0, 10)}...` : "MISSING", "isValid:", isValidToken);

    if (!mapContainer.current) {
      console.error("[MapView] No container ref!");
      return;
    }

    if (map.current) {
      console.log("[MapView] Map already exists, skipping init");
      return;
    }

    if (!MAPBOX_TOKEN || !isValidToken) {
      console.error("[MapView] Invalid token - must start with pk.");
      return;
    }

    mapboxgl.accessToken = MAPBOX_TOKEN;

    try {
      console.log("[MapView] Creating map...");
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/satellite-streets-v12",
        center: DEFAULT_CENTER,
        zoom: DEFAULT_ZOOM,
        pitch: 0,
        bearing: 0,
      });
      console.log("[MapView] Map created successfully");

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), "bottom-right");
      map.current.addControl(new mapboxgl.ScaleControl({ unit: "metric" }), "bottom-left");

      map.current.on("load", () => {
        console.log("[MapView] Map loaded, initializing layers");
        setMapLoaded(true);
        initializeLayers();
      });

      map.current.on("error", (e) => {
        console.error("[MapView] Map error:", e);
      });

      // Click handler for drawing
      map.current.on("click", handleMapClick);
    } catch (err) {
      console.error("[MapView] Failed to create map:", err);
    }

    return () => {
      console.log("[MapView] Cleanup");
      map.current?.remove();
      map.current = null;
    };
  }, []);

  // Initialize map layers for buffer visualization
  const initializeLayers = useCallback(() => {
    if (!map.current) return;

    // Flight path source
    map.current.addSource("flight-path", {
      type: "geojson",
      data: { type: "FeatureCollection", features: [] },
    });

    // Ground Risk Buffer (outermost - red)
    map.current.addSource("grb-buffer", {
      type: "geojson",
      data: { type: "FeatureCollection", features: [] },
    });
    map.current.addLayer({
      id: "grb-buffer-fill",
      type: "fill",
      source: "grb-buffer",
      paint: {
        "fill-color": "#ef4444",
        "fill-opacity": 0.15,
      },
    });
    map.current.addLayer({
      id: "grb-buffer-outline",
      type: "line",
      source: "grb-buffer",
      paint: {
        "line-color": "#ef4444",
        "line-width": 2,
        "line-dasharray": [2, 2],
      },
    });

    // Contingency Volume (middle - amber)
    map.current.addSource("cv-buffer", {
      type: "geojson",
      data: { type: "FeatureCollection", features: [] },
    });
    map.current.addLayer({
      id: "cv-buffer-fill",
      type: "fill",
      source: "cv-buffer",
      paint: {
        "fill-color": "#f59e0b",
        "fill-opacity": 0.2,
      },
    });
    map.current.addLayer({
      id: "cv-buffer-outline",
      type: "line",
      source: "cv-buffer",
      paint: {
        "line-color": "#f59e0b",
        "line-width": 2,
      },
    });

    // Flight Geography (innermost - blue)
    map.current.addSource("fg-buffer", {
      type: "geojson",
      data: { type: "FeatureCollection", features: [] },
    });
    map.current.addLayer({
      id: "fg-buffer-fill",
      type: "fill",
      source: "fg-buffer",
      paint: {
        "fill-color": "#3b82f6",
        "fill-opacity": 0.25,
      },
    });
    map.current.addLayer({
      id: "fg-buffer-outline",
      type: "line",
      source: "fg-buffer",
      paint: {
        "line-color": "#3b82f6",
        "line-width": 2,
      },
    });

    // Flight path line
    map.current.addLayer({
      id: "flight-path-line",
      type: "line",
      source: "flight-path",
      paint: {
        "line-color": "#ffffff",
        "line-width": 3,
      },
    });

    // Flight path points
    map.current.addSource("flight-path-points", {
      type: "geojson",
      data: { type: "FeatureCollection", features: [] },
    });
    map.current.addLayer({
      id: "flight-path-points",
      type: "circle",
      source: "flight-path-points",
      paint: {
        "circle-radius": 6,
        "circle-color": "#ffffff",
        "circle-stroke-width": 2,
        "circle-stroke-color": "#3b82f6",
      },
    });
  }, []);

  // Handle map click for drawing
  const handleMapClick = useCallback(
    (e: mapboxgl.MapMouseEvent) => {
      if (!isDrawing || !map.current) return;

      const newPoint: [number, number] = [e.lngLat.lng, e.lngLat.lat];
      setFlightPath((prev) => [...prev, newPoint]);
    },
    [isDrawing]
  );

  // Update map click handler when drawing state changes
  useEffect(() => {
    if (!map.current) return;

    map.current.off("click", handleMapClick);
    map.current.on("click", handleMapClick);

    // Change cursor when drawing
    if (map.current.getCanvas()) {
      map.current.getCanvas().style.cursor = isDrawing ? "crosshair" : "";
    }
  }, [isDrawing, handleMapClick]);

  // Update flight path visualization
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    const pathSource = map.current.getSource("flight-path") as mapboxgl.GeoJSONSource;
    const pointsSource = map.current.getSource("flight-path-points") as mapboxgl.GeoJSONSource;

    if (pathSource && flightPath.length > 0) {
      pathSource.setData({
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: flightPath,
        },
      });
    }

    if (pointsSource) {
      pointsSource.setData({
        type: "FeatureCollection",
        features: flightPath.map((coord, idx) => ({
          type: "Feature",
          properties: { index: idx },
          geometry: {
            type: "Point",
            coordinates: coord,
          },
        })),
      });
    }

    // Update buffer zones
    updateBufferZones();
  }, [flightPath, mapLoaded]);

  // Update buffer zones when buffers change
  useEffect(() => {
    if (!map.current || !mapLoaded) return;
    updateBufferZones();
  }, [buffers, mapLoaded]);

  // Update layer visibility
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    const setLayerVisibility = (layerId: string, visible: boolean) => {
      if (map.current?.getLayer(layerId)) {
        map.current.setLayoutProperty(layerId, "visibility", visible ? "visible" : "none");
      }
    };

    setLayerVisibility("fg-buffer-fill", visibleLayers.flightGeography);
    setLayerVisibility("fg-buffer-outline", visibleLayers.flightGeography);
    setLayerVisibility("cv-buffer-fill", visibleLayers.contingencyVolume);
    setLayerVisibility("cv-buffer-outline", visibleLayers.contingencyVolume);
    setLayerVisibility("grb-buffer-fill", visibleLayers.groundRiskBuffer);
    setLayerVisibility("grb-buffer-outline", visibleLayers.groundRiskBuffer);
  }, [visibleLayers, mapLoaded]);

  // Calculate and update buffer zones around flight path using Turf.js
  const updateBufferZones = useCallback(() => {
    if (!map.current || flightPath.length < 2) return;

    // Create a LineString from the flight path
    const line = lineString(flightPath);

    // Create proper geodesic buffers around the flight path line
    // Buffer distances are cumulative (each layer includes the previous)
    const fgBufferGeo = buffer(line, buffers.flightGeography, { units: "meters" });
    const cvBufferGeo = buffer(line, buffers.flightGeography + buffers.contingencyVolume, { units: "meters" });
    const grbBufferGeo = buffer(line, buffers.flightGeography + buffers.contingencyVolume + buffers.groundRiskBuffer, { units: "meters" });

    // Update each buffer layer
    const fgSource = map.current.getSource("fg-buffer") as mapboxgl.GeoJSONSource;
    const cvSource = map.current.getSource("cv-buffer") as mapboxgl.GeoJSONSource;
    const grbSource = map.current.getSource("grb-buffer") as mapboxgl.GeoJSONSource;

    if (fgSource && fgBufferGeo) {
      fgSource.setData(fgBufferGeo);
    }
    if (cvSource && cvBufferGeo) {
      cvSource.setData(cvBufferGeo);
    }
    if (grbSource && grbBufferGeo) {
      grbSource.setData(grbBufferGeo);
    }
  }, [flightPath, buffers]);

  // Search for location
  const handleSearch = async () => {
    if (!searchQuery.trim() || !map.current) return;

    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          searchQuery
        )}.json?access_token=${MAPBOX_TOKEN}&country=CA&limit=1`
      );
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center;
        map.current.flyTo({
          center: [lng, lat],
          zoom: 14,
          duration: 2000,
        });
      }
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  // Clear flight path
  const clearFlightPath = () => {
    setFlightPath([]);
    setIsDrawing(false);

    if (!map.current) return;

    const sources = ["flight-path", "flight-path-points", "fg-buffer", "cv-buffer", "grb-buffer"];
    sources.forEach((sourceId) => {
      const source = map.current?.getSource(sourceId) as mapboxgl.GeoJSONSource;
      if (source) {
        source.setData({ type: "FeatureCollection", features: [] });
      }
    });
  };

  // Show token warning if no token or invalid token
  if (!MAPBOX_TOKEN || !isValidToken) {
    const isSecretToken = MAPBOX_TOKEN.startsWith("sk.");
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
        <div className="text-center text-white/70 max-w-lg p-8">
          <MapPin className="h-12 w-12 mx-auto mb-4 text-amber-500" />
          <h2 className="text-xl font-semibold text-white">
            {isSecretToken ? "Wrong Token Type" : "Mapbox Token Required"}
          </h2>
          {isSecretToken ? (
            <>
              <p className="mt-2 text-white/60">
                You&apos;re using a <span className="text-red-400">secret token (sk.*)</span> which is for server-side use only.
                Mapbox GL JS requires a <span className="text-green-400">public token (pk.*)</span>.
              </p>
              <div className="mt-4 p-4 bg-slate-800 rounded text-left text-sm">
                <p className="text-white font-medium mb-2">To fix this:</p>
                <ol className="list-decimal list-inside text-slate-300 space-y-1">
                  <li>Go to <a href="https://account.mapbox.com/access-tokens/" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">account.mapbox.com/access-tokens</a></li>
                  <li>Copy your <strong>Default public token</strong> (starts with pk.)</li>
                  <li>Update <code className="text-amber-400">.env.local</code>:</li>
                </ol>
                <code className="block mt-2 p-2 bg-slate-700 rounded text-amber-400 text-xs">
                  NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ...
                </code>
                <p className="mt-2 text-slate-400 text-xs">Then restart the dev server</p>
              </div>
            </>
          ) : (
            <>
              <p className="mt-2 text-white/60">
                Please add your Mapbox public token to the environment variables:
              </p>
              <code className="block mt-4 p-3 bg-slate-800 rounded text-sm text-amber-400">
                NEXT_PUBLIC_MAPBOX_TOKEN=pk.your_token_here
              </code>
              <p className="mt-4 text-xs text-white/40">
                Get a free token at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">mapbox.com</a>
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      {/* Map container */}
      <div ref={mapContainer} className="w-full h-full" style={{ minHeight: '400px' }} />

      {/* Search bar */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-2 bg-slate-800/90 backdrop-blur rounded-lg p-2 border border-slate-700">
          <input
            type="text"
            placeholder="Search location in Canada..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="bg-transparent border-none text-white placeholder-slate-400 text-sm w-64 focus:outline-none px-2"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={handleSearch}
            className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-700"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Drawing controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <Button
          variant={isDrawing ? "default" : "secondary"}
          size="sm"
          onClick={() => setIsDrawing(!isDrawing)}
          className={isDrawing ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-800/90 hover:bg-slate-700 text-white border-slate-700"}
        >
          <Plus className="h-4 w-4 mr-1" />
          {isDrawing ? "Drawing..." : "Draw Path"}
        </Button>
        {flightPath.length > 0 && (
          <Button
            variant="secondary"
            size="sm"
            onClick={clearFlightPath}
            className="bg-slate-800/90 hover:bg-slate-700 text-white border-slate-700"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      {/* Instructions overlay */}
      {isDrawing && flightPath.length === 0 && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-slate-800/90 backdrop-blur rounded-lg px-4 py-2 border border-slate-700 text-white text-sm">
            Click on the map to add flight path waypoints
          </div>
        </div>
      )}

      {/* Path info */}
      {flightPath.length > 0 && (
        <div className="absolute bottom-20 left-4 z-10">
          <div className="bg-slate-800/90 backdrop-blur rounded-lg p-3 border border-slate-700 text-white text-sm">
            <div className="font-medium mb-1">Flight Path</div>
            <div className="text-slate-400">{flightPath.length} waypoints</div>
          </div>
        </div>
      )}
    </div>
  );
}
