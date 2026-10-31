import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../page/Home";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Cualquier otra dirección vuelve al inicio */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
