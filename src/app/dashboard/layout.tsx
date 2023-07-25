import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import getServerSession from "@/hooks/getServerSession";
import type { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession();
  return (
    <div>
      <Header />
      <ProfileCard {...session} />
      <main>{children}</main>
    </div>
  );
};

export default layout;
