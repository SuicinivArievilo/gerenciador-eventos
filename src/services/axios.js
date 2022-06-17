import axios from 'axios';

const BASE_URL = 'https://eventos-api.vercel.app';

const api = axios.create({
    baseURL: BASE_URL
});

export default api;
