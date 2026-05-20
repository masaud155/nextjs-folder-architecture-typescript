"use client";

import { useActionState } from "react";

import { register } from "@/features/auth/actions/register";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

const initialState = { ok: false, message: "" };

export function RegisterForm() {
  const [state, formAction, pending] = useActionState(register, initialState);

  return (
    <form action={formAction} className="grid gap-4">
      <Input label="Name" name="name" placeholder="Maya Chen" />
      <Input label="Email" name="email" placeholder="maya@example.com" type="email" />
      <Input
        label="Password"
        name="password"
        placeholder="At least 8 characters"
        type="password"
      />
      <Button disabled={pending} type="submit">
        {pending ? "Creating account..." : "Create account"}
      </Button>
      {state.message ? (
        <p className={state.ok ? "text-sm text-emerald-300" : "text-sm text-rose-300"}>
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
