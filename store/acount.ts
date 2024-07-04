import http from "@/api/interceptors";
import { create } from "zustand";

const useAccountStore = create((set) => ({
  userData: [],
  isLoading: false,

  getUserData: async (userID: number) => {
    set({ isLoading: true });
    try {
      const response = await http.get(`/users/${userID}`);
      console.log(response);

      if (response.status === 200) {
        set({ userData: response.data.data });
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      set({ userData: [] }); // Clear userData on error
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useAccountStore;
