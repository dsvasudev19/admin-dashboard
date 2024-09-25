import { Routes, Route, Navigate } from "react-router-dom";
import Users from "./Users";


const UsersPage = () => {
  return (
    <Routes>
      <Route path="/all-users" element={<Users />} index />

      <Route path="/" element={<Navigate to="/admin/user/all-users" />} />
    </Routes>
  );
};

export default UsersPage;
