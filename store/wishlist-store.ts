import http from "@/api/interceptors";
import { create } from "zustand";

interface GetAllWishlist {
  page: number;
  limit: number;
}

interface WishlistStore {
  dataWishlist: [];
  countLikes: number;
  isLoading: boolean;
  // totalCount: number;
  getAllWishlist: (id: any) => Promise<void>;
  likePost: (id: number) => Promise<void>;
}

const useWishlistStore = create<WishlistStore>((set) => ({
  dataWishlist: [],
  isLoading: false,
  // totalCount: 1,
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
      console.log(response);
      // if (response.status === 201) {
      //   const dataWishlist = response.data;
      //   set((state) => ({
      //     countLikes: state.countLikes + (dataWishlist ? 1 : -1),
      //   }));
      // }
      return response.data.statusCode;
    } catch (error) {
      console.error("Error liking product:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useWishlistStore;
