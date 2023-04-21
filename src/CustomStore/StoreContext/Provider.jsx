import { StoreContext } from "@/CustomStore/StoreContext/StoreContext";
import React from "react";

export const Provider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
