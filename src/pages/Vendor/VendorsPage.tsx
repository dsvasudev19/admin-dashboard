import { Routes, Route, Navigate } from "react-router-dom";
import Vendors from "./Vendors";

const VendorsPage = () => {
  return (
    <Routes>
      <Route path="/all-vendors" element={<Vendors />} index />

      <Route path="/" element={<Navigate to="/admin/vendor/all-vendors" />} />
    </Routes>
  );
};

export default VendorsPage;
