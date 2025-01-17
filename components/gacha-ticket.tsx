"use client";

import { motion } from "framer-motion";

interface GachaTicketProps {
  isSpinning: boolean;
  result: "win" | "lose" | null;
}

export function GachaTicket({ isSpinning, result }: GachaTicketProps) {
  return (
    <div className="relative w-full max-w-md aspect-[2/1]">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-prW798EPHBx0GiSHczSTkj4xdamc28.png')] bg-cover bg-center"
          style={{
            filter: isSpinning ? "blur(10px)" : "blur(0px)",
            transition: "filter 0.5s ease-in-out",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: isSpinning
              ? result === "win"
                ? "linear-gradient(45deg, rgba(255,0,0,0.2), rgba(255,165,0,0.2), rgba(255,255,0,0.2), rgba(0,128,0,0.2), rgba(0,0,255,0.2), rgba(75,0,130,0.2), rgba(238,130,238,0.2))"
                : "linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,0,0,0.2))"
              : "none",
            opacity: isSpinning ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
        <div className="relative h-full flex flex-col items-center justify-center p-6">
          <div className="text-white text-2xl font-bold tracking-wider">
            宇宙ガチャチケット
          </div>
          <div className="text-purple-200 text-sm mt-2">#SPACE12345</div>
        </div>
      </motion.div>
    </div>
  );
}
