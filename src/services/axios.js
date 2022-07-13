import axios from 'axios';
import nookies from 'nookies';

const BASE_URL = 'http://18.231.37.81:3000';

var jwtcookie = nookies.get('nextauth.token');
const ValueJWT = Object.values(jwtcookie);
axios.defaults.headers.common['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common = {'Authorization': `Bearer ${ValueJWT}`}
const api = axios.create({
    withCredentials: false,
    baseURL: BASE_URL
});

export default api;
