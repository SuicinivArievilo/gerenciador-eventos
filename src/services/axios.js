import axios from 'axios';

const BASE_URL = 'http://18.231.37.81:3000';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=utf-8"
    },
    
});

export default api;
