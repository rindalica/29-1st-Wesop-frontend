import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import AllProductsList from './pages/ProductsList/AllProductsList/AllProductsList';
import SubcatProductsList from './pages/ProductsList/SubcatProductsList/SubcatProductsList';
import ProductsDetail from './pages/ProductsDetail/ProductsDetail';
import Order from './pages/Order/Order';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products-list-all" element={<AllProductsList />} />
        <Route
          path="/products-list-subcategory"
          element={<SubcatProductsList />}
        />
        <Route path="/products-detail" element={<ProductsDetail />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
