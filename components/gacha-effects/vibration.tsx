"use client";

import { motion } from "framer-motion";

export function Vibration({ children, isActive }: { children: React.ReactNode; isActive: boolean }) {
  return (
    <motion.div
      animate={
        isActive
          ? {
              x: [0, -2, 2, -2, 2, 0],
              y: [0, 2, -2, 2, -2, 0],
            }
          : {}
      }
      transition={{
        duration: 0.5,
        repeat: isActive ? Infinity : 0,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.div>
  );
} 