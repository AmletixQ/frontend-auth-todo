"use client";
import { ISession } from "@/interfaces/interfaces";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface ISessionContext {
  session: ISession | null;
  setSession: Dispatch<SetStateAction<ISession | null>>;
}

export const sessionContext = createContext<ISessionContext>(
  {} as ISessionContext,
);

export default function SessionProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<ISession | null>(null);

  return (
    <sessionContext.Provider
      value={{
        session,
        setSession,
      }}
    >
      {children}
    </sessionContext.Provider>
  );
}
