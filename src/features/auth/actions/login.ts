"use server";

import { validateLoginInput } from "@/features/auth/schemas/auth.schema";

export async function login(_: unknown, formData: FormData) {
  const input = {
    email: String(formData.get("email") ?? ""),
    password: String(formData.get("password") ?? "")
  };

  const error = validateLoginInput(input);

  if (error) {
    return { ok: false, message: error };
  }

  return { ok: true, message: "Signed in with a mocked server action." };
}
