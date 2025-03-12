import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import authApi from "../api/authApi";

const VerifyOtp: React.FC = () => {
    const [otp, setOtp] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Thêm state để hiển thị lỗi
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email");
    const navigate = useNavigate();

    useEffect(() => {
        if (!email) {
            alert("Không tìm thấy email, vui lòng thử lại!");
            navigate("/register");
        }
    }, [email, navigate]);

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");

        console.log("Email gửi lên:", email);
        console.log("OTP gửi lên:", otp);

        try {
            const response = await authApi.verifyOtp(email ?? "", otp);

            if (response.success) {
                navigate("/login");
            }
        } catch (error: any) {
            console.error("Lỗi OTP:", error);
            setErrorMessage("OTP không đúng hoặc đã hết hạn!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <form onSubmit={handleVerifyOtp} className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Xác thực OTP</h2>
                <input
                    type="text"
                    placeholder="Nhập OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-2 mb-3 rounded bg-gray-700"
                    required
                />
                {errorMessage && <p className="text-red-500 text-sm mb-3">{errorMessage}</p>}
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-200"
                >
                    Xác nhận OTP
                </button>
            </form>
        </div>
    );
};

export default VerifyOtp;
