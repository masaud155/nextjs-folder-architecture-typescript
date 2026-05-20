export type SubscriptionStatus = "trialing" | "active" | "past_due" | "canceled";

export type Subscription = {
  id: string;
  organizationId: string;
  planId: string;
  status: SubscriptionStatus;
  renewsAt: string;
};
