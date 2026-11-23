import axios from "axios";

const api = axios.create({
  baseURL: "https://shopino.pachim.run/v1",

  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
  },

  timeout: 5000,
});

export default api;
