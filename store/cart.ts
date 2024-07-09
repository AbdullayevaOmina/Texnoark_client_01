import http from "@/api/interceptors";
import { CartStoreState } from "@/types/cart-types";
import { create } from "zustand";

const useCartStore = create<CartStoreState>((set) => ({
  dataCardPr: [],
  isLoading: false,
  totalCount: 1,
  countCartPr: 0,

  getCartPrs: async (id: string) => {
    set({ isLoading: true });
    try {
      const response = await http.get(`/carts/user/${id}`);
      console.log(response);

      if (response.status === 200) {
        set({
          countCartPr: response.data.data.count,
          dataCardPr: response.data.data.carts,
        });
      }
      return response.status;
    } catch (error) {
      console.error("Error fetching comments:", error);
      set({ totalCount: 0 });
    } finally {
      set({ isLoading: false });
    }
  },

  addToCart: async (id) => {
    set({ isLoading: true });
    try {
      const response = await http.post(`/carts/create`, {
        product_id: id,
      });
      if (response.status === 201) {
        set((state) => ({
          dataComments: [...state.dataComments, response.data.data],
          countComment: state.countComment + 1,
        }));
      }
      return response.status;
    } catch (error) {
      console.error("Error creating cart:", error);
      set({ totalCount: 0 });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useCartStore;
