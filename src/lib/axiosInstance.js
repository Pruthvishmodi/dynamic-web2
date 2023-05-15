import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.29.23:1337/api/",
  timeout: 1000,
});

export default instance;
