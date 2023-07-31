"use client";
import { ChangeEvent, FC, FormEvent, useState } from "react";

import Input from "../UI/Input";
import Button from "../UI/Button";
import { ISetTodo } from "@/interfaces/todoTypes";
import { http } from "@/lib/http";

const TodoAddForm: FC<ISetTodo & { user_id: number }> = ({
  todos,
  setTodos,
  user_id,
}) => {
  const [name, setName] = useState("");

  const createTodo = async (e: FormEvent) => {
    e.preventDefault();
    const { data } = await http.post<{ id: number }>("/todos", {
      title: name,
      completed: false,
      user_id,
    });

    setTodos([
      ...todos,
      {
        id: data.id,
        title: name,
        completed: false,
      },
    ]);
    setName("");
  };

  return (
    <form onSubmit={createTodo}>
      <h4>Todo Create Form</h4>
      <Input
        type="text"
        placeholder="Enter todo name"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        required
      />
      <Button>Create todo</Button>
    </form>
  );
};

export default TodoAddForm;
