import { create } from "zustand";

export const useGymAdminStore = create((set) => ({
  sidebarToggle: false,

  setSidebarToggle: (boolean) => {
    set({ sidebarToggle: boolean });
    console.log("sidebarToggle", boolean);
  },
}));
