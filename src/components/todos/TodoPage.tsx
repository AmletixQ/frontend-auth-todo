"use client";
import { ITodoItem } from "@/interfaces/todoTypes";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import TodoAddForm from "./TodoAddForm";
import { GapBlock } from "../UI/GapBlock";

import { FC, useMemo, useState } from "react";
import { ISession } from "@/interfaces/sessionType";
import Loader from "../UI/Loader";

interface IProps {
  todolist: ITodoItem[];
  session: ISession;
}

const TodoPage: FC<IProps> = ({ todolist, session }) => {
  const [todos, setTodos] = useState<ITodoItem[]>(todolist);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredTodos = useMemo(() => {
    if (search) {
      return todos.filter((todo) => {
        return todo.title.toLowerCase().includes(search.toLowerCase());
      });
    }
    return todos;
  }, [todos, search]);

  return (
    <GapBlock gap={10} direction="vertical">
      <h2 className={"center"}>Your todo list</h2>
      <TodoFilter search={search} setSearch={setSearch} />
      <hr />
      <TodoAddForm
        todos={todos}
        setTodos={setTodos}
        user_id={session.id}
        loading={loading}
        setLoading={setLoading}
      />
      <hr />
      <TodoList todos={filteredTodos} setTodos={setTodos} />
      {loading && <Loader />}
    </GapBlock>
  );
};

export default TodoPage;
