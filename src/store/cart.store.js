import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product) =>
        set((state) => {
          const isFound = state.cart.find((item) => item.id === product.id);

          return {
            cart: isFound
              ? state.cart.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
                )
              : [...state.cart, { ...product, quantity: 1 }],
          };
        }),

      updateQuantity: (product, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: Math.max(1, quantity) }
              : item,
          ),
        })),

      removeProduct: (product) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== product.id),
        })),

      cleanCart: () => set({ cart: [] }),
    }),

    { name: "cart-store", partialize: (state) => ({ cart: state.cart }) },
  ),
);

export const selectSubTotal = (state) =>
  state.cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

export const selectTotalQuantity = (state) =>
  state.cart.reduce((acc, curr) => acc + curr.quantity, 0);
