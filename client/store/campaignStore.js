import { create } from 'zustand';

const useCampaignStore = create((set) => ({
    campaigns: [],
    loading: false,
    setCampaigns: (campaigns) => set({ campaigns }),
    setLoading: (loading) => set({ loading }),
}));

export default useCampaignStore;
