import { create } from "zustand";

const toggleStore = create((set) => ({
  isListingActive: false,
  isDasboardSidebarActive: false,
  listingToggleHandler: () =>
    set((state) => ({ isListingActive: !state.isListingActive })),
  dashboardSlidebarToggleHandler: () =>
    set((state) => ({
      isDasboardSidebarActive: !state.isDasboardSidebarActive,
    })),
}));

export default toggleStore;
