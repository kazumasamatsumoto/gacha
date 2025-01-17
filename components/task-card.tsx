"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RegularTaskIcon, PeriodicTaskIcon } from "./decorative-icons";
import { Clock } from "lucide-react";

interface TaskCardProps {
  type: "regular" | "periodic";
  title: string;
  progress: number;
  totalProgress?: number;
  dueDate?: string;
  status: string;
}

export function TaskCard({
  type,
  title,
  progress,
  totalProgress = 100,
  dueDate,
  status,
}: TaskCardProps) {
  const Icon = type === "regular" ? RegularTaskIcon : PeriodicTaskIcon;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <Card className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-yellow-500/20">
        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-transparent" />

        <div className="relative p-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Icon />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-yellow-500">{title}</h3>
                <span className="text-sm text-yellow-500/60">
                  {type === "regular" ? "通常演算" : "周期演算"}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-yellow-500/80">
                    <Clock className="w-4 h-4" />
                    <span>{dueDate || "期限なし"}</span>
                  </div>
                  <span className="text-yellow-500/60">
                    {progress}/{totalProgress}
                  </span>
                </div>

                <Progress
                  value={(progress / totalProgress) * 100}
                  className="h-2 bg-yellow-950 [&>div]:bg-gradient-to-r [&>div]:from-yellow-600 [&>div]:to-yellow-500"
                />

                <div className="flex items-center justify-between">
                  <span className="text-sm text-yellow-500/60">ステータス</span>
                  <span className="text-sm font-medium text-yellow-500">
                    {status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
