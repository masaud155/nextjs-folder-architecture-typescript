export type UserRole = "owner" | "admin" | "member" | "viewer";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organizationId: string;
  createdAt: string;
};
