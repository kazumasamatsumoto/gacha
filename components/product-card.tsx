"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  bonus: number;
  imageUrl: string;
}

export function ProductCard({
  name,
  price,
  quantity,
  bonus,
  imageUrl,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="overflow-hidden bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border-purple-500/20">
        <CardContent className="p-0">
          <div className="relative aspect-square bg-gradient-to-br from-blue-400/10 to-purple-400/10">
            <div className="absolute top-2 left-2 z-10">
              <Badge
                variant="secondary"
                className="bg-white/10 text-white backdrop-blur-sm"
              >
                2倍 +{bonus}
              </Badge>
            </div>
            <motion.div
              className="h-full w-full p-4 flex items-center justify-center"
              whileHover={{ rotate: 5 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={imageUrl || "/placeholder.svg"}
                  alt={name}
                  fill
                  className="object-contain filter drop-shadow-[0_0_10px_rgba(147,51,234,0.3)]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-500/10 pointer-events-none" />
              </div>
            </motion.div>
          </div>
          <div className="p-4 bg-black/20 backdrop-blur-sm">
            <h3 className="text-sm font-medium text-center mb-2 text-white">
              {name}
            </h3>
            <p className="text-center font-bold text-purple-100">
              ¥{price.toLocaleString()}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
