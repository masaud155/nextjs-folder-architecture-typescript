import { BillingPlanCard, getBillingPlans } from "@/features/billing";

export default async function PricingPage() {
  const plans = await getBillingPlans();

  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
          Billing feature
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Pricing powered by a feature query and reusable cards.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          Mock billing data lives in `features/billing`, while this route only composes
          the page.
        </p>
      </div>
      <section className="mt-12 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => (
          <BillingPlanCard key={plan.id} plan={plan} />
        ))}
      </section>
    </main>
  );
}
