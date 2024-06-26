import http from "@/api/interceptors";
import { GetAll, CategoryStoreState } from "@/types/category-types";
import { create } from "zustand";

const useCategoryStore = create<CategoryStoreState>((set) => ({
  categoriesData: [],
  isLoading: false,
  totalCount: 1,

  //
  getAll: async (params: GetAll) => {
    set({ isLoading: true });
    try {
      const response = await http.get(`/category/search?`, {
        params,
      });
      console.log(response);

      if (response.status === 200) {
        const { count, categories } = response.data.data;
        set({
          totalCount: Math.ceil(count / params.limit),
          categoriesData: categories,
        });
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      set({ totalCount: 0 });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useCategoryStore;
