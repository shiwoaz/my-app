import { useContext } from "react";
import shallow from "zustand/shallow";

import { StoreContext } from "../context";

export const useStore = (key: any, eqFn: any = shallow) => {
  const store = useContext(StoreContext);
  return store!(key, eqFn);
};
