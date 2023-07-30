"use client";
import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import Input from "../UI/Input";

interface IProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const TodoFilter: FC<IProps> = ({ search, setSearch }) => {
  return (
    <>
      <h4>Todo Filter</h4>
      <Input
        type={"text"}
        placeholder="Search..."
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
      />
    </>
  );
};

export default TodoFilter;
