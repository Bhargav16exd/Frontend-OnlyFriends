// helpers/axiosInstance.js

import axios from 'axios';

const BASE_URL = "https://onlyfriends-backend-production-a2b2.up.railway.app/api/v1";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

axiosInstance.interceptors.request.use(
  config => {
    
    const authToken = localStorage.getItem('cookie');

    
    if (authToken) {
      config.headers['Authorization'] = `Bearer ${authToken}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
