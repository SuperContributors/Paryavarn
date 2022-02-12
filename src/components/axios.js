import axios from "axios";

const instance = axios.create({
  baseURL: "https://forest-api-cover.herokuapp.com/",
});

instance.get("/country");

export default instance;