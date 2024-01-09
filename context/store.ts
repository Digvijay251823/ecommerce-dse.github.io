"use client";
import { create } from "zustand";

interface ThemeStore {
  theme: "light" | "dark";
  setTheme: (newTheme: "light" | "dark") => void;
}

const useThemeStore = create<ThemeStore>((set) => ({
  theme: "light",
  setTheme: (newTheme) => set({ theme: newTheme }),
}));

export default useThemeStore;
