import axios from 'axios';
const api = axios.create({
    baseURL: "http://127.0.0.1:8080"
});

export default api;

export const headersConfig = {
    headers: {
      Authorization : `Bearer ${localStorage.getItem(process.env.REACT_APP_HEADER_STRING)}`
    }
  };