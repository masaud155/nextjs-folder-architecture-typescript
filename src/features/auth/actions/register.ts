"use server";

import { validateRegisterInput } from "@/features/auth/schemas/auth.schema";

export async function register(_: unknown, formData: FormData) {
  const input = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    password: String(formData.get("password") ?? "")
  };

  const error = validateRegisterInput(input);

  if (error) {
    return { ok: false, message: error };
  }

  return { ok: true, message: "Account created with a mocked server action." };
}
