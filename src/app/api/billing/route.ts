import { createBillingPortalSession } from "@/features/billing";
import { toErrorResponse } from "@/lib/http/errors";

export async function POST() {
  try {
    const session = await createBillingPortalSession("cus_mock_123");

    return Response.json({ ok: true, data: session });
  } catch (error) {
    return toErrorResponse(error);
  }
}
