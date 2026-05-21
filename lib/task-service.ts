import axios from "axios";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export const fetchTasks = async (searchText: string): Promise<Task[]> => {
  const res = await axios.get<Task[]>(
    "http://localhost:3001/tasks",
    {
      params: {
        search: searchText,
      },
    },
  );
  return res.data;
};

export const deleteTask = async (taskId: string): Promise<Task> => {
  const res = await axios.delete<Task>(
    `http://localhost:3001/tasks/${taskId}`,
  );
  return res.data;
};

export const fetchTaskById = async (taskId: string): Promise<Task> => {
  const res = await axios.get<Task>(
    `http://localhost:3001/tasks/${taskId}`,
  );
  return res.data;
};
