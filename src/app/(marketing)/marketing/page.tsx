import Link from "next/link";

import { routes } from "@/config/routes";
import { Card } from "@/shared/ui/Card";

export default function MarketingPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
          Marketing route group
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Public pages stay grouped without leaking product logic into routes.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          This route demonstrates how marketing surfaces can compose reusable shared UI
          while keeping business capabilities inside feature modules.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {["Fast to scan", "Easy to extend", "Clear boundaries"].map((title) => (
          <Card key={title}>
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Route groups organize pages by concern while preserving clean public URLs.
            </p>
          </Card>
        ))}
      </div>
      <Link
        className="mt-8 inline-flex h-11 items-center justify-center rounded-md border border-sky-400/60 bg-sky-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
        href={routes.pricing}
      >
        Compare plans
      </Link>
    </main>
  );
}
