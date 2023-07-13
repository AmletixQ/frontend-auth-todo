"use client";
import { ChangeEvent, useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { ISignInData } from "../interfaces/interfaces";

const RegisterForm = () => {
  const [signInData, setSignInData] = useState<ISignInData>({} as ISignInData);

  return (
    <form>
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
    </form>
  );
};

export default RegisterForm;
