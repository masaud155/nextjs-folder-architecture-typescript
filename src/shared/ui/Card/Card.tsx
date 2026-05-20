import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/shared/utils/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-white/12 bg-slate-950/55 p-6 shadow-2xl shadow-black/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
