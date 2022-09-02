import axios from "axios";

const client = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 5000,
});

export default client;
