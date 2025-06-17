import axios from "axios";

const api = axios.create({
  baseURL: "/api", // НЕ ПОЛНЫЙ URL!
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
