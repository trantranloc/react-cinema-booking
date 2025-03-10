import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../api/authApi";

const Register: React.FC = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // Chuyển trang 
    const navigate = useNavigate();
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await authApi.register(username, email, password);
            console.log("Đăng ký thành công:", response);
            // Chuyển đến trang nhập OTP
            navigate(`/verify-otp?email=${email}`);
        } catch (error: any) {
            console.error("Lỗi đăng ký:", error);
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-semibold text-yellow-400 text-center mb-4">Đăng ký</h2>

                {/* Form */}
                <form onSubmit={handleRegister}>
                    {/* Tên đăng nhập */}
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-1">Tên đăng nhập</label>
                        <div className="flex items-center border border-gray-600 rounded-md bg-gray-700 p-2">
                            <FontAwesomeIcon icon={faUser} className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Nhập tên đăng nhập"
                                className="bg-transparent outline-none flex-1 text-white"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-1">Email</label>
                        <div className="flex items-center border border-gray-600 rounded-md bg-gray-700 p-2">
                            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 mr-2" />
                            <input
                                type="email"
                                placeholder="Nhập email"
                                className="bg-transparent outline-none flex-1 text-white"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Mật khẩu */}
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-1">Mật khẩu</label>
                        <div className="flex items-center border border-gray-600 rounded-md bg-gray-700 p-2">
                            <FontAwesomeIcon icon={faLock} className="text-gray-400 mr-2" />
                            <input
                                type="password"
                                placeholder="Nhập mật khẩu"
                                className="bg-transparent outline-none flex-1 text-white"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Nút Đăng ký */}
                    <button
                        type="submit"
                        className="w-full bg-yellow-400 text-gray-900 font-semibold py-2 rounded-md hover:bg-yellow-500 transition">
                        Đăng ký
                    </button>
                </form>

                {/* Link Quay lại Đăng nhập */}
                <div className="mt-4 text-center text-gray-400 text-sm">
                    <p>
                        Đã có tài khoản?{" "}
                        <Link to="/login" className="text-yellow-400 hover:underline">Đăng nhập</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
