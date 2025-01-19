import { create } from "zustand";
import toast from "react-hot-toast";


export const useAuthStore = create((set, get) => ({
  

  signup: async (formData) => {
    set({ isSigningUp: true });
    try {
      const response = await axiosInstance.post("/auth/signup", formData);

      set({ authUser: response.data });
      toast.success("Account created successfully");
      get().connectSocket();
    } catch (error) {
      console.log("signup error in authStore.js", error.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (formData) => {
    set({ isLoggingIn: true });
    try {
      const response = await axiosInstance.post("/auth/login", formData);
      set({ authUser: response.data });
      toast.success("Loged in successfully");
      get().connectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("signup error in authStore.js", error.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
      get().disconnectSocket();
    } catch (error) {
      toast.error("Something went wrong");
      console.log("logout error in authStore.js", error.message);
    }
  },

  updateProfile: async (formData) => {
    set({ isUpdatingProfile: true });
    try {
      const response = await axiosInstance.put(
        "/auth/update-profile",
        formData
      );
      set({ authUser: response.data });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("updateProfile error in authStore.js", error.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  connectSocket: () => {
    const { authUser } = get();

    if (!authUser || get().socket?.connected) return;

    const socket = io(
      BASE_URL,
      { query: { userId: authUser._id } },
      { withCredentials: true }
    );
    socket.connect();
    set({ socket: socket });
    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },

  disconnectSocket: () => {
    if (get().socket) {
      get().socket.disconnect();
      set({ socket: null });
    }
  },
}));