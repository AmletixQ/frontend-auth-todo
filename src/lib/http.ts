import axios from "axios";
import { getCookies } from "./getCookies";

export const http = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});

http.interceptors.request.use((config) => {
  if (!config.headers.get("cookie") && typeof window === "undefined") {
    config.headers.set("cookie", getCookies().toString());
  }

  return config;
});
