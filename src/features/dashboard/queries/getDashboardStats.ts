import type { DashboardStatsData } from "@/features/dashboard/types/dashboard.types";

export async function getDashboardStats(): Promise<DashboardStatsData> {
  return {
    stats: [
      { label: "Active users", value: "12,840", change: "+18.4%" },
      { label: "Server actions", value: "428k", change: "+9.1%" },
      { label: "Build time", value: "52s", change: "-14.7%" },
      { label: "Module health", value: "98%", change: "+3.2%" }
    ],
    chart: [
      { label: "Mon", value: 32 },
      { label: "Tue", value: 48 },
      { label: "Wed", value: 44 },
      { label: "Thu", value: 68 },
      { label: "Fri", value: 74 },
      { label: "Sat", value: 61 },
      { label: "Sun", value: 83 }
    ]
  };
}
