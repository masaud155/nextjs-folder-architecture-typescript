"use client";

import { Button } from "@/shared/ui/Button";

export default function DashboardError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="rounded-lg border border-rose-400/30 bg-rose-400/10 p-6">
      <h2 className="text-xl font-semibold text-white">Dashboard failed to load</h2>
      <p className="mt-2 text-sm text-rose-100">{error.message}</p>
      <Button className="mt-5" onClick={reset} type="button" variant="secondary">
        Try again
      </Button>
    </div>
  );
}
