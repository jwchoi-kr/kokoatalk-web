import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.kokoatalk.shop',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
