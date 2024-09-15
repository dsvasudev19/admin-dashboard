import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import TFA from "@/pages/Auth/TFA";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/hello" element={<h1>Hello</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="tfa-code" element={<TFA />} />
      </Routes>
  );
};

export default AppRoutes;
