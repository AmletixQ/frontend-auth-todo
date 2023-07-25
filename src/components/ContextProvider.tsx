"use client";
import { ISession } from "@/interfaces/interfaces";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface IUserContext {
  session: ISession | null;
  setSession: Dispatch<SetStateAction<ISession | null>>;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export default function UserContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [session, setSession] = useState<ISession | null>(null);
  return (
    <UserContext.Provider
      value={{
        session,
        setSession,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
