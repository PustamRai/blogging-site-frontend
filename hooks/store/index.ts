import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: number;
  username: string;
  email: string;
  role: "ADMIN" | "AUTHOR";
};

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;

  setAuth: (data: { user: User; token: string }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      setAuth: ({ user, token }) =>
        set({
          user,
          token,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "blogs-storage", // localStorage key
    }
  )
);
