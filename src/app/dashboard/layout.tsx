import ProfileCard from "@/components/ProfileCard";
import getServerSession from "@/hooks/getServerSession";
import type { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession();
  return (
    <div>
      <ProfileCard {...session} />
      <main>{children}</main>
    </div>
  );
};

export default layout;
