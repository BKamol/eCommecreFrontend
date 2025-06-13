import { useEffect, useState } from 'react';
import { getCart, saveCart } from '../category-page-components/utilities.js';

export const useCart = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    setCart(getCart());
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id && item.colors[0] === product.colors[0] && item.sizes === product.sizes);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id && item.colors[0] === product.colors[0] && item.sizes === product.sizes
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId, productColor=null, productSize=null) => {
    if (productColor && productSize)
      setCart(prev => prev.filter(item => item.id !== productId || item.colors[0] !== productColor || item.sizes !== productSize));
    else
      setCart(prev => prev.filter(item => item.id !== productId))
  };

  const updateQuantity = (productId, newQuantity, productColor=null, productSize=null) => {
    if (productColor && productSize) {
      setCart(prev =>
      prev.map(item =>
        item.id === productId && item.colors[0] === productColor && item.sizes === productSize ? { ...item, quantity: newQuantity } : item
        )
      );
    }
    else {
      setCart(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
    
  };

  return { cart, addToCart, removeFromCart, updateQuantity };
};
