"use client";

import Image from "next/image";

interface GachaTicketProps {
  isSpinning: boolean;
  result: "win" | "lose" | null;
}

export function GachaTicket({ isSpinning, result }: GachaTicketProps) {
  return (
    <div className="relative w-[400px] h-[200px] rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <Image
          src="/gacha.jpg"
          alt="宇宙ガチャチケット"
          width={400}
          height={400}
          className={`object-cover w-full h-[400px] transition-transform duration-300 ${
            isSpinning ? 'scale-110 blur-sm' : 'scale-100'
          }`}
          style={{
            objectPosition: '50% 50%'  // 画像を中央に配置
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent" />
      <div className="absolute bottom-4 left-4">
        <div className="text-yellow-500 text-xl font-bold">宇宙ガチャチケット</div>
        <div className="text-yellow-500/60 text-sm">SPRC-20545</div>
      </div>
    </div>
  );
}
