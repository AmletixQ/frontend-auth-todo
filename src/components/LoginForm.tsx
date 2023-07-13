"use client";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import { ILogInData } from "../interfaces/interfaces";
import axios from "axios";

const LoginForm = () => {
  const [data, setData] = useState<ILogInData>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/login/api", data);
    setData({
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Enter your email"
        type="email"
        value={data.email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setData({ ...data, email: e.target.value })
        }
      />
      <Input
        placeholder="Enter your password"
        type="password"
        value={data.password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setData({ ...data, password: e.target.value })
        }
      />
      <Button>Log In</Button>
    </form>
  );
};

export default LoginForm;
