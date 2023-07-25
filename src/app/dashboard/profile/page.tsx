import ProfileCard from "@/components/ProfileCard";
import getServerSession from "@/hooks/getServerSession";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  return (
    <div>
      <ProfileCard {...session} />
    </div>
  );
};

export default page;
