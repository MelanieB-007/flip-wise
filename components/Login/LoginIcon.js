import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { useSession } from "next-auth/react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function LoginIcon() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <LogoutButton>
          <StyledProfilePicture src={session.user.image}></StyledProfilePicture>
        </LogoutButton>
      </>
    );
  }
  return (
    <>
      <LoginButton>
        <StyledLoginIcon />
      </LoginButton>
    </>
  );
}

const StyledLoginIcon = styled(AiOutlineUser)`
  fill: #fff;
  width: 40px;
  height: 40px;
`;

const StyledProfilePicture = styled.img`
  width: 100%;
`;
