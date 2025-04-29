import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Navbar from './assets/components/Navbar';
import SignUpNow from './assets/components/SignUpNow';

function App() {
  return (
    <BrowserRouter>
      <SignUpNow />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
 