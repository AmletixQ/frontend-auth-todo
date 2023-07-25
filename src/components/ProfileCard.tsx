"use client";
import { ISession } from "@/interfaces/interfaces";
import { FC } from "react";

interface IProps extends ISession {}
const ProfileCard: FC<IProps> = ({ email, id }) => {
  return (
    <div>
      {id}: {email}
    </div>
  );
};

export default ProfileCard;
