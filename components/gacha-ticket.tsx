"use client";

// import Image from "next/image";

interface GachaTicketProps {
  isSpinning: boolean;
  result: "win" | "lose" | null;
}

export function GachaTicket({ isSpinning, result }: GachaTicketProps) {
  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      <div>
        <img
          src="/68.png"
          alt="宇宙ガチャチケット"
          className={`transition-transform duration-300 ${
            isSpinning ? "scale-110 blur-sm" : "scale-100"
          }`}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent" />
      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4">
        <div className="text-yellow-500 text-lg md:text-xl font-bold">
          宇宙ガチャチケット
        </div>
        <div className="text-yellow-500/60 text-xs md:text-sm">SPRC-20545</div>
      </div>
    </div>
  );
}
