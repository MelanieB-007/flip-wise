import styled from "styled-components";
import { signOut } from "next-auth/react";

export default function LogoutButton({ children }) {
  return (
    <StyledLogoutButton onClick={() => signOut()}>
      {children}
    </StyledLogoutButton>
  );
}

const StyledLogoutButton = styled.button`
  position: absolute;
  right: 40px;
  border: none;
  border-radius: 99px;
  overflow: hidden;
  padding: 0;
  width: 70px;
  height: 70px;
  cursor: pointer;
  &:hover {
    filter: contrast(0.8);
  }
`;
