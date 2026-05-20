import Link from "next/link";
import type { ReactNode } from "react";

import { routes } from "@/config/routes";

const dashboardLinks = [
  { href: routes.dashboard, label: "Overview" },
  { href: routes.settings, label: "Settings" },
  { href: routes.pricing, label: "Billing" }
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[240px_1fr]">
      <aside className="h-fit rounded-lg border border-white/10 bg-slate-950/70 p-3">
        <p className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Workspace
        </p>
        <nav className="grid gap-1">
          {dashboardLinks.map((link) => (
            <Link
              className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <section className="min-w-0">{children}</section>
    </main>
  );
}
