import { cn } from "@/lib/utils";
import { Check, X, Minus } from "lucide-react";

interface TableColumn {
  key: string;
  header: string;
  align?: "left" | "center" | "right";
  width?: string;
}

interface QuickTableProps {
  title?: string;
  description?: string;
  columns: TableColumn[];
  rows: Record<string, string | number | boolean | null | undefined>[];
  highlightColumn?: string;
  compact?: boolean;
}

export function QuickTable({
  title,
  description,
  columns,
  rows,
  highlightColumn,
  compact = false
}: QuickTableProps) {
  const renderCell = (value: string | number | boolean | null | undefined, colKey: string) => {
    if (value === true) {
      return <Check className="h-5 w-5 text-green-600 mx-auto" />;
    }
    if (value === false) {
      return <X className="h-5 w-5 text-red-500 mx-auto" />;
    }
    if (value === null || value === undefined) {
      return <Minus className="h-5 w-5 text-slate-400 mx-auto" />;
    }
    return value;
  };

  return (
    <div className="rounded-xl border bg-white overflow-hidden">
      {(title || description) && (
        <div className="p-4 border-b bg-slate-50">
          {title && <h3 className="font-bold text-slate-900">{title}</h3>}
          {description && <p className="text-sm text-slate-600 mt-1">{description}</p>}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-100">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    "px-4 py-3 text-sm font-semibold text-slate-700 border-b",
                    col.align === "center" && "text-center",
                    col.align === "right" && "text-right",
                    col.key === highlightColumn && "bg-teal-100 text-teal-800",
                    compact ? "px-3 py-2" : "px-4 py-3"
                  )}
                  style={col.width ? { width: col.width } : undefined}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={cn(
                  "border-b last:border-b-0 hover:bg-slate-50 transition-colors",
                  idx % 2 === 1 && "bg-slate-50/50"
                )}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      "px-4 py-3 text-sm",
                      col.align === "center" && "text-center",
                      col.align === "right" && "text-right",
                      col.key === highlightColumn && "bg-teal-50 font-medium text-teal-800",
                      compact ? "px-3 py-2" : "px-4 py-3"
                    )}
                  >
                    {renderCell(row[col.key], col.key)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Specialized comparison table for operation types
interface ComparisonItem {
  feature: string;
  basic: string | boolean | null;
  advanced: string | boolean | null;
  l1c: string | boolean | null;
  sfoc?: string | boolean | null;
  [key: string]: string | number | boolean | null | undefined;
}

interface ComparisonTableProps {
  title?: string;
  items: ComparisonItem[];
  showSFOC?: boolean;
}

export function ComparisonTable({ title, items, showSFOC = false }: ComparisonTableProps) {
  const columns: TableColumn[] = [
    { key: "feature", header: "Feature / Requirement", width: "40%" },
    { key: "basic", header: "Basic", align: "center" },
    { key: "advanced", header: "Advanced", align: "center" },
    { key: "l1c", header: "L1C", align: "center" },
  ];

  if (showSFOC) {
    columns.push({ key: "sfoc", header: "SFOC", align: "center" });
  }

  return (
    <QuickTable
      title={title}
      columns={columns}
      rows={items}
      highlightColumn="l1c"
    />
  );
}

// Key-value reference card
interface KeyValueItem {
  label: string;
  value: string;
  note?: string;
}

interface KeyValueTableProps {
  title?: string;
  items: KeyValueItem[];
}

export function KeyValueTable({ title, items }: KeyValueTableProps) {
  return (
    <div className="rounded-xl border bg-white overflow-hidden">
      {title && (
        <div className="p-4 border-b bg-slate-50">
          <h3 className="font-bold text-slate-900">{title}</h3>
        </div>
      )}
      <div className="divide-y">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start p-4 hover:bg-slate-50 transition-colors">
            <dt className="w-1/3 text-sm font-medium text-slate-600">{item.label}</dt>
            <dd className="w-2/3">
              <div className="text-sm font-semibold text-slate-900">{item.value}</div>
              {item.note && <div className="text-xs text-slate-500 mt-1">{item.note}</div>}
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}
