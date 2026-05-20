import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/shared/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-sky-400/60 bg-sky-400 text-slate-950 shadow-[0_0_32px_rgba(56,189,248,0.25)] hover:bg-sky-300",
  secondary: "border-white/15 bg-white/8 text-white hover:bg-white/12",
  ghost:
    "border-transparent bg-transparent text-slate-300 hover:bg-white/8 hover:text-white"
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-md border px-5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
