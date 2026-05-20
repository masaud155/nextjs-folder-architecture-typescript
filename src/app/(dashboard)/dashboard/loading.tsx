export default function DashboardLoading() {
  return (
    <div className="grid gap-4">
      <div className="h-24 animate-pulse rounded-lg bg-white/8" />
      <div className="grid gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="h-32 animate-pulse rounded-lg bg-white/8" key={index} />
        ))}
      </div>
      <div className="h-80 animate-pulse rounded-lg bg-white/8" />
    </div>
  );
}
