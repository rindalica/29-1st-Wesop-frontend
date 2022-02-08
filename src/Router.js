import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import AllProductsPage from './pages/ProductsList/AllProductsPage/AllProductsPage';
import SubcatProductsPage from './pages/ProductsList/SubcatProductsPage/SubcatProductsPage';
import ProductsDetail from './pages/ProductsDetail/ProductsDetail';
import Order from './pages/Order/Order';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/skin" element={<AllProductsPage />} />
        <Route
          path="/skin/categories/:subcatId"
          element={<SubcatProductsPage />}
        />
        <Route path="/skin/products/:productId" element={<ProductsDetail />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
