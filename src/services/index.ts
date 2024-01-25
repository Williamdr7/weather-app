import axios from "axios";

const weatherApi = axios.create({
  baseURL: import.meta.env.VITE_WHEATHER_API_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export { weatherApi };
