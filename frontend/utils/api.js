import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

// Intercepta as requisições para adicionar o token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
