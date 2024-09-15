import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import AppRoutes from "./AppRoutes";
import { Dashboard } from "@/layout/DashboardLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard />}>
          <Route path="/admin/*" element={<PrivateRoutes />} />
        </Route>
        <Route path="/*" element={<AppRoutes />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
