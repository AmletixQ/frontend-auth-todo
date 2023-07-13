"use client";
import Button from "@/components/UI/Button";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const RootPage = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    redirect("/profile");
  }

  return (
    <div>
      <h1>Not in signed!</h1>
      <Button onClick={() => signIn()}>Sign in</Button>
    </div>
  );
};

export default RootPage;
