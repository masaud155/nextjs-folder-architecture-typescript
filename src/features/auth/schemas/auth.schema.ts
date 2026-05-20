import type { LoginInput, RegisterInput } from "@/features/auth/types/auth.types";

export function validateLoginInput(input: LoginInput) {
  if (!input.email.includes("@")) {
    return "Enter a valid email address.";
  }

  if (input.password.length < 8) {
    return "Password must be at least 8 characters.";
  }

  return null;
}

export function validateRegisterInput(input: RegisterInput) {
  if (input.name.trim().length < 2) {
    return "Name must be at least 2 characters.";
  }

  return validateLoginInput(input);
}
