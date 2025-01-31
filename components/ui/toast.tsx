"use client";

import { Toaster as Sonner, toast as sonnerToast } from "sonner";

export function Toaster() {
  return (
    <Sonner
      className="toaster group"
      theme="dark"
      position="top-right"
      richColors
    />
  );
}

export const toast = sonnerToast; 