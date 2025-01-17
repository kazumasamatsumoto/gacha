"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowContent(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (result === "win" && showContent) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [result, showContent]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-purple-900 to-indigo-900 border-purple-500/20">
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              {result === "win" ? (
                <>
                  <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                    当たり！
                  </h2>
                  <p className="text-xl text-purple-200 mb-6">
                    商品交換チケットを獲得しました！
                  </p>
                  <div className="w-32 h-32 mx-auto mb-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-5xl">🎉</span>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-purple-400 mb-4">
                    はずれ
                  </h2>
                  <p className="text-xl text-purple-200 mb-6">
                    今回は商品交換チケットを獲得できませんでした。
                  </p>
                  <div className="w-32 h-32 mx-auto mb-6 bg-purple-700 rounded-full flex items-center justify-center">
                    <span className="text-5xl">😢</span>
                  </div>
                </>
              )}
              <Button
                onClick={onClose}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                閉じる
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
