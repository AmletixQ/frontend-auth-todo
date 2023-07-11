"use client";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { ChangeEvent, useState } from "react";
import { ILogInData } from "../interfaces/interfaces";

const LoginForm = () => {
  const [data, setData] = useState<ILogInData>({} as ILogInData);
  return (
    <form>
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