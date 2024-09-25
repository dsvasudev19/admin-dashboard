import { Routes, Route, Navigate } from "react-router-dom";
import Stores from "./Stores";

const StoresPage = () => {
  return (
    <Routes>
      <Route path="/all-stores" element={<Stores />} index />

      <Route path="/" element={<Navigate to="/admin/store/all-stores" />} />
    </Routes>
  );
};

export default StoresPage;
