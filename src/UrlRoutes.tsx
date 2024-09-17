import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Hello from "./screens/Hello";

export default function UrlRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
