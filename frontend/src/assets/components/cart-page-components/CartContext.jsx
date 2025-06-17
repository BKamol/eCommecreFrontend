import { createContext, useContext } from 'react';
import { useCart as useCartLogic } from './UseCart';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cartLogic = useCartLogic();
  return (
    <CartContext.Provider value={cartLogic}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);