import http from "@/api/interceptors";
import { CommnetsStoreState } from "@/types/comment-types";
import { create } from "zustand";

const useCommenttStore = create<CommnetsStoreState>((set) => ({
  dataComments: [],
  isLoading: false,
  totalCount: 1,
  countComment: 0,

  getComments: async (id) => {
    set({ isLoading: true });
    try {
      const response = await http.get(`/comment/product/${id}`);
      if (response.status === 200) {
        set({
          countComment: response?.data.data.count,
          dataComments: response?.data.data.comment,
        });
        return response?.data?.data;
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ totalCount: 0 });
    } finally {
      set({ isLoading: false });
    }
  },
  
  createComment: async (commentData) => {
    set({ isLoading: true });
    try {
      const response = await http.post(`/comment/create`, commentData);
      console.log(response);

      // if (response.status === 200) {
      // }
    } catch (error) {
      console.error("Error fetching comment:", error);
      set({ totalCount: 0 });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useCommenttStore;
