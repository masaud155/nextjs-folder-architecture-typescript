export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  stripeSecretKey: process.env.STRIPE_SECRET_KEY ?? "mock_stripe_secret_key"
} as const;

export function isProduction() {
  return env.nodeEnv === "production";
}
