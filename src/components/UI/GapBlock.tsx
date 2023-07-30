"use client";
import { styled } from "styled-components";

export const GapBlock = styled.div<{
  gap: number;
  direction: "vertical" | "horizontal";
}>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "vertical" ? "column" : "row"};
  align-items: ${(props) => (props.direction === "horizontal" ? "center" : "")};
  gap: ${(props) => props.gap}px;
`;
