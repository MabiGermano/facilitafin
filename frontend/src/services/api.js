

import axios from 'axios';
// import * as dotenv from 'dotenv';

// console.log("axios: ",  process.env.REACT_APP_PLAYLIST_SERVICE_ORIGIN);
const api = axios.create({
    baseURL: "http://127.0.0.1:8080"
});

export default api;