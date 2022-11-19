import React, { useState, useContext } from "react";

const AppContext = React.createContext<any | null>(null);

const AppProvider = ({ children }: any) => {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
