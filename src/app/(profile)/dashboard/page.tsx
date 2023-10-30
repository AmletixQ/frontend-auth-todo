"use client";

import { useSession } from "@/stores/session.store";
import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    useSession.persist.rehydrate();
  }, []);
  const session = useSession((state) => state.session);
  return (
    <div className="px-10">
      <h1 className="text-2xl font-bold text-yellow-500">
        Hello, {session.username}!
      </h1>
    </div>
  );
};

export default Dashboard;
