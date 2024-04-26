import axios from 'axios';
import refresh from "./userApi/refresh.ts";

const API_URL = import.meta.env.VITE_API_URL;

export const axiosRequest = axios.create({
  baseURL: API_URL,
});

axiosRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');
    if (token && config.url && config?.url.includes('auth/refresh')) {
      config.headers.Authorization = `Bearer ${refreshToken}`;
    }
    if (token) {
      console.log('token added');
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log(error.config, 'axios inter')
    if (
      error.response.status === 401 &&
      !originalRequest.url.includes('auth/refresh')
    ) {

      await refresh();
      return;
    }
    if (error.response.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true;
      try {
        return axiosRequest(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  },
);
