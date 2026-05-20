import { db } from "@/lib/db/client";

export async function getCurrentUser() {
  return db.user.findCurrent();
}
