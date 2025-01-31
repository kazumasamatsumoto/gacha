"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GachaTicket } from "@/components/gacha-ticket";
import { Button } from "@/components/ui/button";
import { GachaResultModal } from "@/components/gacha-result-modal";
import { useCurrencyStore } from "@/store/currency-store";
import { toast } from "@/components/ui/toast";
import { useSettingsStore } from "@/store/settings-store";

export default function GachaPage() {
  const { seigyoku, shinyouPoint, spendSeigyoku, addShinyouPoint } =
    useCurrencyStore();
  const { getWinRate } = useSettingsStore();
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [gachaResult, setGachaResult] = useState<"win" | "lose" | null>(null);

  const handleSpin = () => {
    // 星玉が足りるかチェック
    if (seigyoku < 100) {
      toast.error("星玉が不足しています", {
        description: "ガチャを回すには100個の星玉が必要です",
      });
      return;
    }

    // 星玉を消費
    const success = spendSeigyoku(100);
    if (!success) return;

    // 消費成功を通知
    toast.success("ガチャを回転開始！", {
      description: "100個の星玉を消費しました",
    });

    // ガチャ回転開始
    setIsSpinning(true);

    // 3秒後に結果を表示
    setTimeout(() => {
      const winRate = getWinRate();
      const result = Math.random() < winRate ? "win" : "lose";
      setGachaResult(result);

      if (result === "win") {
        addShinyouPoint(1000000);
      }

      setIsSpinning(false);
      setShowResult(true);
    }, 3000);
  };

  const closeResult = () => {
    setShowResult(false);
    setGachaResult(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        宇宙ガチャ
      </h1>

      <div className="relative w-full max-w-md mb-8">
        {/* <GachaMist isSpinning={isSpinning} result={gachaResult} /> */}
        <motion.div
          animate={isSpinning ? { rotateY: 360 } : { rotateY: 0 }}
          transition={{
            duration: 1,
            repeat: isSpinning ? Infinity : 0,
            ease: "linear",
          }}
        >
          <GachaTicket isSpinning={isSpinning} result={gachaResult} />
        </motion.div>
      </div>

      <Button
        onClick={handleSpin}
        disabled={isSpinning || seigyoku < 100}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        {isSpinning ? "スピン中..." : "ガチャを回す (100星玉)"}
      </Button>

      <GachaResultModal
        isOpen={showResult}
        onClose={closeResult}
        result={gachaResult}
      />
    </div>
  );
}
