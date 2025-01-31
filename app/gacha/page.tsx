"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GachaTicket } from "@/components/gacha-ticket";
import { Button } from "@/components/ui/button";
import { GachaResultModal } from "@/components/gacha-result-modal";

export default function GachaPage() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [gachaResult, setGachaResult] = useState<"win" | "lose" | null>(null);

  const handleSpin = () => {
    setIsSpinning(true);
    const result = Math.random() < 0.3 ? "win" : "lose"; // 30%の確率で当たり
    setGachaResult(result);

    setTimeout(() => {
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
        disabled={isSpinning}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        {isSpinning ? "スピン中..." : "ガチャを回す"}
      </Button>
      <GachaResultModal
        isOpen={showResult}
        onClose={closeResult}
        result={gachaResult}
      />
    </div>
  );
}
