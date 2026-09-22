import { create } from "zustand";

export interface AppWindow {
  id: string;
  title: string;
  zIndex: number;
}

interface WindowState {
  windows: AppWindow[];
  activeZIndex: number;

  openWindow: (id: string, title: string) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
}

export const useWindowStore = create<WindowState>((set) => ({
  windows: [],
  activeZIndex: 10,

  openWindow: (id, title) =>
    set((state) => {
      const isActive = state.windows.find((w) => w.id === id);
      if (isActive) {
        return {
          windows: state.windows.map((w) =>
            w.id === id ? { ...w, zIndex: state.activeZIndex + 1 } : w,
          ),
          activeZIndex: state.activeZIndex + 1,
        };
      }

      return {
        windows: [
          ...state.windows,
          { id, title, zIndex: state.activeZIndex + 1 },
        ],
        activeZIndex: state.activeZIndex + 1,
      };
    }),

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    })),

  focusWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, zIndex: state.activeZIndex + 1 } : w,
      ),
      activeZIndex: state.activeZIndex + 1,
    })),
}));
