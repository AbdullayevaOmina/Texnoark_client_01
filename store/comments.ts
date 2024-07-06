import http from "@/api/interceptors";
import { create } from "zustand";

export interface CommnetsStoreState {
  dataComments: any[];
  isLoading: boolean;
  totalCount: number;
  getCommnets: (id: any) => Promise<void>;
  countComment: number;
}

const useCommenttStore = create<CommnetsStoreState>((set) => ({
  dataComments: [],
  isLoading: false,
  totalCount: 1,
  countComment: 0,
  getCommnets: async (id) => {
    set({ isLoading: true });
    try {
      const response = await http.get(`/comment/product/${id}`);
      // const { comment, count } = response?.data?.data;
      if (response.status === 200) {
        return response?.data?.data;
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ totalCount: 0 });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useCommenttStore;
