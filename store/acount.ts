import http from "@/api/interceptors";
import { create } from "zustand";
interface AcountStoreState {
  userData: any;
  isLoading: boolean;
  getUserData: (userID: any) => Promise<void>;
}

const useAccountStore = create<AcountStoreState>((set) => ({
  userData: [],
  isLoading: false,

  getUserData: async (userID) => {
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
