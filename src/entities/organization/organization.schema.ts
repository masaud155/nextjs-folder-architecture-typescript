import type { Organization } from "./organization.types";

export function parseOrganization(value: Organization) {
  if (!value.slug.match(/^[a-z0-9-]+$/)) {
    throw new Error("Organization slug must be URL friendly.");
  }

  return value;
}
