import React, { createContext } from 'react'
import { UseStore } from 'zustand';

export const StoreContext = createContext<UseStore<any> | null>(null);

export type StoreProviderProps = {
  store: UseStore<any>
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children, store }) => {
  return (
    <>
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    </>
  )
}

export default StoreProvider