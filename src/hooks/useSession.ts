import { sessionContext } from "@/components/SessionContext";
import { ISession } from "@/interfaces/interfaces";
import { useContext } from "react";

export default function useSession() {
  const { session } = useContext(sessionContext);

  return session as ISession;
}
