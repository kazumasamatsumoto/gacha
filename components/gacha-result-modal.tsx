"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import confetti from "canvas-confetti";

interface GachaResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: "win" | "lose" | null;
}

export function GachaResultModal({
  isOpen,
  onClose,
  result,
}: GachaResultModalProps) {
  console.log("Modal Props:", { isOpen, result });

  React.useEffect(() => {
    console.log("Modal Effect triggered:", { isOpen, result });
    if (isOpen && result === "win") {
      console.log("Confetti実行");
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [isOpen, result]);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className="fixed inset-0 bg-black/50"
          onClick={onClose}
        />
        <DialogPrimitive.Content
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
        >
          <div
            className="bg-gray-900 border border-yellow-500/20 rounded-lg p-6 w-[400px]"
            onClick={(e) => e.stopPropagation()}
          >
            <DialogPrimitive.Title className="text-center text-yellow-500 text-xl font-bold mb-4">
              {result === "win" ? "おめでとうございます！" : "残念..."}
            </DialogPrimitive.Title>
            <DialogPrimitive.Description asChild>
              <div className="text-center">
                <p className="text-yellow-500">
                  {result === "win"
                    ? "賞金100万信用ポイントが当たりました！"
                    : "今回は外れてしまいました。次回の挑戦をお待ちしています！"}
                </p>
                {result === "lose" && (
                  <p className="mt-2 text-yellow-500/60 text-sm">
                    当選確率: 30%
                  </p>
                )}
              </div>
            </DialogPrimitive.Description>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
