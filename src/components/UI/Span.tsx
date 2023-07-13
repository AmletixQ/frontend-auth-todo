"use client";
import { styled } from "styled-components";

export default styled.span`
  margin-inline: 5px;

  a {
    text-decoration: underline;
    color: black;
    font-weight: bold;
    transition: var(--transition);

    &:hover {
      color: gray;
    }
  }
`;
