import Header from "@/components/Header";
import getServerSession from "@/hooks/getServerSession";
import type { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession();
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default layout;
