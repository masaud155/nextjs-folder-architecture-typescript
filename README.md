# Scalable Next.js Folder Structure

A practical Next.js App Router starter architecture for large production applications.

GitHub: [masaud155/nextjs-folder-architecture-typescript](https://github.com/masaud155/nextjs-folder-architecture-typescript)

## Why this repo exists

Large Next.js projects become hard to maintain when every component, action, query, and helper drifts into `app/` or a global `components/` folder. This repository demonstrates a production-minded folder structure where routing, features, domain models, shared UI, infrastructure, and configuration each have clear ownership.

The app is intentionally small, but the boundaries mirror how a larger product can grow.

## What is included

- Next.js App Router with route groups
- TypeScript, Tailwind CSS, ESLint, and Prettier
- Feature modules for auth, billing, and dashboard
- Server actions colocated with owning features
- Server-side queries with mock data
- Shared UI primitives
- Domain entities and permission helpers
- Mock infrastructure wrappers for db, auth, payments, email, storage, and HTTP errors
- Thin API routes

## Folder Structure Overview

```txt
src/
  app/          Routing, layouts, loading states, errors, and route composition
  features/     Product-specific modules such as auth, billing, and dashboard
  entities/     Shared business models, schemas, permissions, and domain rules
  shared/       Reusable UI, hooks, utilities, and common types
  lib/          Low-level infrastructure and external service wrappers
  config/       Environment helpers, constants, and route configuration
  styles/       Global theme tokens
  assets/       Static images and icons
```

## Full Folder Tree

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    (marketing)/
      marketing/
        page.tsx
      pricing/
        page.tsx
    (auth)/
      login/
        page.tsx
      register/
        page.tsx
    (dashboard)/
      dashboard/
        layout.tsx
        page.tsx
        loading.tsx
        error.tsx
      settings/
        page.tsx
    api/
      health/
        route.ts
      billing/
        route.ts
  features/
    auth/
      components/
      actions/
      schemas/
      types/
      utils/
      index.ts
    billing/
      components/
      actions/
      queries/
      services/
      schemas/
      types/
      utils/
      index.ts
    dashboard/
      components/
      queries/
      types/
      index.ts
  entities/
    user/
    organization/
    subscription/
  shared/
    ui/
    hooks/
    utils/
    types/
  lib/
    db/
    auth/
    http/
    email/
    storage/
    payments/
  config/
  styles/
  assets/
```

Note: `app/page.tsx` and `app/(marketing)/page.tsx` both resolve to `/` in the App Router. This demo keeps the home page at `/` and places the marketing route at `/marketing` to avoid a route conflict.

## How To Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run format
```

## Architecture Rules

- `app/` only handles routing, layouts, loading states, error boundaries, API entry points, and route-level composition.
- `features/` contains product-specific logic and UI grouped by business capability.
- `entities/` contains reusable business models, schemas, permissions, and domain rules.
- `shared/` contains product-neutral UI, hooks, utilities, and common types.
- `lib/` contains low-level infrastructure and external service wrappers.
- `config/` contains constants, routes, and environment helpers.
- Server actions live inside the feature that owns the mutation.
- API routes stay thin and call feature services.
- Client components use the `.client.tsx` suffix.
- Avoid global dumping grounds like `components/`, `helpers.ts`, or `common.ts`.

## Server And Client Component Guidelines

Use server components by default for route composition, data fetching, and non-interactive UI. Add a client boundary only when a component needs browser APIs, local state, event handlers, or hooks such as `useActionState`.

Client components should be easy to spot in reviews:

```txt
DashboardChart.client.tsx
LoginForm.client.tsx
PaymentMethodForm.client.tsx
```

## Server Action Placement Rules

Server actions should live in the feature that owns the behavior:

```txt
features/auth/actions/login.ts
features/billing/actions/updatePaymentMethod.ts
```

Routes import actions through the feature boundary instead of defining mutations directly in `app/`.

## Shared vs Feature-Specific Components

Put product-neutral primitives in `shared/ui`, such as `Button`, `Input`, `Modal`, and `Card`.

Put business-aware components inside the owning feature:

```txt
features/billing/components/BillingPlanCard.tsx
features/dashboard/components/DashboardStats.tsx
```

If a component knows about plans, subscriptions, users, dashboards, or product copy, it is probably feature-specific.

## Dependency Direction Guide

Recommended import flow:

```txt
app -> features -> entities
app -> features -> shared
features -> lib
features -> config
entities -> shared only when truly generic
shared -> no product imports
lib -> config and external services
```

Avoid importing `app/` from anywhere. Avoid importing one feature directly into another unless you are deliberately composing at a route or service boundary.

## Path Aliases

Configured aliases:

```txt
@/app/*
@/features/*
@/entities/*
@/shared/*
@/lib/*
@/config/*
```

## Contribution Note

Contributions should preserve the folder boundaries. When adding a new capability, prefer a new feature module instead of expanding route files or creating generic utility buckets.

## License

MIT
