import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const TIMEOUT = 10000;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
