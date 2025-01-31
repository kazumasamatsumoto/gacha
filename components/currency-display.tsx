"use client";

import { useCurrencyStore } from "@/store/currency-store";
import Image from "next/image";

export function CurrencyDisplay() {
  const { seigyoku, shinyouPoint } = useCurrencyStore();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
      <div className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-full border border-yellow-500/20 shadow-lg backdrop-blur-none">
        <Image
          src="/shinyou-point.png"
          alt="信用ポイント"
          width={24}
          height={24}
          className="object-contain"
          quality={100}
        />
        <span className="text-yellow-500 font-medium text-base">
          {new Intl.NumberFormat("ja-JP").format(shinyouPoint)} P
        </span>
      </div>

      <div className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-full border border-yellow-500/20 shadow-lg backdrop-blur-none">
        <Image
          src="/star-rail-seigyoku.png"
          alt="星穹の輝石"
          width={24}
          height={24}
          className="object-contain"
          quality={100}
        />
        <span className="text-yellow-500 font-medium text-base">
          {seigyoku}
        </span>
      </div>
    </div>
  );
}
