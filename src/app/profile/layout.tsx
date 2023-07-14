import { ReactNode } from "react";

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  return <>
  <header>Header</header>
  {children}
  </>;
};

export default ProfileLayout;
