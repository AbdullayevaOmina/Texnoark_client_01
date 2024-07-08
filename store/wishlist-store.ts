import http from "@/api/interceptors";
import { create } from "zustand";
interface WishlistStore {
  dataWishlist: [];
  countLikes: number;
  isLoading: boolean;
  getAllWishlist: (id: any) => Promise<void>;
  likePost: (id: number) => Promise<void>;
}

const useWishlistStore = create<WishlistStore>((set) => ({
  dataWishlist: [],
  isLoading: false,
  countLikes: 0,

  getAllWishlist: async (id) => {
    set({ isLoading: true });
    try {
      const response = await http.get(`/likes/user/likes/${id}`);
      if (response.status === 200) {
        const { likes, count } = response.data.data;
        set({
          dataWishlist: likes,
          countLikes: count,
        });
      }
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  likePost: async (id: number) => {
    set({ isLoading: true });
    try {
      const response = await http.post(`/likes/create`, { product_id: id });
      if (response?.data?.statusCode === 201) {
        set((state) => ({
          countLikes: state.countLikes + 1,
        }));
      } else if (response?.data?.statusCode === 200) {
        set((state) => ({
          countLikes: state.countLikes - 1,
        }));
      }
      return response?.data?.statusCode;
    } catch (error) {
      console.error("Error liking product:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useWishlistStore;
