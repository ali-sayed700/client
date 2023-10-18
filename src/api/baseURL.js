import axios from "axios";

const baseUrl = axios.create({ baseURL: "https://shop-market.com" });

export default baseUrl;
