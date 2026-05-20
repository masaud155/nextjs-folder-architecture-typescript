import Link from "next/link";

import { GITHUB_REPOSITORY_URL } from "@/config/constants";
import { routes } from "@/config/routes";
import { Card } from "@/shared/ui/Card";

const layers = [
  {
    name: "app/",
    title: "App Router boundaries",
    description:
      "Routing, layouts, loading states, error boundaries, and route composition.",
    color: "border-sky-400/40 bg-sky-400/10 text-sky-200"
  },
  {
    name: "features/",
    title: "Feature-based modules",
    description:
      "Product logic grouped by capability: auth, billing, dashboard, and more.",
    color: "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
  },
  {
    name: "entities/",
    title: "Entities and domain logic",
    description: "Shared business models, schemas, permissions, and domain utilities.",
    color: "border-violet-400/40 bg-violet-400/10 text-violet-200"
  },
  {
    name: "shared/",
    title: "Shared UI layer",
    description: "Product-neutral components, hooks, utilities, and common API types.",
    color: "border-amber-400/40 bg-amber-400/10 text-amber-200"
  },
  {
    name: "lib/",
    title: "Infrastructure with lib",
    description: "Low-level database, auth, payments, email, storage, and HTTP wrappers.",
    color: "border-rose-400/40 bg-rose-400/10 text-rose-200"
  },
  {
    name: "config/",
    title: "Typed configuration",
    description: "Routes, constants, environment helpers, and app-level settings.",
    color: "border-cyan-400/40 bg-cyan-400/10 text-cyan-200"
  }
];

const tree = [
  "src/",
  "  app/",
  "    (marketing)/pricing/page.tsx",
  "    (auth)/login/page.tsx",
  "    (dashboard)/dashboard/page.tsx",
  "    api/billing/route.ts",
  "  features/",
  "    auth/actions/login.ts",
  "    billing/queries/getBillingPlans.ts",
  "    dashboard/components/DashboardChart.client.tsx",
  "  entities/",
  "    user/user.permissions.ts",
  "    subscription/subscription.utils.ts",
  "  shared/ui/Button/Button.tsx",
  "  lib/payments/stripe.ts",
  "  config/routes.ts"
];

const rules = [
  "app composes routes but does not own product logic",
  "features own server actions, queries, services, and local components",
  "entities model reusable domain concepts",
  "shared stays product-neutral",
  "lib wraps infrastructure and third-party services",
  "imports flow inward from routes to features to entities/shared/lib"
];

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1fr_0.86fr] lg:items-center">
        <div>
          <div className="mb-5 inline-flex rounded-md border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">
            App Router Architecture
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
            Build scalable Next.js apps with a folder structure that stays clean.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A practical App Router architecture using route groups, feature modules,
            server actions, shared UI, entities, and infrastructure boundaries.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex h-12 items-center justify-center rounded-md border border-sky-400/60 bg-sky-400 px-5 text-sm font-semibold text-slate-950 shadow-[0_0_32px_rgba(56,189,248,0.25)] transition hover:bg-sky-300"
              href="#architecture"
            >
              View Architecture
            </Link>
            <a
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/15 bg-white/8 px-5 text-sm font-semibold text-white transition hover:bg-white/12"
              href={GITHUB_REPOSITORY_URL}
              rel="noreferrer"
              target="_blank"
            >
              Open GitHub
            </a>
          </div>
        </div>
        <Card className="overflow-hidden p-0">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-4">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 text-xs uppercase tracking-[0.18em] text-slate-400">
              nextjs-project
            </span>
          </div>
          <pre className="overflow-auto p-6 text-sm leading-7 text-slate-300">
            <code>{tree.join("\n")}</code>
          </pre>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12" id="architecture">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
            Why this structure works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Every folder has a job, and every import has a direction.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {layers.map((layer) => (
            <Card className={`border ${layer.color}`} key={layer.name}>
              <p className="font-mono text-sm font-semibold">{layer.name}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{layer.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{layer.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <h2 className="text-2xl font-semibold text-white">
            Server vs client components
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Server components fetch data through feature queries. Interactive pieces use
            the `.client.tsx` suffix, keeping client boundaries visible in code review.
          </p>
          <div className="mt-6 rounded-lg border border-white/10 bg-black/30 p-4 font-mono text-sm leading-7 text-slate-300">
            features/dashboard/components/
            <br />
            DashboardStats.tsx
            <br />
            DashboardChart.client.tsx
          </div>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold text-white">Architecture rules</h2>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
            {rules.map((rule) => (
              <li className="flex gap-3" key={rule}>
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-xl border border-white/12 bg-white/8 p-8 text-center shadow-2xl shadow-black/20">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Full folder tree, working pages, real examples.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-300">
            Explore auth forms, billing plans, dashboard data, server actions, API routes,
            domain permissions, and mock infrastructure without connecting real services.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className="inline-flex h-11 items-center justify-center rounded-md border border-white/15 bg-white/8 px-5 text-sm font-semibold text-white transition hover:bg-white/12"
              href={routes.dashboard}
            >
              Open Dashboard
            </Link>
            <Link
              className="inline-flex h-11 items-center justify-center rounded-md border border-sky-400/60 bg-sky-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
              href={routes.pricing}
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
