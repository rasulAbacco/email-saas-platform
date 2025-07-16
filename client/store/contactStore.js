import { create } from 'zustand';

const useContactStore = create((set) => ({
    contacts: [],
    selectedContact: null,
    setContacts: (contacts) => set({ contacts }),
    setSelectedContact: (contact) => set({ selectedContact: contact }),
}));

export default useContactStore;
