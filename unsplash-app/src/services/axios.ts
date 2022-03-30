import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: { "Authorization": `Client-ID ${process.env.VUE_APP_API_ACCESS_KEY}`, "X-Per-Page": process.env.VUE_APP_RESULTS_PER_PAGE}
});
export default axiosInstance;