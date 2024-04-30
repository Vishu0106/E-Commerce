import axios from "axios";

const BASE_URL = "https://fakestoreapi.com"

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = false;
axiosInstance.defaults.timeout = 8500;

export default axiosInstance;