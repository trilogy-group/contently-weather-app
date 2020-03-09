import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

export default axios.create({
  baseURL: BASE_URL
});
