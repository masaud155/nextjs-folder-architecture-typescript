export type DashboardStat = {
  label: string;
  value: string;
  change: string;
};

export type DashboardMetricPoint = {
  label: string;
  value: number;
};

export type DashboardStatsData = {
  stats: DashboardStat[];
  chart: DashboardMetricPoint[];
};
