import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import { Electronics } from "./types";
// import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext<any | null>(null);

const AppProvider = ({ children }: any) => {
  const [cart, setCart] = useState(cartItems);

  return (
    <AppContext.Provider
      value={{
        cart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
