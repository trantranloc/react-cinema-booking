import { Routes, Route } from "react-router-dom";
import Home from "../pages/user/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VerifyOtp from "../pages/VerifyOtp";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieDetail from "../pages/user/MovieDetail";
import SeatSelection from "../pages/user/SeatSelection";


const UserRoutes = () => {
    return (
        <div className="min-h-screen bg-gray-800 flex flex-col">
            <Header />
            <main className="container mx-auto flex-column  items-center px-6 mt-16">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/booking" element={<SeatSelection />} />
                    <Route path="/verify-otp" element={<VerifyOtp />} />
                    <Route path="/detail-movie" element={<MovieDetail />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default UserRoutes;
