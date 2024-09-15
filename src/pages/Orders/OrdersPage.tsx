import { Routes, Route, Navigate } from "react-router-dom";
import Orders from "./Orders";


const OrdersPage = () => {
  return (
    <Routes>
      <Route path="/all-orders" element={<Orders />} index />

      <Route
        path="/"
        element={<Navigate to="/admin/orders/all-orders" />}
      />
    </Routes>
  );
};

export default OrdersPage;
