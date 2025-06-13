import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Navbar from './assets/components/Navbar';
import SignUpNow from './assets/components/SignUpNow';
import Footer from './assets/components/Footer';
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from './pages/Register';
import { CartProvider } from './assets/components/cart-page-components/CartContext';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <Toaster position="top-right" />
    <CartProvider>
      <BrowserRouter>
        <SignUpNow />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetail/:productId" element={<ProductDetail />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App;
 