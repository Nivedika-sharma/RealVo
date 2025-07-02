import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("RealVo-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("RealVo-theme", theme);
    set({ theme });
  },
}));
