import { create } from "zustand";
import { products } from "../data/products";

let timeoutId;

export const useProductsStore = create((set, get) => ({
  allProducts: products,
  search: "",
  debounced: "",
  filter: "All",
  sort: "",

  setSearch: (value) => {
    set({ search: value });

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      set({ debounced: value.trim().toLowerCase() });
    }, 300);
  },
  setFilter: (category) => set({ filter: category }),
  setSort: (order) => set({ sort: order }),

  getFilteredProducts: () => {
    const { allProducts, debounced, filter, sort } = get();

    let filtered = allProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(debounced);
      const matchesCategory =
        filter === "All" ||
        product.category.toLowerCase() === filter.toLowerCase();
      return matchesSearch && matchesCategory;
    });

    if (sort === "more") filtered.sort((a, b) => b.price - a.price);
    if (sort === "lower") filtered.sort((a, b) => a.price - b.price);

    return filtered;
  },
}));
