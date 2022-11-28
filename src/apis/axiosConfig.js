import axios from "axios";
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || `https://nurster.com/api/`;

const axiosConfig = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': true,
    },
});

axiosConfig.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            localStorage.clear(); // use this if needed. this will remove all items from localstorage
            delete axiosConfig.defaults.headers.common.Authorization;
        }
        return config;
    },
    (error) => console.error(error)
);

axiosConfig.interceptors.response.use(
    (response) => {
        if (response.status === 401 || response.status === 403) {
            localStorage.clear();
        }
        // Any status code from range of 2xx
        // Do something with response data
        return response;
    },
    (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
            localStorage.clear();
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
);

export default axiosConfig;