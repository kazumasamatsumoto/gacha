"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function GogoLamp({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <>
          {/* ブラックアウト */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 2,
              times: [0, 0.1, 0.3, 0.4],
            }}
            className="fixed inset-0 bg-black z-50"
          />

          {/* GOGOロゴ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div className="relative">
              {/* メインのGOGO画像 */}
              <motion.div
                animate={{ scale: [0.9, 1.1, 0.9] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/gogo.png"
                  alt="GOGO"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </motion.div>

              {/* ネオンエフェクト - 内側の光 */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(255,215,0,0.5), inset 0 0 10px rgba(255,215,0,0.5)",
                    "0 0 40px rgba(255,215,0,0.8), inset 0 0 20px rgba(255,215,0,0.8)",
                    "0 0 20px rgba(255,215,0,0.5), inset 0 0 10px rgba(255,215,0,0.5)",
                  ],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* ネオンエフェクト - 外側に広がる光の輪 */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1 }}
                animate={{
                  opacity: [0, 0.5, 0],
                  scale: [1, 1.5, 2],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                style={{
                  background: "radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(255,215,0,0) 70%)",
                }}
              />

              {/* フラッシュエフェクト */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                style={{
                  background: "linear-gradient(45deg, transparent, rgba(255,215,0,0.5), transparent)",
                }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 