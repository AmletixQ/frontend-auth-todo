import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SignIn = () => {
  return (
    <form className="flex flex-col gap-2">
      <Input type="email" placeholder="name@example.com" />
      <Input type="password" placeholder="you-is-the-best123" />
      <Button className="w-1/3">Sign in</Button>
    </form>
  );
};

export default SignIn;
