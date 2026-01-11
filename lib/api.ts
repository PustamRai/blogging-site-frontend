// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:8000",
// });


// export default api





import axios from "axios";
import { useAuthStore } from "../hooks/store/index";
// Create basic instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

// Request interceptor to attach token
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token; // get token directly from Zustand
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
