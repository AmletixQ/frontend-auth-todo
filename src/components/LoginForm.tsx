"use client";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Span from "./UI/Span";
import Link from "next/link";

import { ChangeEvent, FormEvent, useState } from "react";
import { IEnterUserData } from "../interfaces/interfaces";

interface IProps {
  url: string | undefined
}

const LoginForm = ({ url }: IProps) => {
  const [logInData, setLogInData] = useState<IEnterUserData>({
    username: "",
    password: "",
  });

  return (
    <form>
      <Input
        placeholder="Enter your username"
        type="text"
        value={logInData.username}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setLogInData({ ...logInData, username: e.target.value })
        }
      />
      <Input
        placeholder="Enter your password"
        type="password"
        value={logInData.password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setLogInData({ ...logInData, password: e.target.value })
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
