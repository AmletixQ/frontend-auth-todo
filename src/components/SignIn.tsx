"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { IEntrance } from "@/types/entrance.interface";
import { http } from "@/lib/http";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IEntrance>();

  const onSubmit: SubmitHandler<IEntrance> = async (data) => {
    await http.post("/users/login", { user: data });
    reset();
    router.push("/");
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        placeholder="name@example.com"
        {...register("email", {
          required: {
            message: "This field is require",
            value: true,
          },
        })}
      />
      {errors.email && (
        <p className="text-sm text-red-600">{errors.email?.message}</p>
      )}
      <Input
        type="password"
        placeholder="you-is-the-best123"
        {...register("password", {
          required: {
            message: "This field is require",
            value: true,
          },
          min: {
            message: "Password must be more then 7",
            value: 8,
          },
          max: {
            message: "Password must be less then 48",
            value: 48,
          },
        })}
      />
      {errors.password && (
        <p className="text-sm text-red-600">{errors.password?.message}</p>
      )}
      <Button className="w-1/3">Sign in</Button>
    </form>
  );
};

export default SignIn;
