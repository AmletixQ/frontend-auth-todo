import { TUser } from "@/interfaces/userType";
import { cookies } from "next/headers";

export const getBackendSession = async () => {
  const token = cookies().get("auth-token");
  if (!token) return null;

  const payload = (await fetch("http://localhost:3000/api/auth/validate", {
    headers: new Headers({
      Authorization: `Bearer ${token.value}`,
    }),
  }).then((res) => res.json())) as TUser | null;

  return payload;
};
