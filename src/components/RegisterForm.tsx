"use client";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Span from "./UI/Span";
import Link from "next/link";

import { ChangeEvent, FormEvent, useState } from "react";
import { IEnterUserData } from "../interfaces/interfaces";
import { http } from "@/lib/http";

const RegisterForm = () => {
  const [signInData, setSignInData] = useState<IEnterUserData>({
    email: "",
    password: "",
  });

  const handlerSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { data } = await http.post<{
      id: number;
      email: string;
      token: string;
    }>("/signup", signInData);

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
