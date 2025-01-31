"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RegularTaskIcon, PeriodicTaskIcon } from "./decorative-icons";
import { Clock } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useCurrencyStore } from "@/store/currency-store";

interface TaskCardProps {
  id: string;
  type: "regular" | "periodic";
  title: string;
  progress: number;
  totalProgress: number;
  dueDate: string;
}

export function TaskCard({
  id,
  type,
  title,
  progress,
  totalProgress,
  dueDate,
}: TaskCardProps) {
  const Icon = type === "regular" ? RegularTaskIcon : PeriodicTaskIcon;
  const [currentProgress, setCurrentProgress] = useState(progress);
  const [isRewardDialogOpen, setIsRewardDialogOpen] = useState(false);
  const [isRewardClaimed, setIsRewardClaimed] = useState(false);
  const progressPercentage = (currentProgress / totalProgress) * 100;
  const addSeigyoku = useCurrencyStore((state) => state.addSeigyoku);

  const getStatus = (percentage: number) => {
    if (percentage === 0) return "未着手";
    if (percentage <= 25) return "着手中";
    if (percentage <= 50) return "もうすぐ折り返し";
    if (percentage <= 75) return "完成間近";
    if (percentage < 100) return "あと少し！";
    if (percentage === 100) return "クエストクリア";
    return "進行中";
  };

  const handleProgressChange = (value: number[]) => {
    setCurrentProgress((value[0] / 100) * totalProgress);
    console.log(`Task ${id} progress updated to: ${value[0]}%`);
  };

  const handleRewardClaim = () => {
    setIsRewardDialogOpen(true);
    setIsRewardClaimed(true);
    addSeigyoku(100);
    console.log(`報酬を受け取りました！ Task ID: ${id}`);
  };

  return (
    <>
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
                      {Math.round(progressPercentage)}%
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-yellow-500/60">
                        進捗状況
                      </span>
                      <span className="text-sm">
                        {Math.round(progressPercentage)}%
                      </span>
                    </div>
                    <Slider
                      defaultValue={[progressPercentage]}
                      max={100}
                      step={1}
                      className="w-full"
                      onValueChange={handleProgressChange}
                      disabled={isRewardClaimed}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-yellow-500/60">
                      ステータス
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-yellow-500">
                        {getStatus(Math.round(progressPercentage))}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/20"
                        disabled={
                          Math.round(progressPercentage) < 100 ||
                          isRewardClaimed
                        }
                        onClick={handleRewardClaim}
                      >
                        <Trophy className="w-4 h-4 mr-1" />
                        {isRewardClaimed ? "受取済み" : "報酬受取"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <Dialog open={isRewardDialogOpen} onOpenChange={setIsRewardDialogOpen}>
        <DialogContent className="bg-gray-900 border-yellow-500/20">
          <DialogHeader>
            <DialogTitle className="text-center text-yellow-500">
              クエスト報酬を獲得しました！
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center gap-2 p-4">
            <Image
              src="/star-rail-seigyoku.png"
              alt="星穹の輝石"
              width={40}
              height={40}
            />
            <span className="text-yellow-500 text-lg">×100</span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
