"use client";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Span from "./UI/Span";
import Link from "next/link";

import { ChangeEvent, FormEvent, useState } from "react";
import { IEnterUserData } from "../interfaces/interfaces";
import axios from "axios";

const RegisterForm = () => {
  const [signInData, setSignInData] = useState<IEnterUserData>({
    email: "",
    password: "",
  });

  const handlerSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await axios.post<{
      id: number;
      email: string;
      token: string;
    }>("http://localhost:3000/api/signup", signInData);

    setSignInData({
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handlerSubmit}>
      <Input
        placeholder="Enter your username"
        type="email"
        value={signInData.email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSignInData({ ...signInData, email: e.target.value })
        }
      />
      <Input
        placeholder="Enter your password"
        type="password"
        value={signInData.password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSignInData({ ...signInData, password: e.target.value })
        }
        autoComplete="on"
      />
      <Button type="submit">Register</Button>

      <Span>
        or you can <Link href="/login">login</Link>
      </Span>
    </form>
  );
};

export default RegisterForm;
