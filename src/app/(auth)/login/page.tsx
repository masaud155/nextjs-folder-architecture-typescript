import Link from "next/link";

import { LoginForm } from "@/features/auth";
import { Card } from "@/shared/ui/Card";

export default function LoginPage() {
  return (
    <main className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl place-items-center px-5 py-16">
      <Card className="w-full max-w-md">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
          Auth feature
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">Sign in</h1>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Mock validation runs through a feature-owned server action.
        </p>
        <div className="mt-6">
          <LoginForm />
        </div>
        <p className="mt-6 text-sm text-slate-400">
          New here?{" "}
          <Link className="font-medium text-sky-300 hover:text-sky-200" href="/register">
            Create an account
          </Link>
        </p>
      </Card>
    </main>
  );
}
