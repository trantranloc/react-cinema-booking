import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import authApi from "../api/authApi";

const VerifyOtp: React.FC = () => {
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email");

    console.log("Email nhận được:", email);
    const navigate = useNavigate();

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await authApi.verifyOtp(email ?? "", otp);

            if (response.data.success) {
                alert("Xác thực thành công!");
                navigate("/login");
            } else {
                alert("OTP không đúng!");
            }
        } catch (error) {
            console.error("Lỗi Otp:", error);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <form onSubmit={handleVerifyOtp} className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Xác thực OTP</h2>
                <input type="text" placeholder="Nhập OTP" value={otp} onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-2 mb-3 rounded bg-gray-700" required />
                <button type="submit" className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 w-full" disabled={loading}>
                    {loading ? "Đang xác thực..." : "Xác nhận"}
                </button>
            </form>
        </div>
    );
};

export default VerifyOtp;
