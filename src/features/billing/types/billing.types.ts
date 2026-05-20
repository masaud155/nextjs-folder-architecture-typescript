export type BillingPlan = {
  id: "starter" | "growth" | "enterprise";
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type PaymentMethodInput = {
  cardholderName: string;
  lastFour: string;
};
