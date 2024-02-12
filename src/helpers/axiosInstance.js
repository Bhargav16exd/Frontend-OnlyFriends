import axios from "axios"

const BASE_URL = "https://onlyfriends-backend-production.up.railway.app/api/v1"


const axiosInstance = axios.create({
    baseURL:BASE_URL,
    withCredentials:true
})



export default axiosInstance;