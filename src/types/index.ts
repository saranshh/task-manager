export interface Task {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  userId: string;
}

export interface User {
  id: string;
  email: string;
}