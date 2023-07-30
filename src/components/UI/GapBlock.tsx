"use client";
import { styled } from "styled-components";

export const GapBlock = styled.div<{ gap: number }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;
