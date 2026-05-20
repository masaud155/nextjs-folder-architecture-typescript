import type { User } from "./user.types";

export function canManageTeam(user: User) {
  return user.role === "owner" || user.role === "admin";
}
