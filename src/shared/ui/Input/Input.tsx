import type { InputHTMLAttributes } from "react";

import { cn } from "@/shared/utils/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input({ className, error, label, id, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <label className="grid gap-2 text-sm text-slate-300" htmlFor={inputId}>
      {label ? <span className="font-medium">{label}</span> : null}
      <input
        id={inputId}
        className={cn(
          "h-11 rounded-md border border-white/12 bg-slate-950/70 px-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/70 focus:ring-4 focus:ring-sky-400/10",
          error
            ? "border-rose-400/70 focus:border-rose-400/70 focus:ring-rose-400/10"
            : "",
          className
        )}
        {...props}
      />
      {error ? <span className="text-xs text-rose-300">{error}</span> : null}
    </label>
  );
}
