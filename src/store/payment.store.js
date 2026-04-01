import { create } from "zustand";

export const usePaymentStore = create((set) => ({
  name: "",
  address: "",
  paymentMethod: "",

  setName: (value) => set({ name: value }),
  setAddress: (value) => set({ address: value }),
  setPaymentMethod: (value) => set({ paymentMethod: value }),

  reset: () => set({ name: "", address: "", paymentMethod: "" }),
}));
