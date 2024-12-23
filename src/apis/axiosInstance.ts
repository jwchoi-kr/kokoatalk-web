import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.kokoatalk.shop',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
