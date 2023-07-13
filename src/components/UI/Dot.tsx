"use client";
import { keyframes, styled } from "styled-components";

const animate = keyframes`
  0% {
    opacity: 0.2;
  } 20% {
    opacity: 1;
  } 100% {
    opacity: 0.2;
  }
`;

export default styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: var(--border);
  background-color: gray;
  animation: ${animate} 1s infinite;
  animation-delay: 1s;
`;
