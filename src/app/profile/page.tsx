import { authConfig } from "@/configs/auth";
import { getServerSession } from "next-auth/next";
import React from "react";

const UserProfile = async () => {
  const session = await getServerSession(authConfig);
  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
    </div>
  );
};

export default UserProfile;
