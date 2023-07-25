"use client";
import { styled } from "styled-components";

const StyledBlock = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RootPage = () => {
  return (
    <StyledBlock>
      <h1>Main page</h1>
    </StyledBlock>
  );
};

export default RootPage;
