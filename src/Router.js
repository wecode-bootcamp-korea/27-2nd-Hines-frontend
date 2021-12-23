import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Orderlist from './pages/Orderlist/Orderlist';

function Router() {
  const [isvaildToken, setIsvaildToken] = useState(false);
  return (
    <BrowserRouter>
      <Nav isvaildToken={isvaildToken} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/login"
          element={<Login />}
          isvaildToken={setIsvaildToken}
        />
        <Route path="/productList" element={<ProductList />} />
        <Route
          path="/product/:product_id"
          element={<ProductDetail isvaildToken={isvaildToken} />}
        />
        <Route path="/cart" element={<Cart />} isvaildToken={isvaildToken} />
        <Route path="/orderlist" element={<Orderlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
