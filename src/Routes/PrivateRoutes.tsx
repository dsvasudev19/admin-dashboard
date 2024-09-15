import { Routes, BrowserRouter, Route } from "react-router-dom";

const PrivateRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
  );
};

export default PrivateRoutes;
