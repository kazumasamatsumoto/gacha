"use client";

import { motion, AnimatePresence } from "framer-motion";

export function RainbowCutIn({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          exit={{ x: "200%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-45 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 transform -skew-x-12" />
        </motion.div>
      )}
    </AnimatePresence>
  );
} 