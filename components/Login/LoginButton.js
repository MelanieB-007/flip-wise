import styled from "styled-components";
import { signIn } from "next-auth/react";

export default function LoginButton({ children }) {
  return (
    <StyledLoginButton onClick={() => signIn()}>{children}</StyledLoginButton>
  );
}

const StyledLoginButton = styled.button`
  position: absolute;
  right: 40px;
  border: none;
  border-radius: 99px;
  overflow: hidden;
  background-color: #003d45;
  padding: 0;
  width: 70px;
  height: 70px;
  cursor: pointer;
  &:hover {
    background-color: #00575f;
  }
`;
