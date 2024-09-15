import { Routes, BrowserRouter, Route } from "react-router-dom";
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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
