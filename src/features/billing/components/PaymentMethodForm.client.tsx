"use client";

import { useActionState } from "react";

import { updatePaymentMethod } from "@/features/billing/actions/updatePaymentMethod";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

const initialState = { ok: false, message: "" };

export function PaymentMethodForm() {
  const [state, formAction, pending] = useActionState(updatePaymentMethod, initialState);

  return (
    <form action={formAction} className="grid gap-4">
      <Input label="Cardholder name" name="cardholderName" placeholder="Maya Chen" />
      <Input
        inputMode="numeric"
        label="Last four digits"
        maxLength={4}
        name="lastFour"
        placeholder="4242"
      />
      <Button disabled={pending} type="submit">
        {pending ? "Updating..." : "Update payment method"}
      </Button>
      {state.message ? (
        <p className={state.ok ? "text-sm text-emerald-300" : "text-sm text-rose-300"}>
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
