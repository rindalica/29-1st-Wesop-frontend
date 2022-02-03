import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import AllProductsPage from './pages/ProductsList/AllProductsPage/AllProductsPage';
import SubcatProductsPage from './pages/ProductsList/SubcatProductsPage/SubcatProductsPage';
import ProductsDetail from './pages/ProductsDetail/ProductsDetail';
import Order from './pages/Order/Order';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/skin" element={<AllProductsPage />} />
        <Route path="/skin/categories/:id" element={<SubcatProductsPage />} />
        <Route path="/products-detail" element={<ProductsDetail />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
