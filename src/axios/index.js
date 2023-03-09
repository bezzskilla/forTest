import { getContentType } from "../api/api.helper";
import axios from "axios";

export default axios.create({
  baseURL: "https://api.react-learning.ru/",
  headers: getContentType(),
});
