import axios from "axios";
// http://127.0.0.1:8000
// const baseUrl = axios.create({ baseURL: "https://shop-market.onrender.com" });
// const baseUrl = axios.create({
//   baseURL: "https://guarded-journey-89485-2deed8ad17c6.herokuapp.com",
// });
const baseUrl = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, PUT DELETE",
    "Access-Control-Allow-Headers":
      "Content-Type , X-Auth-Token,Origin,Authorization",
  },
});

// https://guarded-journey-89485-2deed8ad17c6.herokuapp.com
export default baseUrl;
// http://127.0.0.1:8000
