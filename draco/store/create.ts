import create, { UseStore } from "zustand";
import isServer from "../lib/isServer";

let store: UseStore<stateType>;

export type stateType = {
  id: string;
  setId: (arg: string) => void;
};

const initStore = (pre = {}) => {
  return create<stateType>((set, get) => ({
    ...pre,
    id: "",
    setId: (id: string) => {
      set((state) => ({ id: id }));
    },
  }));
};

export const serverStore = () => {
  if (!isServer) return;
  return initStore({
    ...store.getState(),
  });
};

export default initStore;
