import apiClient from "./apiClient";

const authApi = {
    login: async (email: string, password: string) => {
        const response = await apiClient.post("/auth/login", { email, password });
        return response.data;
    },

    register: async (username: string, email: string, password: string) => {
        const response = await apiClient.post("/auth/register", {
            username,
            email,
            password,
        });
        return response.data;
    },
    verifyOtp: async (email: string, otp: string) => {
        const response = await apiClient.post("/auth/verify-otp", {
            email,
            otp,
        });
        return response.data;
    },
};

export default authApi;
