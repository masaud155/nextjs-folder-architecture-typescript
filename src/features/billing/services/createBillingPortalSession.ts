import { routes } from "@/config/routes";
import { stripe } from "@/lib/payments/stripe";

export async function createBillingPortalSession(customerId: string) {
  return stripe.billingPortal.sessions.create({
    customerId,
    returnUrl: routes.settings
  });
}
