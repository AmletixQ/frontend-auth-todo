"use client";
import { ISession } from "@/interfaces/sessionType";
import { FC } from "react";
import { styled } from "styled-components";

const StyledBlock = styled.div`
  @media screen and (max-width: 360px) {
    h2 {
      font-size: 16px;
    }
  }
`;

interface IProps extends ISession {}
const ProfileCard: FC<IProps> = ({ email, id }) => {
  return (
    <StyledBlock>
      <h4>Your ID: {id}</h4>
      <h2>Your email: {email}</h2>
    </StyledBlock>
  );
};

export default ProfileCard;
