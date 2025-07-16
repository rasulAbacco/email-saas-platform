import { create } from 'zustand';

const useAnalyticsStore = create((set) => ({
    stats: null,
    filters: { range: 'monthly' },
    setStats: (stats) => set({ stats }),
    setFilter: (filters) => set((state) => ({ filters: { ...state.filters, ...filters } })),
}));

export default useAnalyticsStore;
