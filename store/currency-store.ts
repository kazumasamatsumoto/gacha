import { create } from 'zustand';

interface CurrencyState {
  seigyoku: number;
  shinyouPoint: number;
  addSeigyoku: (amount: number) => void;
  spendSeigyoku: (amount: number) => boolean;
  addShinyouPoint: (amount: number) => void;
  spendShinyouPoint: (amount: number) => boolean;
}

export const useCurrencyStore = create<CurrencyState>((set) => ({
  seigyoku: 1000,
  shinyouPoint: 1000000,
  addSeigyoku: (amount) => set((state) => ({ seigyoku: state.seigyoku + amount })),
  spendSeigyoku: (amount) => {
    let success = false;
    set((state) => {
      if (state.seigyoku >= amount) {
        success = true;
        return { seigyoku: state.seigyoku - amount };
      }
      return state;
    });
    return success;
  },
  addShinyouPoint: (amount) => set((state) => ({ shinyouPoint: state.shinyouPoint + amount })),
  spendShinyouPoint: (amount) => {
    let success = false;
    set((state) => {
      if (state.shinyouPoint >= amount) {
        success = true;
        return { shinyouPoint: state.shinyouPoint - amount };
      }
      return state;
    });
    return success;
  },
})); 