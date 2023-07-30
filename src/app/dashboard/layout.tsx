import Header from "@/components/Header";
import type { ReactNode } from "react";

const layout = async ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default layout;
