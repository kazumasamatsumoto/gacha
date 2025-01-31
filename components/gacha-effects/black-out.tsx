"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function BlackOut({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50"
            transition={{ duration: 0.3 }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 2 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [2, 1, 1, 0.5],
            }}
            transition={{
              duration: 1.7,
              times: [0, 0.3, 0.7, 1],
              delay: 0.3,
            }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* GPDロゴ */}
            <div className="relative">
              <Image
                src="/god.jpg"
                alt="GPD"
                width={300}
                height={300}
                className="object-contain"
              />

              {/* 雷エフェクト */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
                    "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)",
                    "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
                  ],
                  boxShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 30px rgba(255,255,255,0.8)",
                    "0 0 0px rgba(255,255,255,0)",
                  ],
                }}
                transition={{
                  duration: 0.3,
                  repeat: 3,
                  repeatDelay: 0.2,
                }}
              />

              {/* 雷の線エフェクト */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "linear-gradient(45deg, transparent 65%, rgba(255,255,255,0) 65.5%, rgba(255,255,255,0.8) 66%, transparent 66.5%, transparent 100%)",
                    "linear-gradient(45deg, transparent 65%, rgba(255,255,255,0.8) 65.5%, rgba(255,255,255,1) 66%, transparent 66.5%, transparent 100%)",
                    "linear-gradient(45deg, transparent 65%, rgba(255,255,255,0) 65.5%, rgba(255,255,255,0.8) 66%, transparent 66.5%, transparent 100%)",
                  ],
                }}
                transition={{
                  duration: 0.2,
                  repeat: 5,
                  repeatDelay: 0.1,
                }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
