import { children, createContext, useState, useReducer } from "react";

// it is good for auto complete
const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    
  }

  if (action.type === "REMOVE_ITEM") {
    /// logic
  }
}
export function CartContextProvider({ children }) {

    useReducer(cartReducer,{items:[]})
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContext;
