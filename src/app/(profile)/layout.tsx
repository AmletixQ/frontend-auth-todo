import Header from "@/components/Header";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const ProfileLayout: FC<IProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default ProfileLayout;
