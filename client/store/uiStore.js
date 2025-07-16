import { create } from 'zustand';

const useUIStore = create((set) => ({
    theme: 'light',
    sidebarOpen: true,
    setTheme: (theme) => set({ theme }),
    toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));

export default useUIStore;
