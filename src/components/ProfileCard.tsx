"use client";
import { ISession } from "@/interfaces/interfaces";
import { FC } from "react";

interface IProps extends ISession {}
const ProfileCard: FC<IProps> = ({ email, id }) => {
  return (
    <div>
      <h4>Your ID: {id}</h4>
      <h2>Your email: {email}</h2>
    </div>
  );
};

export default ProfileCard;
