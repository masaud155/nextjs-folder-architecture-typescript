import type { SubscriptionStatus } from "./subscription.types";

export function formatSubscriptionStatus(status: SubscriptionStatus) {
  const labels: Record<SubscriptionStatus, string> = {
    trialing: "Trialing",
    active: "Active",
    past_due: "Past due",
    canceled: "Canceled"
  };

  return labels[status];
}
