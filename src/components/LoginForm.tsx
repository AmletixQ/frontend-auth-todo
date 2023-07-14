"use client";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Span from "./UI/Span";
import Link from "next/link";

import { ChangeEvent, FormEvent, useState } from "react";
import { IEnterUserData } from "../interfaces/interfaces";
import axios from "axios";

const LoginForm = () => {
  const [data, setData] = useState<IEnterUserData>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await axios.post<IEnterUserData>(
      "http://localhost:3000/api/login",
      { ...data },
    );
    setData({
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Enter your username"
        type="text"
        value={data.username}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setData({ ...data, username: e.target.value })
        }
      />
      <Input
        placeholder="Enter your password"
        type="password"
        value={data.password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setData({ ...data, password: e.target.value })
        }
        autoComplete="on"
      />
      <Button>Log In</Button>
      <Span>
        or you can <Link href="/register">register</Link>
      </Span>
    </form>
  );
};

export default LoginForm;
