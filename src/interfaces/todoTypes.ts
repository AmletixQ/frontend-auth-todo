import { Dispatch, SetStateAction } from "react";

export interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
}

export interface ISetTodo {
  todos: ITodoItem[];
  setTodos: Dispatch<SetStateAction<ITodoItem[]>>;
}
