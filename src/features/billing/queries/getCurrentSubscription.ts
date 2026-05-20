import { formatSubscriptionStatus } from "@/entities/subscription";
import { getCurrentUser } from "@/lib/auth/session";
import { db } from "@/lib/db/client";

export async function getCurrentSubscription() {
  const user = await getCurrentUser();
  const subscription = await db.subscription.findByOrganizationId(user.organizationId);

  if (!subscription) {
    return null;
  }

  return {
    ...subscription,
    label: formatSubscriptionStatus(subscription.status)
  };
}
