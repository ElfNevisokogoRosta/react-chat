import axios from 'axios'
import userApi from "./userApi";

export const axiosRequest = axios.create({
  baseURL: process.env.API_URL
})

axiosRequest.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    const refreshToken = localStorage.getItem('refreshToken')
    if (token && config.url && config?.url.includes('auth/refresh')) {
      config.headers.Authorization = `Bearer ${refreshToken}`
    }
    if (token) {
      console.log('token added')
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosRequest.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest.url.includes('auth/refresh')) {
      await userApi.refresh()
      return
    }
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        return axiosRequest(originalRequest)
      } catch (err) {
        return Promise.reject(err)
      }
    }
    return Promise.reject(error)
  }
)