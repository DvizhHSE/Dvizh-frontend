import axios from "axios";

const api = axios.create({
  baseURL: "https://dvizh-backend-production-5a4a.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;