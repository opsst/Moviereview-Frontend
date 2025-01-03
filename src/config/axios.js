import axios from "axios";

// สร้าง instance ของ axios
const apiClient = axios.create({
    baseURL: "http://localhost:8000", // URL เริ่มต้น
    timeout: 5000, // Timeout
});

// Interceptor สำหรับ Request
apiClient.interceptors.request.use(
    (config) => {
        console.log("Request Sent:", config);
        return config;
    },
    (error) => {
        console.error("Request Error:", error);
        return Promise.reject(error);
    }
);

// Interceptor สำหรับ Response
apiClient.interceptors.response.use(
    (response) => {
        console.log("Response Received:", response);
        return response // คืนค่าเฉพาะข้อมูลใน response.data
    },
    (error) => {
        console.error("Response Error:", error.response || error.message);
        return Promise.reject(error);
    }
);

export default apiClient;