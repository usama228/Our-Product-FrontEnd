import { create } from "zustand";

const shopStore = create((set) => ({
  products: [],
  addToCart: (product) =>
    set((state) => ({
      products: state.products.some((p) => p.id === product.id)
        ? state.products
        : [
            ...state.products,
            { qty: product.qty ? product.qty : 1, ...product },
          ],
    })),

  updateQty: (id, qty) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id && product.inStock > product.qty + qty
          ? { ...product, qty }
          : product,
      ),
    })),

  deleteProduct: (id) =>
    set((state) => {
      const deletedProduct = state.products.filter(
        (product) => product.id !== id,
      );
      return { products: deletedProduct };
    }),
}));

export default shopStore;
