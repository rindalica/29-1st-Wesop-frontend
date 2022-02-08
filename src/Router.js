import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import ProductsList from './pages/ProductsList/ProductsList';
import ProductsDetail from './pages/ProductsDetail/ProductsDetail';
import Order from './pages/Order/Order';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/skin" element={<ProductsList />} />
        <Route path="/skin/products/:productId" element={<ProductsDetail />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
