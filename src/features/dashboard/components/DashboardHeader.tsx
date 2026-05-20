import { getCurrentUser } from "@/lib/auth/session";

export async function DashboardHeader() {
  const user = await getCurrentUser();

  return (
    <header className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-medium text-sky-300">Dashboard</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
          Welcome back, {user.name}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
          Server components fetch mock business data from feature queries and compose
          product UI at the route boundary.
        </p>
      </div>
      <div className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
        Role: <span className="font-semibold text-white">{user.role}</span>
      </div>
    </header>
  );
}
