import axios from "axios";

console.log(process.env)
const http = axios.create({
  baseURL: "http://localhost:3000",
});

export { http };
