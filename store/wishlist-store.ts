import http from "@/api/interceptors";
import { create } from "zustand";

interface GetAllWishlist {
  page: number;
  limit: number;
}

interface WishlistStore {
  dataWishlist: [];
  dataLength: number;
  isLoading: boolean;
  totalCount: number;
  getAllWishlist: (params: GetAllWishlist) => Promise<void>;
  likePost: (id: number) => Promise<void>;
}

const useWishlistStore = create<WishlistStore>((set) => ({
  dataWishlist: [],
  isLoading: false,
  totalCount: 1,
  dataLength: 0,

  getAllWishlist: async (params: GetAllWishlist) => {
    set({ isLoading: true });
    try {
      const response = await http.get(`/likes`, {
        params: {
          page: params.page,
          limit: params.limit,
        },
      });

      if (response.status === 200) {
        const { total_count, products } = response.data;
        set({
          totalCount: Math.ceil(total_count / params.limit),
          dataWishlist: products,
          dataLength: products.length,
        });
      }
    } catch (error) {
      console.error("Error fetching wishlist:", error);
      set({ totalCount: 0, dataWishlist: [], dataLength: 0 });
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
      //     dataLength: state.dataLength + (dataWishlist ? 1 : -1),
      //   }));
      // }
      // return response.data;
    } catch (error) {
      console.error("Error liking product:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useWishlistStore;
