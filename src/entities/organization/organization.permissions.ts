import type { User } from "@/entities/user";

export function canEditOrganization(user: User, organizationId: string) {
  return user.organizationId === organizationId && ["owner", "admin"].includes(user.role);
}
