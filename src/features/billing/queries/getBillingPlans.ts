import type { BillingPlan } from "@/features/billing/types/billing.types";

export async function getBillingPlans(): Promise<BillingPlan[]> {
  return [
    {
      id: "starter",
      name: "Starter",
      price: 19,
      description: "For small teams validating the architecture.",
      features: ["Route groups", "Shared UI", "Mock auth"]
    },
    {
      id: "growth",
      name: "Growth",
      price: 49,
      description: "For teams adopting feature-based modules.",
      features: ["Server actions", "Billing module", "Domain entities"],
      highlighted: true
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 149,
      description: "For large products with strict boundaries.",
      features: ["Infrastructure wrappers", "API boundaries", "Architecture rules"]
    }
  ];
}
