import type { BillingPlan } from "@/features/billing/types/billing.types";
import { formatPrice } from "@/features/billing/utils/formatPrice";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";

type BillingPlanCardProps = {
  plan: BillingPlan;
};

export function BillingPlanCard({ plan }: BillingPlanCardProps) {
  return (
    <Card
      className={
        plan.highlighted
          ? "border-sky-400/50 bg-sky-400/10 shadow-sky-950/30"
          : "border-white/10"
      }
    >
      <div className="mb-6">
        <p className="text-sm font-medium text-sky-300">{plan.name}</p>
        <div className="mt-3 flex items-end gap-1">
          <span className="text-4xl font-semibold">{formatPrice(plan.price)}</span>
          <span className="pb-1 text-sm text-slate-400">/mo</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">{plan.description}</p>
      </div>
      <ul className="mb-6 grid gap-3 text-sm text-slate-300">
        {plan.features.map((feature) => (
          <li className="flex items-center gap-2" key={feature}>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            {feature}
          </li>
        ))}
      </ul>
      <Button
        className="w-full"
        type="button"
        variant={plan.highlighted ? "primary" : "secondary"}
      >
        Choose {plan.name}
      </Button>
    </Card>
  );
}
