import axios from "axios";

const api = axios.create({
  baseURL: "http://api.themoviedb.org/3/",
  params: {
    api_key: "046f145eba71b0aa4cc2b22be31a22c4",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
