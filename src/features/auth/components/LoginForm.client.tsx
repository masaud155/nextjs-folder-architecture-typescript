"use client";

import { useActionState } from "react";

import { login } from "@/features/auth/actions/login";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";

const initialState = { ok: false, message: "" };

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="grid gap-4">
      <Input label="Email" name="email" placeholder="maya@example.com" type="email" />
      <Input
        label="Password"
        name="password"
        placeholder="At least 8 characters"
        type="password"
      />
      <Button disabled={pending} type="submit">
        {pending ? "Signing in..." : "Sign in"}
      </Button>
      {state.message ? (
        <p className={state.ok ? "text-sm text-emerald-300" : "text-sm text-rose-300"}>
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
