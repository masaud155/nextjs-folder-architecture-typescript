import { env } from "@/config/env";

export const stripe = {
  mode: env.stripeSecretKey.startsWith("mock_") ? "mock" : "live",
  billingPortal: {
    sessions: {
      create: async ({
        customerId,
        returnUrl
      }: {
        customerId: string;
        returnUrl: string;
      }) => ({
        id: `bps_${Date.now()}`,
        customerId,
        url: `${returnUrl}?portal=mock`
      })
    }
  }
};
