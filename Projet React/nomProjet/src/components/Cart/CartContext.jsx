import { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existingIndex = state.findIndex(item => item.id === action.payload.id);
      if (existingIndex !== -1) {
        return state.map((item, index) =>
          index === existingIndex
            ? { ...item, amount: item.amount + action.payload.amount }
            : item
        );
      }
      return [...state, action.payload];

    case "REMOVE":
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
