import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Movies from "../pages/admin/Movies";
import Showtimes from "../pages/admin/Showtimes";

const AdminRoutes: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

    return (
        <div className="flex bg-gray-900 text-white min-h-screen">
            {/* Sidebar (Cố định không đẩy nội dung) */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            {/* Main Content (Dịch sang phải khi Sidebar mở) */}
            <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "pl-64" : "pl-16"}`}>
                {/* Navbar */}
                <Navbar />

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/showtimes" element={<Showtimes />} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminRoutes;
