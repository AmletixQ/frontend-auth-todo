"use client";
import { ISetTodo, ITodoItem } from "@/interfaces/todoTypes";
import { FC, MouseEvent, useState } from "react";
import { styled } from "styled-components";
import Button from "../UI/Button";
import { http } from "@/lib/http";
import { GapBlock } from "../UI/GapBlock";
import Loader from "../UI/Loader";

const StyledBlock = styled.div`
  border: var(--border);
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: var(--transition);
  user-select: none;

  &:hover {
    scale: 1.2;
    cursor: pointer;
  }

  &.completed {
    border-color: green;
    h3 {
      color: green;
      font-style: italic;
      text-decoration: underline;
    }
  }
`;

type TProps = ITodoItem & ISetTodo;
const TodoItem: FC<TProps> = ({ id, title, completed, todos, setTodos }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const changeStatus = async () => {
    setLoading(true);
    await http.patch(`/todos/${id}`, {
      completed: !completed,
    });
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !completed,
          };
        }
        return todo;
      }),
    );
    setLoading(false);
  };

  const deleteTodo = async (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setLoading(true);
    await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "DELETE",
    });
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    setLoading(false);
  };

  return (
    <StyledBlock
      className={completed ? "completed" : ""}
      onClick={changeStatus}
    >
      <h3>{title}</h3>
      <GapBlock gap={5} direction="horizontal">
        {loading && <Loader />}
        {completed && <h4>Completed</h4>}
        <Button onClick={deleteTodo}>Delete</Button>
      </GapBlock>
    </StyledBlock>
  );
};

export default TodoItem;
