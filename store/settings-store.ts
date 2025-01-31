import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  gachaSetting: 1 | 2 | 3 | 4 | 5 | 6;
  setGachaSetting: (setting: 1 | 2 | 3 | 4 | 5 | 6) => void;
  getWinRate: () => number;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      gachaSetting: 5, // デフォルトは設定5（30%）
      setGachaSetting: (setting) => set({ gachaSetting: setting }),
      getWinRate: () => {
        const rates = {
          1: 0.10, // 10%
          2: 0.15, // 15%
          3: 0.20, // 20%
          4: 0.25, // 25%
          5: 0.30, // 30%
          6: 0.80, // 80%
        };
        return rates[get().gachaSetting];
      },
    }),
    {
      name: 'settings-storage',
    }
  )
); 