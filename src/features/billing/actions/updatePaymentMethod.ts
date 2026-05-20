"use server";

import { validatePaymentMethod } from "@/features/billing/schemas/billing.schema";

export async function updatePaymentMethod(_: unknown, formData: FormData) {
  const input = {
    cardholderName: String(formData.get("cardholderName") ?? ""),
    lastFour: String(formData.get("lastFour") ?? "")
  };

  const error = validatePaymentMethod(input);

  if (error) {
    return { ok: false, message: error };
  }

  return { ok: true, message: "Payment method updated in mock billing." };
}
