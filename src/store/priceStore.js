import { create } from "zustand";

const priceStore = create((set) => ({
  plan: "1m",
  priceRange: {
    min: 0,
    max: 100000,
  },
  togglePlan: (getPlan) => set(() => ({ plan: getPlan })),
  priceRangeHandler: (min, max) =>
    set(() => ({
      priceRange: {
        min,
        max,
      },
    })),
}));

export default priceStore;
