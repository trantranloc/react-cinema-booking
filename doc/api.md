Để sử dụng API trong React, bạn có thể tổ chức mã theo một cách chuyên nghiệp, dễ mở rộng. Dưới đây là một cấu trúc thư mục gọn gàng để quản lý API trong **React với TypeScript**.

---

## 📂 **Cấu trúc thư mục**
```
/src
 ├── /api
 │    ├── apiClient.ts         # Cấu hình axios
 │    ├── authApi.ts           # API xác thực (login, register)
 │    ├── movieApi.ts          # API phim (lấy danh sách, chi tiết phim)
 │    ├── bookingApi.ts        # API đặt vé
 │
 ├── /services
 │    ├── authService.ts       # Xử lý logic đăng nhập, đăng ký
 │    ├── movieService.ts      # Xử lý dữ liệu phim
 │    ├── bookingService.ts    # Xử lý đặt vé
 │
 ├── /components
 │    ├── Login.tsx
 │    ├── Register.tsx
 │    ├── MovieList.tsx
 │    ├── Booking.tsx
 │
 ├── /pages
 │    ├── Home.tsx
 │    ├── MovieDetail.tsx
 │    ├── BookingPage.tsx
 │
 ├── App.tsx
```

---

## 🛠 **1. Cấu hình `axios`**
Tạo file **`api/apiClient.ts`** để thiết lập base URL và interceptor.
```tsx
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.example.com", // URL của API
  headers: {
    "Content-Type": "application/json",
  },
});

// Thêm interceptor để tự động thêm token vào request
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
```

---

## 🔐 **2. API xác thực (`authApi.ts`)**
Tạo file **`api/authApi.ts`** để gọi API đăng nhập, đăng ký.
```tsx
import apiClient from "./apiClient";

const authApi = {
  login: async (email: string, password: string) => {
    const response = await apiClient.post("/auth/login", { email, password });
    return response.data;
  },

  register: async (email: string, password: string, username: string) => {
    const response = await apiClient.post("/auth/register", { email, password, username });
    return response.data;
  },
};

export default authApi;
```

---

## 🎬 **3. API phim (`movieApi.ts`)**
Tạo file **`api/movieApi.ts`** để lấy danh sách phim.
```tsx
import apiClient from "./apiClient";

const movieApi = {
  getMovies: async () => {
    const response = await apiClient.get("/movies");
    return response.data;
  },

  getMovieDetail: async (movieId: string) => {
    const response = await apiClient.get(`/movies/${movieId}`);
    return response.data;
  },
};

export default movieApi;
```

---

## 🎟 **4. API đặt vé (`bookingApi.ts`)**
Tạo file **`api/bookingApi.ts`** để đặt vé.
```tsx
import apiClient from "./apiClient";

const bookingApi = {
  bookTicket: async (userId: string, movieId: string, seats: number[]) => {
    const response = await apiClient.post("/booking", { userId, movieId, seats });
    return response.data;
  },
};

export default bookingApi;
```

---

## 🏷 **5. Dịch vụ xử lý API (`authService.ts`)**
Tạo file **`services/authService.ts`** để xử lý dữ liệu đăng nhập.
```tsx
import authApi from "../api/authApi";

const authService = {
  login: async (email: string, password: string) => {
    const data = await authApi.login(email, password);
    localStorage.setItem("token", data.token);
    return data.user;
  },

  logout: () => {
    localStorage.removeItem("token");
  },
};

export default authService;
```

---

## 🔗 **6. Sử dụng API trong component (`Login.tsx`)**
Tạo file **`components/Login.tsx`** để đăng nhập.
```tsx
import React, { useState } from "react";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await authService.login(email, password);
      alert(`Đăng nhập thành công! Xin chào ${user.username}`);
      navigate("/"); // Chuyển hướng về trang chủ
    } catch (error) {
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl text-yellow-400 font-semibold text-center mb-4">Đăng nhập</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border border-gray-600 rounded bg-gray-700 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full p-2 mb-3 border border-gray-600 rounded bg-gray-700 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-yellow-400 py-2 rounded font-semibold hover:bg-yellow-500"
          onClick={handleLogin}
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default Login;
```

---

## 🚀 **7. Router (`Router.tsx`)**
Tạo file **`util/Router.tsx`** để định tuyến các trang.
```tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import BookingPage from "../pages/BookingPage";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
```

---

## 🎯 **Tóm tắt cách làm**
✅ **Cấu trúc rõ ràng**: Tách biệt API, services, component.  
✅ **Sử dụng `axios` + interceptor**: Xử lý token tự động.  
✅ **Dễ bảo trì & mở rộng**: Mỗi API có file riêng.  
✅ **Tương thích với React Router**: Xử lý điều hướng mượt mà.  

Bạn có thể áp dụng cách này cho bất kỳ dự án React nào! 🚀