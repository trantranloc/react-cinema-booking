### 🔥 **Xử lý Đăng ký & Chuyển đến Trang Nhập OTP**  
Bạn cần **gửi request đăng ký**, **nhận phản hồi** và **chuyển đến trang nhập OTP** sau khi đăng ký thành công.  

---

## 🛠 **Bước 1: API Đăng ký**
Giả sử API có endpoint:  
- **`POST /auth/register`** → Đăng ký tài khoản  
- **`POST /auth/verify-otp`** → Xác nhận OTP  

### **Gửi yêu cầu đăng ký**
📌 **File `Register.tsx`**
```tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../utils/apiClient"; // Import API client

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await apiClient.post("/auth/register", { email, password });
      
      if (response.data.success) {
        navigate(`/verify-otp?email=${email}`); // Chuyển sang trang OTP
      } else {
        alert("Đăng ký thất bại!");
      }
    } catch (error) {
      alert("Lỗi đăng ký: " + (error as any).response?.data?.message || "Lỗi không xác định");
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleRegister} className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Đăng ký</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 rounded bg-gray-700" required />
        <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 rounded bg-gray-700" required />
        <button type="submit" className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 w-full" disabled={loading}>
          {loading ? "Đang đăng ký..." : "Đăng ký"}
        </button>
      </form>
    </div>
  );
};

export default Register;
```

---

## 🛠 **Bước 2: Trang Nhập OTP**
📌 **File `VerifyOtp.tsx`**
```tsx
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import apiClient from "../utils/apiClient";

const VerifyOtp: React.FC = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") || ""; // Lấy email từ URL
  const navigate = useNavigate();

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await apiClient.post("/auth/verify-otp", { email, otp });
      
      if (response.data.success) {
        alert("Xác thực thành công!");
        navigate("/login"); // Chuyển sang trang đăng nhập
      } else {
        alert("OTP không đúng!");
      }
    } catch (error) {
      alert("Lỗi xác thực: " + (error as any).response?.data?.message || "Lỗi không xác định");
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
```

---

## 🛠 **Bước 3: Cấu hình Router**
📌 **File `Router.tsx`**
```tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import VerifyOtp from "../pages/VerifyOtp";
import Login from "../pages/Login";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default AppRouter;
```

---

## 🚀 **Tóm tắt cách hoạt động**
1️⃣ Người dùng nhập email & mật khẩu rồi ấn "Đăng ký".  
2️⃣ Gửi request đến **`POST /auth/register`**, API sẽ gửi mã OTP về email.  
3️⃣ Nếu đăng ký thành công, chuyển hướng đến trang **`/verify-otp?email=xxx@example.com`**.  
4️⃣ Người dùng nhập OTP, gửi request **`POST /auth/verify-otp`**.  
5️⃣ Nếu OTP đúng, chuyển sang trang **Đăng nhập**.  

---

## 🔥 **Lợi ích cách làm này**
✔ **Không cần lưu email trong state** (Lấy từ URL).  
✔ **Không cần Redux** (Chỉ dùng `useState`).  
✔ **Gọn nhẹ, dễ mở rộng** (Thêm resend OTP, timeout, v.v).  

Bạn thử test xem có lỗi gì không nhé! 🚀