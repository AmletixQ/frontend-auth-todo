"use client";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Span from "./UI/Span";
import Link from "next/link";

import { ChangeEvent, FormEvent, useState } from "react";
import { IEnterUserData, ISession } from "../interfaces/interfaces";
import { http } from "@/lib/http";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [logInData, setLogInData] = useState<IEnterUserData>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await http.post<ISession>("/auth/signin", logInData);
    setLogInData({
      email: "",
      password: "",
    });
    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Enter your username"
        type="text"
        value={logInData.email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setLogInData({ ...logInData, email: e.target.value })
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
