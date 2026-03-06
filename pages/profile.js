import Headline from "@/components/Headline/Headline";
import { useSession } from "next-auth/react";
import styled from "styled-components";
import { signOut, signIn } from "next-auth/react";
import { StyledButton } from "@/components/Button";
import ToggleButton from "@/components/ToggleButton";

export default function ProfilePage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Headline headline="Profile"></Headline>
        <StyledSubheading>User information</StyledSubheading>
        <p>Username: {session.user.name}</p>
        <p>E-Mail address: {session.user.email}</p>
        <StyledSubheading>Settings</StyledSubheading>
        <StyledButton onClick={signOut}>Log out</StyledButton>
        <ToggleButton></ToggleButton>
      </>
    );
  }
  return (
    <>
      <Headline headline="Profile"></Headline>
      <StyledContainer>
        <p>You are currently logged out</p>
        <StyledButton onClick={() => signIn()}>Log in</StyledButton>
      </StyledContainer>
    </>
  );
}

const StyledSubheading = styled.h3`
  font-size: 30px;
  margin-bottom: 0;
`;

const StyledContainer = styled.div`
  text-align: center;
`;
