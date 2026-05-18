import axios from "axios";

export const api = axios.create({
    baseURL: 'https://skillboost-krnb.onrender.com/api',
})

api.interceptors.request.use((config) => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data?.token) {
        config.headers.Authorization = `Bearer ${data.token}`;
    }
    return config
})