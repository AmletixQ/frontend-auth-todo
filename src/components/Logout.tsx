"use client";
import { AuthService } from "@/services/auth.service";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleClick = async () => {
    await AuthService.logout();
    router.push("/auth");
  };

  return (
    <Button onClick={handleClick} variant={"destructive"}>
      Logout
    </Button>
  );
};
export default LogoutButton;
