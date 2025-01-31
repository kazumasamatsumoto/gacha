import { create } from 'zustand';

interface CurrencyState {
  seigyoku: number;
  addSeigyoku: (amount: number) => void;
  spendSeigyoku: (amount: number) => boolean;
}

export const useCurrencyStore = create<CurrencyState>((set) => ({
  seigyoku: 1000,
  addSeigyoku: (amount) => set((state) => ({ seigyoku: state.seigyoku + amount })),
  spendSeigyoku: (amount) => set((state) => {
    if (state.seigyoku >= amount) {
      return { seigyoku: state.seigyoku - amount };
    }
    return state;
  }),
})); 