import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext<any | null>(null);

const [isSidebarOpen, setIsSidebarOpen] = useState(true);
const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

const openSidebar = () => {
  setIsSidebarOpen(true);
};

const closeSidebar = () => {
  setIsSidebarOpen(false);
};

const openSubmenu = () => {
  setIsSubmenuOpen(true);
};

const closeSubmenu = () => {
  setIsSubmenuOpen(false);
};

const AppProvider = ({ children }: any) => {
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
