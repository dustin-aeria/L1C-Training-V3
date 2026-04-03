"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, CheckCircle2, XCircle, HelpCircle, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FlowchartNode {
  id: string;
  type: "start" | "decision" | "action" | "end" | "process";
  label: string;
  description?: string;
  yes?: string; // ID of next node if yes
  no?: string;  // ID of next node if no
  next?: string; // ID of next node (for non-decision nodes)
  highlight?: "success" | "warning" | "danger" | "info";
}

interface FlowchartProps {
  title: string;
  nodes: FlowchartNode[];
  startNodeId: string;
}

export function Flowchart({ title, nodes, startNodeId }: FlowchartProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set([startNodeId]));
  const [activePath, setActivePath] = useState<string[]>([startNodeId]);

  const nodeMap = new Map(nodes.map(n => [n.id, n]));

  const toggleNode = (id: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const selectPath = (nodeId: string, choice?: "yes" | "no") => {
    const node = nodeMap.get(nodeId);
    if (!node) return;

    // Find where this node is in the current path
    const nodeIndex = activePath.indexOf(nodeId);
    let newPath = nodeIndex >= 0 ? activePath.slice(0, nodeIndex + 1) : [...activePath, nodeId];

    // Add the next node based on choice
    let nextId: string | undefined;
    if (choice === "yes") nextId = node.yes;
    else if (choice === "no") nextId = node.no;
    else nextId = node.next;

    if (nextId) {
      newPath.push(nextId);
      setExpandedNodes(prev => new Set([...prev, nextId!]));
    }

    setActivePath(newPath);
  };

  const renderNode = (nodeId: string, depth: number = 0) => {
    const node = nodeMap.get(nodeId);
    if (!node) return null;

    const isExpanded = expandedNodes.has(nodeId);
    const isInPath = activePath.includes(nodeId);
    const pathIndex = activePath.indexOf(nodeId);
    const nextInPath = pathIndex >= 0 && pathIndex < activePath.length - 1 ? activePath[pathIndex + 1] : null;

    const bgColors = {
      start: "bg-blue-500 text-white",
      decision: "bg-amber-100 border-amber-400 text-amber-900",
      action: "bg-green-100 border-green-400 text-green-900",
      process: "bg-slate-100 border-slate-400 text-slate-900",
      end: "bg-slate-700 text-white",
    };

    const highlightColors = {
      success: "ring-2 ring-green-500",
      warning: "ring-2 ring-amber-500",
      danger: "ring-2 ring-red-500",
      info: "ring-2 ring-blue-500",
    };

    return (
      <div key={nodeId} className={cn("ml-0", depth > 0 && "ml-8")}>
        {/* Connector line */}
        {depth > 0 && (
          <div className="flex items-center mb-2">
            <ArrowDown className="h-5 w-5 text-slate-400 mx-auto" />
          </div>
        )}

        {/* Node */}
        <div
          className={cn(
            "rounded-lg border-2 p-4 transition-all cursor-pointer",
            bgColors[node.type],
            node.highlight && highlightColors[node.highlight],
            isInPath && "shadow-lg",
            !isInPath && "opacity-60"
          )}
          onClick={() => toggleNode(nodeId)}
        >
          <div className="flex items-start gap-3">
            {node.type === "decision" ? (
              <HelpCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
            ) : node.type === "start" ? (
              <ChevronRight className="h-5 w-5 flex-shrink-0 mt-0.5" />
            ) : node.type === "end" ? (
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
            ) : (
              <div className="h-5 w-5 flex-shrink-0 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold">
                {depth + 1}
              </div>
            )}
            <div className="flex-1">
              <div className="font-semibold">{node.label}</div>
              {node.description && isExpanded && (
                <p className="mt-1 text-sm opacity-80">{node.description}</p>
              )}
            </div>
            {(node.description || node.type === "decision") && (
              <ChevronDown className={cn("h-5 w-5 transition-transform", isExpanded && "rotate-180")} />
            )}
          </div>

          {/* Decision buttons */}
          {node.type === "decision" && isExpanded && (
            <div className="mt-4 flex gap-3">
              {node.yes && (
                <button
                  onClick={(e) => { e.stopPropagation(); selectPath(nodeId, "yes"); }}
                  className={cn(
                    "flex-1 py-2 px-4 rounded-lg font-medium transition-all",
                    "bg-green-500 text-white hover:bg-green-600",
                    nextInPath === node.yes && "ring-2 ring-green-300"
                  )}
                >
                  <CheckCircle2 className="h-4 w-4 inline mr-2" />
                  Yes
                </button>
              )}
              {node.no && (
                <button
                  onClick={(e) => { e.stopPropagation(); selectPath(nodeId, "no"); }}
                  className={cn(
                    "flex-1 py-2 px-4 rounded-lg font-medium transition-all",
                    "bg-red-500 text-white hover:bg-red-600",
                    nextInPath === node.no && "ring-2 ring-red-300"
                  )}
                >
                  <XCircle className="h-4 w-4 inline mr-2" />
                  No
                </button>
              )}
            </div>
          )}
        </div>

        {/* Render next nodes */}
        {isExpanded && node.type !== "decision" && node.next && (
          renderNode(node.next, depth + 1)
        )}
        {isExpanded && node.type === "decision" && nextInPath && (
          renderNode(nextInPath, depth + 1)
        )}
      </div>
    );
  };

  return (
    <div className="rounded-xl border bg-white p-6">
      <h3 className="text-lg font-bold text-slate-900 mb-4">{title}</h3>
      <div className="space-y-2">
        {renderNode(startNodeId)}
      </div>
      <div className="mt-4 pt-4 border-t">
        <button
          onClick={() => {
            setActivePath([startNodeId]);
            setExpandedNodes(new Set([startNodeId]));
          }}
          className="text-sm text-teal-600 hover:text-teal-700 font-medium"
        >
          Reset flowchart
        </button>
      </div>
    </div>
  );
}
