// import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
// import PrivateRoutes from "./PrivateRoutes";
// import AppRoutes from "./AppRoutes";
// import { Dashboard } from "@/layout/DashboardLayout";

// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<Dashboard />}>
//           <Route path="/admin/*" element={<PrivateRoutes />} />
//         </Route>
//         <Route path="/*" element={<AppRoutes />} />
//         <Route path="/" element={<Navigate to="/login" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Router;


import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "@/layout/DashboardLayout";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import TFA from "@/pages/Auth/TFA";
import OrdersPage from "@/pages/Orders/OrdersPage";
import ProductsPage from "@/pages/Products/ProductsPage";
import StoresPage from "@/pages/Store/StoresPage";
import UsersPage from "@/pages/Users/UsersPage";
import VendorsPage from "@/pages/Vendor/VendorsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Routes under Dashboard */}
        <Route element={<Dashboard />}>
          <Route path="/admin" element={<Navigate to="/admin/home" />} />
          <Route path="/admin/home" element={<h1>Home</h1>} />
          <Route path="/admin/product/*" element={<ProductsPage />} />
          <Route path="/admin/order/*" element={<OrdersPage />} />
          <Route path="/admin/user/*" element={<UsersPage />} />
          <Route path="/admin/vendor/*" element={<VendorsPage />} />
          <Route path="/admin/store/*" element={<StoresPage />} />
        </Route>

        {/* Public Routes */}
        <Route path="/hello" element={<h1>Hello</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tfa-code" element={<TFA />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

