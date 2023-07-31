"use client";
import { styled, keyframes } from "styled-components";
const bouncing = keyframes`
  to {
    opacity: 0.1;
    transform: translateY(-8px);
  }
`;

const StyledBlock = styled.div`
  display: flex;
  justify-content: center;

  div {
    width: 12px;
    height: 12px;
    margin: 3px;
    border-radius: 50%;
    background-color: black;
    opacity: 1;
    animation: ${bouncing} 0.6s infinite alternate;
  }

  & > div:nth-child(2) {
    animation-delay: 0.2s;
  }

  & > div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
const Loader = () => {
  return (
    <StyledBlock>
      <div></div>
      <div></div>
      <div></div>
    </StyledBlock>
  );
};

export default Loader;
