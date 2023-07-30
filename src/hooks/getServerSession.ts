import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function getServerSession() {
  const token = cookies().get("auth-token");

  if (!token) {
    return redirect("/login");
  }

  const data = await fetch("http://localhost:3000/api/auth/validate", {
    headers: new Headers({
      Authorization: `Bearer ${token.value}`,
    }),
  }).then((res) => res.json());

  if (!data) {
    return redirect("/login");
  }

  return {
    id: data.id,
    email: data.email,
  } as {
    id: number;
    email: string;
  };
}
