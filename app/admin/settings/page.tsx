"use client";

import { useState } from "react";
import { useSettingsStore } from "@/store/settings-store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/toast";

export default function SettingsPage() {
  const { gachaSetting, setGachaSetting, getWinRate } = useSettingsStore();
  const [currentSetting, setCurrentSetting] = useState<number>(gachaSetting);

  const handleSettingChange = (setting: 1 | 2 | 3 | 4 | 5 | 6) => {
    setCurrentSetting(setting);
    setGachaSetting(setting);
    toast.success("設定を更新しました", {
      description: `ガチャ設定${setting}に変更（当選確率: ${Math.round(
        getWinRate() * 100
      )}%）`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">管理設定</h1>

      <Card className="p-6 bg-gray-900 border-yellow-500/20">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-yellow-500 mb-4">
              ガチャ設定
            </h2>
            <div className="space-y-4">
              <div className="text-yellow-500 mb-4">
                現在の設定: {currentSetting}（当選確率:{" "}
                {Math.round(getWinRate() * 100)}%）
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((setting) => (
                  <Button
                    key={setting}
                    onClick={() =>
                      handleSettingChange(setting as 1 | 2 | 3 | 4 | 5 | 6)
                    }
                    className={`w-full ${
                      currentSetting === setting
                        ? "bg-yellow-500 hover:bg-yellow-600 text-black"
                        : "bg-gray-800 hover:bg-gray-700 border border-yellow-500/20"
                    }`}
                  >
                    <div>
                      <div>設定{setting}</div>
                      <div className="text-sm opacity-75">
                        {setting === 1 && "10%"}
                        {setting === 2 && "15%"}
                        {setting === 3 && "20%"}
                        {setting === 4 && "25%"}
                        {setting === 5 && "30%"}
                        {setting === 6 && "80%"}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="mt-4 text-sm text-gray-400">
        <ul className="space-y-1">
          <li>設定1: 当選確率 10%</li>
          <li>設定2: 当選確率 15%</li>
          <li>設定3: 当選確率 20%</li>
          <li>設定4: 当選確率 25%</li>
          <li>設定5: 当選確率 30%</li>
          <li>設定6: 当選確率 80%</li>
        </ul>
      </div>
    </div>
  );
}
