"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface NavCardProps {
  href: string;
  title: string;
  description: string;
  iconName: string;
}

export function NavCard({ href, title, description, iconName }: NavCardProps) {
  return (
    <Link href={href}>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Card className="group relative overflow-hidden bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border-purple-500/20 h-full">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="relative p-6">
            <div className="mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">
              <span className="text-3xl">{iconName}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-purple-200/80">{description}</p>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}
