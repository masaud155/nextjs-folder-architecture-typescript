import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

import { APP_NAME, GITHUB_REPOSITORY_URL } from "@/config/constants";
import { routes } from "@/config/routes";

export const metadata: Metadata = {
  title: APP_NAME,
  description:
    "A practical Next.js App Router starter architecture for large production applications."
};

const navItems = [
  { href: routes.home, label: "Home" },
  { href: routes.marketing, label: "Marketing" },
  { href: routes.pricing, label: "Pricing" },
  { href: routes.dashboard, label: "Dashboard" },
  { href: routes.settings, label: "Settings" }
];

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen code-grid">
          <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
              <Link
                className="text-sm font-semibold tracking-wide text-white"
                href={routes.home}
              >
                {APP_NAME}
              </Link>
              <div className="hidden items-center gap-1 md:flex">
                {navItems.map((item) => (
                  <Link
                    className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
                    href={item.href}
                    key={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Link
                  className="hidden rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white sm:inline-flex"
                  href={routes.login}
                >
                  Login
                </Link>
                <a
                  className="rounded-md border border-white/12 bg-white/8 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/12"
                  href={GITHUB_REPOSITORY_URL}
                  rel="noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
