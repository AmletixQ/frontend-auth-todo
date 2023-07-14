"use client";
import Button from "@/components/UI/Button";
import Span from "@/components/UI/Span";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

const StyledBlock = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RootPage = () => {
  const router = useRouter();
  return (
    <StyledBlock>
      <Button onClick={() => router.push("/register")}>Register</Button>
      <Span> or </Span>
      <Button onClick={() => router.push("/login")}>Login</Button>
    </StyledBlock>
  );
};

export default RootPage;
