import axios from 'axios';

const BASE_URL = 'https://eventos-api.vercel.app';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=utf-8"
    },
    
});

export default api;
