import { getCurrentSubscription, PaymentMethodForm } from "@/features/billing";
import { getCurrentUser } from "@/lib/auth/session";
import { Card } from "@/shared/ui/Card";
import { formatDate } from "@/shared/utils/formatDate";

export default async function SettingsPage() {
  const user = await getCurrentUser();
  const subscription = await getCurrentSubscription();

  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
          Settings
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
          Account and billing settings
        </h1>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold text-white">Current user</h2>
          <dl className="mt-5 grid gap-4 text-sm">
            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <dt className="text-slate-400">Name</dt>
              <dd className="font-medium text-white">{user.name}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
              <dt className="text-slate-400">Email</dt>
              <dd className="font-medium text-white">{user.email}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-400">Joined</dt>
              <dd className="font-medium text-white">{formatDate(user.createdAt)}</dd>
            </div>
          </dl>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold text-white">Subscription</h2>
          {subscription ? (
            <dl className="mt-5 grid gap-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <dt className="text-slate-400">Status</dt>
                <dd className="font-medium text-emerald-300">{subscription.label}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-400">Renews</dt>
                <dd className="font-medium text-white">
                  {formatDate(subscription.renewsAt)}
                </dd>
              </div>
            </dl>
          ) : (
            <p className="mt-5 text-sm text-slate-400">No active subscription.</p>
          )}
        </Card>
      </div>
      <Card className="mt-5">
        <h2 className="text-xl font-semibold text-white">Payment method</h2>
        <p className="mt-2 text-sm text-slate-400">
          A client component submits to a feature-owned server action.
        </p>
        <div className="mt-6 max-w-xl">
          <PaymentMethodForm />
        </div>
      </Card>
    </main>
  );
}
