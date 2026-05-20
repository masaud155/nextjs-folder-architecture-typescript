import {
  DashboardChart,
  DashboardHeader,
  DashboardStats,
  getDashboardStats
} from "@/features/dashboard";

export default async function DashboardPage() {
  const { chart } = await getDashboardStats();

  return (
    <div className="grid gap-6">
      <DashboardHeader />
      <DashboardStats />
      <DashboardChart data={chart} />
    </div>
  );
}
