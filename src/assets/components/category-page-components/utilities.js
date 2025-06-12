import axios from 'axios';

const CACHE_KEY = 'products_cache';
const CACHE_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

// Save to localStorage with expiry
export const saveProducts = (products) => {
  const cacheData = {
    data: products,
    expiry: Date.now() + CACHE_DURATION_MS,
  };
  localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
};

// Load from localStorage (returns null if expired/missing)
export const loadProducts = () => {
  const cachedData = localStorage.getItem(CACHE_KEY);
  if (!cachedData) return null;

  const { data, expiry } = JSON.parse(cachedData);
  return expiry > Date.now() ? data : null;
};

// Fetch products with Axios (cache-first)
export const fetchProducts = async () => {
  // 1. Check cache
  const cachedProducts = loadProducts();
  if (cachedProducts) {
    console.log('Using cached products');
    return cachedProducts;
  }

  // 2. Fetch fresh data if cache is invalid
  try {
    const response = await axios.get('http://localhost:8000/products/productsfull/');
    const products = response.data; // Axios stores data in `response.data`

    // 3. Cache the new data
    saveProducts(products);
    console.log('Fetched fresh products and cached them');
    return products;
  } catch (error) {
    console.error('Axios error:', error.response?.data || error.message);
    return null;
  }
};

export const clearCache = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Cache clear failed:', error);
    return false;
  }
};


const CART_KEY = 'user_cart';

export const getCart = () => {
  try {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error("Failed to read cart:", error);
    return [];
  }
};

export const saveCart = (cartItems) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
};
