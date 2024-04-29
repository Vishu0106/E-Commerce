import axios from "axios";

const BASE_URL = "https://api.freeapi.app/api/v1/ecommerce"

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;
axiosInstance.defaults.timeout = 8500;

export default axiosInstance;