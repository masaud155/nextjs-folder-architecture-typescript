import type { User } from "./user.types";

export function parseUser(value: User) {
  if (!value.email.includes("@")) {
    throw new Error("User email must be valid.");
  }

  return value;
}
