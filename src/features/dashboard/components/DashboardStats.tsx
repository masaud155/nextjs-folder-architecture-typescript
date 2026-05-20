import { getDashboardStats } from "@/features/dashboard/queries/getDashboardStats";
import { Card } from "@/shared/ui/Card";

export async function DashboardStats() {
  const { stats } = await getDashboardStats();

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card className="p-5" key={stat.label}>
          <p className="text-sm text-slate-400">{stat.label}</p>
          <div className="mt-3 flex items-end justify-between gap-3">
            <p className="text-2xl font-semibold text-white">{stat.value}</p>
            <p className="text-sm font-medium text-emerald-300">{stat.change}</p>
          </div>
        </Card>
      ))}
    </section>
  );
}
