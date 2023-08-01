"use client";
import Loader from "@/components/UI/Loader";
import { styled } from "styled-components";

const StyledBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const loading = () => {
  return (
    <StyledBlock>
      <Loader />
    </StyledBlock>
  );
};

export default loading;
