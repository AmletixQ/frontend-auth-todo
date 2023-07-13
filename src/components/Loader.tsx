"use client";

import { styled } from "styled-components";
import Dot from "./UI/Dot";

const StyledBlock = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Loader = () => {
  return (
    <StyledBlock>
      <Dot />
      <Dot />
      <Dot />
    </StyledBlock>
  );
};

export default Loader;
