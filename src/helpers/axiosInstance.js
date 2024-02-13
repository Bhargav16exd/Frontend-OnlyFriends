// helpers/axiosInstance.js

import axios from 'axios';

const BASE_URL = "http://localhost:8090/api/v1";

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
