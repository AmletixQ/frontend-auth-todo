"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { IEntrance } from "@/types/entrance.interface";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSession } from "@/stores/session.store";

const SignUp = () => {
  const router = useRouter();
  const entrance = useSession((state) => state.entrance);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEntrance>();
  const onSubmit: SubmitHandler<IEntrance> = async (_data) => {
    await entrance(_data, "/users");
    reset();
    router.push("/");
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="your-username"
        {...register("username", {
          required: {
            message: "This field is require",
            value: true,
          },
        })}
      />
      {errors.username && (
        <p className="text-sm text-red-600">{errors.username?.message}</p>
      )}

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
          max: {
            message: "Max password length is 48 symbols",
            value: 48,
          },
          min: {
            message: "Min password length is 8 symbols",
            value: 8,
          },
        })}
      />
      {errors.password && (
        <p className="text-sm text-red-600">{errors.password?.message}</p>
      )}

      <Button className="w-1/3">Sign up</Button>
    </form>
  );
};

export default SignUp;
