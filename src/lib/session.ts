import ISession from "@/types/session.interface";
import { http } from "./http";
import { getCookies } from "./getCookies";

export const getMiddlewareSession = async (cookie: string) => {
  const res = await fetch("http://localhost:3001/users/profile", {
    headers: {
      cookie,
    },
  });
  if (res.ok) {
    return await res.json();
  }

  return null;
};

export const getSession = async () => {
  try {
    const res = await http.get("users/profile", {
      headers: {
        cookie: getCookies().toString()
      }
    });
    if (res.status === 200) {
      return res.data as ISession;
    }

    throw new Error();
  } catch (error) {
    return null;
  }
};
