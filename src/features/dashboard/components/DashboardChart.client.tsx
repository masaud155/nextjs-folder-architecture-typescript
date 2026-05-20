"use client";

import type { DashboardMetricPoint } from "@/features/dashboard/types/dashboard.types";
import { Card } from "@/shared/ui/Card";

type DashboardChartProps = {
  data: DashboardMetricPoint[];
};

export function DashboardChart({ data }: DashboardChartProps) {
  const maxValue = Math.max(...data.map((point) => point.value));

  return (
    <Card>
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">Module activity</h2>
          <p className="mt-1 text-sm text-slate-400">
            Client component visualizing server data.
          </p>
        </div>
        <span className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-200">
          Live mock
        </span>
      </div>
      <div className="flex h-64 items-end gap-3">
        {data.map((point) => (
          <div className="flex flex-1 flex-col items-center gap-3" key={point.label}>
            <div
              className="w-full rounded-t-md border border-sky-300/30 bg-sky-400/70 transition hover:bg-sky-300"
              style={{ height: `${(point.value / maxValue) * 100}%` }}
            />
            <span className="text-xs text-slate-400">{point.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
