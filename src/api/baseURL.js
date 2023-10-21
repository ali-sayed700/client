import axios from "axios";

// const baseUrl = axios.create({ baseURL: "https://shop-market.onrender.com" });
// const baseUrl = axios.create({
//   baseURL: "https://guarded-journey-89485-2deed8ad17c6.herokuapp.com",
// });
const baseUrl = axios.create({
  baseURL: "https://shop-market.onrender.com",
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// https://guarded-journey-89485-2deed8ad17c6.herokuapp.com
export default baseUrl;
// http://127.0.0.1:8000
