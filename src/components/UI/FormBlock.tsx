"use client";
import { styled } from "styled-components";

export const FormBlock = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 360px) {
    h1 {
      font-size: 24px;
    }

    span {
      margin-top: 5px;
      display: block;
    }
  }
`;
