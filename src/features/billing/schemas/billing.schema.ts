import type { PaymentMethodInput } from "@/features/billing/types/billing.types";

export function validatePaymentMethod(input: PaymentMethodInput) {
  if (input.cardholderName.trim().length < 2) {
    return "Cardholder name is required.";
  }

  if (!input.lastFour.match(/^\d{4}$/)) {
    return "Enter the last four card digits.";
  }

  return null;
}
