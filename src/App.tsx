import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./util/AdminRoutes";
import UserRoutes from "./util/UserRoutes";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <Routes>
        {/* Routes của Admin */}
        <Route path="/admin/*" element={<AdminRoutes />} />

        {/* Routes của User */}
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
    </div>
  );
}
