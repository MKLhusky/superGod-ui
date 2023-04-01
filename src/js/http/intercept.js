import axios from "axios";
import router from "../../router";

const instance = axios.create({
    baseURL: "/api",
    timeout: 5000,
})


instance.interceptors.request.use((config) => {
    const token = window.localStorage.getItem("token");

    if (token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, error => {
    return Promise.reject(error)
})

instance.interceptors.response.use((res) => {
    return res.data
},error => {
    return error;
})

