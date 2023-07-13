"use client";
import Button from "@/components/UI/Button";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const handleClick = () => {
    signOut();
    redirect("/");
  };
  return (
    <>
      <header>
        <Button onClick={handleClick}>Sign out</Button>
      </header>
      <main>{children}</main>
    </>
  );
};

export default layout;
