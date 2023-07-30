"use client";
import { ISetTodo } from "@/interfaces/todoTypes";
import { FC } from "react";

import TodoItem from "./TodoItem";
import { GapBlock } from "../UI/GapBlock";

const TodoList: FC<ISetTodo> = ({ todos, setTodos }) => {
  return todos.length ? (
    <GapBlock gap={10} direction="vertical">
      <h4>Todo List</h4>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </GapBlock>
  ) : (
    <h2 className="center">You haven't todo</h2>
  );
};

export default TodoList;
