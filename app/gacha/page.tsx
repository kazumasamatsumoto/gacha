"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GachaTicket } from "@/components/gacha-ticket";
import { Button } from "@/components/ui/button";
import { GachaResultModal } from "@/components/gacha-result-modal";
import { useCurrencyStore } from "@/store/currency-store";
import { toast } from "@/components/ui/toast";
import { useSettingsStore } from "@/store/settings-store";
import { BlackOut } from "@/components/gacha-effects/black-out";
import { Vibration } from "@/components/gacha-effects/vibration";
import { GogoLamp } from "@/components/gacha-effects/gogo-lamp";
import { RainbowCutIn } from "@/components/gacha-effects/rainbow-cut-in";

type EffectType = "blackout" | "vibration" | "gogo" | "rainbow" | null;

export default function GachaPage() {
  const { seigyoku, shinyouPoint, spendSeigyoku, addShinyouPoint } =
    useCurrencyStore();
  const { getWinRate } = useSettingsStore();
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [gachaResult, setGachaResult] = useState<"win" | "lose" | null>(null);

  // 演出用のstate（1つにまとめる）
  const [currentEffect, setCurrentEffect] = useState<EffectType>(null);

  // クライアントサイドのみでレンダリングされるようにする
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    // コンポーネントがマウントされたらクライアントサイドであることを示す
    setIsClient(true);
  }, []);

  const playRandomEffect = async () => {
    const effects: EffectType[] = ["blackout", "vibration", "gogo", "rainbow"];
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    setCurrentEffect(randomEffect);

    // 演出の時間（2秒）を待つ
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setCurrentEffect(null);
  };

  const sendWinNotification = async () => {
    try {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const day = now.getDate();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      
      const message = `おめでとうございます！！${year}年${month}月${day}日${hours}時${minutes}分${seconds}秒に当選しました！！`;
      
      await fetch("https://helloworld-7abo7pjibq-uc.a.run.app", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: message,
      });
    } catch (error) {
      console.error("通知の送信に失敗しました", error);
    }
  };

  const handleSpin = async () => {
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

    setIsSpinning(true);

    // 抽選を先に行う（ただし結果は見せない）
    const winRate = getWinRate();
    const result = Math.random() < winRate ? "win" : "lose";

    if (result === "win") {
      // 1秒回転させてから演出
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await playRandomEffect();
      // 演出後もう少し回転
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // 当選時に通知を送信
      await sendWinNotification();
    } else {
      // はずれの場合は通常の回転のみ
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }

    setIsSpinning(false);
    setGachaResult(result);

    if (result === "win") {
      addShinyouPoint(1000000);
    }

    setShowResult(true);
  };

  const closeResult = () => {
    setShowResult(false);
    setGachaResult(null);
  };

  // レンダリング部分
  if (!isClient) {
    // サーバーサイドレンダリング時は最小限の内容を表示
    return <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-4xl font-bold text-center mb-8 text-white">
        宇宙ガチャ
      </h1>
      <p className="text-white">読み込み中...</p>
    </div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
      <BlackOut show={currentEffect === "blackout"} />
      <GogoLamp show={currentEffect === "gogo"} />
      <RainbowCutIn show={currentEffect === "rainbow"} />

      <h1 className="text-4xl md:text-4xl font-bold text-center mb-8 text-white">
        宇宙ガチャ
      </h1>

      <Vibration isActive={currentEffect === "vibration"}>
        <div className="relative w-full max-w-[300px] md:max-w-md mb-8">
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
      </Vibration>

      <Button
        onClick={handleSpin}
        disabled={isSpinning || seigyoku < 100}
        className="w-full max-w-[300px] md:max-w-md bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
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
