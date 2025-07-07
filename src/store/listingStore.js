import { create } from "zustand";

const listingStore = create((set) => ({
  getDeliveryTime: "",
  getLevel: [],
  getLocation: [],
  getBestSeller: "best-seller",
  getDesginTool: [],
  getSpeak: [],
  getSearch: "",
  getCategory: [],
  getProjectType: [],
  getEnglishLevel: [],
  getJobType: [],
  getNoOfEmployee: [],
  setDeliveryTime: (payload) => set(() => ({ getDeliveryTime: payload })),
  setLevel: (payload) =>
    set((state) => {
      if (payload?.length !== 0) {
        const isExist = state.getLevel.includes(payload);
        if (!isExist) {
          return { getLevel: [...state.getLevel, payload] };
        } else {
          const deleted = state.getLevel.filter((item) => item !== payload);
          return { getLevel: deleted };
        }
      } else {
        return { getLevel: [] };
      }
    }),
  setLocation: (payload) =>
    set((state) => {
      if (payload?.length !== 0) {
        const isExist = state.getLocation.includes(payload);
        if (!isExist) {
          return { getLocation: [...state.getLocation, payload] };
        } else {
          const deleted = state.getLocation.filter((item) => item !== payload);
          return { getLocation: deleted };
        }
      } else {
        return { getLocation: [] };
      }
    }),
  setBestSeller: (payload) => set(() => ({ getBestSeller: payload })),
  setDesginTool: (payload) =>
    set((state) => {
      if (payload?.length !== 0) {
        const isExist = state.getDesginTool.includes(payload);
        if (!isExist) {
          return { getDesginTool: [...state.getDesginTool, payload] };
        } else {
          const deleted = state.getDesginTool.filter(
            (item) => item !== payload,
          );
          return { getDesginTool: deleted };
        }
      } else {
        return { getDesginTool: [] };
      }
    }),
  setSpeak: (payload) =>
    set((state) => {
      if (payload?.length !== 0) {
        const isExist = state.getSpeak.includes(payload);
        if (!isExist) {
          return { getSpeak: [...state.getSpeak, payload] };
        } else {
          const deleted = state.getSpeak.filter((item) => item !== payload);
          return { getSpeak: deleted };
        }
      } else {
        return { getSpeak: [] };
      }
    }),
  setSearch: (payload) => set(() => ({ getSearch: payload })),
  setCategory: (payload) =>
    set((state) => {
      if (payload?.length !== 0) {
        const isExist = state.getCategory.includes(payload);
        if (!isExist) {
          return { getCategory: [...state.getCategory, payload] };
        } else {
          const deleted = state.getCategory.filter((item) => item !== payload);
          return { getCategory: deleted };
        }
      } else {
        return { getCategory: [] };
      }
    }),
  setProjectType: (payload) =>
    set((state) => {
      if (payload?.length !== 0) {
        const isExist = state.getProjectType.includes(payload);
        if (!isExist) {
          return {
            getProjectType: [...state.getProjectType, payload],
          };
        } else {
          const deleted = state.getProjectType.filter(
            (item) => item !== payload,
          );
          return { getProjectType: deleted };
        }
      } else {
        return { getProjectType: [] };
      }
    }),
  setEnglishLevel: (payload) =>
    set((state) => {
      if (payload?.length !== 0) {
        const isExist = state.getEnglishLevel.includes(payload);
        if (!isExist) {
          return {
            getEnglishLevel: [...state.getEnglishLevel, payload],
          };
        } else {
          const deleted = state.getEnglishLevel.filter(
            (item) => item !== payload,
          );
          return { getEnglishLevel: deleted };
        }
      } else {
        return { getEnglishLevel: [] };
      }
    }),
  setJobType: (payload) =>
    set((state) => {
      if (payload?.length !== 0) {
        const isExist = state.getJobType.includes(payload);
        if (!isExist) {
          return {
            getJobType: [...state.getJobType, payload],
          };
        } else {
          const deleted = state.getJobType.filter((item) => item !== payload);
          return { getJobType: deleted };
        }
      } else {
        return { getJobType: [] };
      }
    }),
  setNoOfEmployee: (payload) =>
    set((state) => {
      if (payload?.length !== 0) {
        const isExist = state.getNoOfEmployee.includes(payload);
        if (!isExist) {
          return {
            getNoOfEmployee: [...state.getNoOfEmployee, payload],
          };
        } else {
          const deleted = state.getNoOfEmployee.filter(
            (item) => item !== payload,
          );
          return { getNoOfEmployee: deleted };
        }
      } else {
        return { getNoOfEmployee: [] };
      }
    }),
}));

export default listingStore;
