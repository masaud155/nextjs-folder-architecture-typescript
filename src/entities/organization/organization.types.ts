export type Organization = {
  id: string;
  name: string;
  slug: string;
  plan: "starter" | "growth" | "enterprise";
  memberCount: number;
};
