import type { Organization } from "@/entities/organization";
import type { Subscription } from "@/entities/subscription";
import type { User } from "@/entities/user";

const users: User[] = [
  {
    id: "user_1",
    name: "Maya Chen",
    email: "maya@example.com",
    role: "owner",
    organizationId: "org_1",
    createdAt: "2026-01-15T10:00:00.000Z"
  }
];

const organizations: Organization[] = [
  {
    id: "org_1",
    name: "Northstar Labs",
    slug: "northstar-labs",
    plan: "growth",
    memberCount: 18
  }
];

const subscriptions: Subscription[] = [
  {
    id: "sub_1",
    organizationId: "org_1",
    planId: "growth",
    status: "active",
    renewsAt: "2026-07-01T00:00:00.000Z"
  }
];

export const db = {
  user: {
    findCurrent: async () => users[0],
    findByEmail: async (email: string) =>
      users.find((user) => user.email === email) ?? null
  },
  organization: {
    findById: async (id: string) =>
      organizations.find((organization) => organization.id === id) ?? null
  },
  subscription: {
    findByOrganizationId: async (organizationId: string) =>
      subscriptions.find(
        (subscription) => subscription.organizationId === organizationId
      ) ?? null
  }
};
