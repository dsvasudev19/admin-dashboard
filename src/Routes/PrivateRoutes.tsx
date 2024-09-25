import OrdersPage from "@/pages/Orders/OrdersPage";
import ProductsPage from "@/pages/Products/ProductsPage";
import StoresPage from "@/pages/Store/StoresPage";
import UsersPage from "@/pages/Users/UsersPage";
import VendorsPage from "@/pages/Vendor/VendorsPage";
import { Routes, Route } from "react-router-dom";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/product/*" element={<ProductsPage />} />
      <Route path="/order/*" element={<OrdersPage />} />
      <Route path="/user/*" element={<UsersPage />} />
      <Route path="/vendor/*" element={<VendorsPage />} />
      <Route path="/store/*" element={<StoresPage />} />
    </Routes>
  );
};

export default PrivateRoutes;
