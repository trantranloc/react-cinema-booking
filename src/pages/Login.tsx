import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../api/authApi";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await authApi.login(email, password);
            console.log("Đăng nhập thành công:", response);
            // Chuyển đến trang home
            navigate("/");
        } catch (error: any) {
            console.error("Lỗi:", error);
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-semibold text-yellow-400 text-center mb-4">Đăng nhập</h2>

                {/* Form */}
                <form onSubmit={handleLogin}>
                    {/* Tên đăng nhập */}
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-1">Email</label>
                        <div className="flex items-center border border-gray-600 rounded-md bg-gray-700 p-2">
                            <FontAwesomeIcon icon={faUser} className="text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Nhập email"
                                className="bg-transparent outline-none flex-1 text-white"
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Nút Đăng nhập */}
                    <button className="w-full bg-yellow-400 text-gray-900 font-semibold py-2 rounded-md hover:bg-yellow-500 transition">
                        Đăng nhập
                    </button>
                </form>

                {/* Link Quên mật khẩu & Đăng ký */}
                <div className="mt-4 text-center text-gray-400 text-sm">
                    <p>
                        Quên mật khẩu?{" "}
                        <Link to="/forgot-password" className="text-yellow-400 hover:underline">Khôi phục</Link>
                    </p>
                    <p className="mt-2">
                        Chưa có tài khoản?{" "}
                        <Link to="/register" className="text-yellow-400 hover:underline">Đăng ký</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
