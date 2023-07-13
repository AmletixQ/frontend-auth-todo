"use client";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Span from "./UI/Span";
import Link from "next/link";

import { ChangeEvent, FormEvent, useState } from "react";
import { ISignInData } from "../interfaces/interfaces";
import axios from "axios";

const RegisterForm = () => {
  const [signInData, setSignInData] = useState<ISignInData>({
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await axios.post<ISignInData>(
      "http://localhost:3000/api/register",
      signInData,
    );
    setSignInData({
      email: "",
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Enter your username"
        type="text"
        value={signInData.username}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSignInData({ ...signInData, username: e.target.value })
        }
      />
      <Input
        placeholder="Enter your email"
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
      <Button>Register</Button>

      <Span>
        or you can <Link href="/login">login</Link>
      </Span>
    </form>
  );
};

export default RegisterForm;
