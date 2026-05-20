"use client";

import type { ReactNode } from "react";

import { Button } from "@/shared/ui/Button";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  title: string;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose, title }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm">
      <section className="w-full max-w-lg rounded-lg border border-white/12 bg-slate-950 p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <Button
            aria-label="Close modal"
            onClick={onClose}
            type="button"
            variant="ghost"
          >
            Close
          </Button>
        </div>
        {children}
      </section>
    </div>
  );
}
