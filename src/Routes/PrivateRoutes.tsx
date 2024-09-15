import OrdersPage from "@/pages/Orders/OrdersPage";
import ProductsPage from "@/pages/Products/ProductsPage";
import { Routes, BrowserRouter, Route } from "react-router-dom";

const PrivateRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/product/*" element={<ProductsPage />} />
        <Route path="/orders/*" element={<OrdersPage />} />
      </Routes>
  );
};

export default PrivateRoutes;
