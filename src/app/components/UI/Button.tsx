"use client";
import { styled } from "styled-components";

export default styled.button`
  padding: 5px 20px;
  background-color: transparent;
  border: var(--border);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    color: white;
    background-color: var(--primary);
  }
`;
