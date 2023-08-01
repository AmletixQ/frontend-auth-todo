"use client";
import { styled } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 5px 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid gray;
  width: 800px;

  @media screen and (max-width: 360px) {
    width: 300px;
  }
`;

export default StyledHeader;
