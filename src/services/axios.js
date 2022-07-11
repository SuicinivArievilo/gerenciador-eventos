import axios from 'axios';
import nookies from 'nookies';

const BASE_URL = 'http://18.231.37.81:3000';

var jwtcookie = nookies.get('nextauth.token');
const ValueJWT = Object.values(jwtcookie);

axios.defaults.headers.common = {
'Authorization': `Bearer ${ValueJWT}`,
"Access-Control-Allow-Origin": "*",
'Content-Type':'application/x-www-form-urlencoded'}



const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json;charset=utf-8"
    }
    
});

export default api;