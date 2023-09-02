import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const Entrance = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-full">
      <h1 className="text-lg text-center font-medium">
        Entrance to todo application
      </h1>
      <Tabs defaultValue="login" className="w-2/4">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="login">Sign in</TabsTrigger>
          <TabsTrigger value="register">Sign up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
              <CardDescription>
                You need authorize for work with{" "}
                <span className="font-bold">Todo-Application</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SignIn />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>
                You can create account for work with{" "}
                <span className="font-bold">Todo-Application</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SignUp />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Entrance;
