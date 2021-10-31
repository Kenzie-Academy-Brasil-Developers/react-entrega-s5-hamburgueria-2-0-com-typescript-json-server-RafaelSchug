import axios from "axios";

const api = axios.create({
  baseURL: "https://hamburgueria-json-server.herokuapp.com",
});

export default api;
