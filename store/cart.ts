import http from "@/api/interceptors";
import { CartStoreState } from "@/types/cart-types";
import { create } from "zustand";

const useCartStore = create<CartStoreState>((set) => ({
  dataCardPr: [],
  isLoading: false,
  totalCount: 1,
  countCartPr: 0,

  chengedata: async (data) => {
    try {
      set((state) => ({
        dataCardPr: [...state.dataCardPr, data],
        countCartPr: state.countCartPr + 1,
      }));
    } catch (error) {
      console.error("Error fetching cart products:", error);
    }
  },

  getCartPrs: async (id: string) => {
    set({ isLoading: true });
    try {
      const response = await http.get(`/carts/user/${id}`);
      if (response.status === 200) {
        set({
          countCartPr: response.data.data.count,
          dataCardPr: response.data.data.carts,
        });
      }
      return response.status;
    } catch (error) {
      console.error("Error fetching cart products:", error);
      set({ totalCount: 0 });
    } finally {
      set({ isLoading: false });
    }
  },

  addToCart: async (id: string) => {
    set({ isLoading: true });
    try {
      const response = await http.post(`/carts/create`, {
        product_id: id,
      });
      return response.status;
    } catch (error) {
      console.error("Error adding to cart:", error);
      set({ totalCount: 0 });
    } finally {
      set({ isLoading: false });
    }
  },

  deleteFromCart: async (id: number) => {
    set({ isLoading: true });
    try {
      const response = await http.delete(`/carts/delete/${id}`);
      if (response.status === 200) {
        set((state) => ({
          dataCardPr: state.dataCardPr.filter((item) => item.id !== id),
          countCartPr: state.countCartPr - 1,
        }));
      }
      return response.status;
    } catch (error) {
      console.error("Error deleting from cart:", error);
      set({ totalCount: 0 });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useCartStore;
