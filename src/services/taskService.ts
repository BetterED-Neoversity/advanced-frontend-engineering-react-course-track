import axios from "axios";
import type { Task } from "../types/task";

axios.defaults.baseURL = "http://localhost:3001";

export const getTasks = async () => {
  const res = await axios.get<Task[]>("/tasks");
  return res.data;
};
