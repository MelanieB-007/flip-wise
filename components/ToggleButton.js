import styled from "styled-components";
import { mutate } from "swr";
import { useSession } from "next-auth/react";
import useSWR from "swr";

export default function ToggleButton() {
  const { data: session } = useSession();

  const {
    data: unfilteredDarkmode,
    isLoading: loadingDarkmode,
    error: errorDarkmode,
  } = useSWR(`/api/darkmode`);

  if (errorDarkmode) {
    return <div>Fehler beim Laden: {errorDarkmode.message} (Retry?)</div>;
  }

  if (loadingDarkmode) {
    return <h1>Loading...</h1>;
  }

  const darkmode = unfilteredDarkmode.find(
    (user) => user._id === session.user.id
  ).darkmode;

  async function updateDarkmode(data, id) {
    try {
      const response = await fetch(`${"/api/darkmode"}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ darkmode: Boolean(data) }),
      });

      if (!response.ok) {
        console.error(`Error updating darkmode:`, response.statusText);
        return;
      }

      await mutate(`/api/darkmode`);
    } catch (error) {
      console.error(`Error updating:`, error);
    }
  }

  return (
    <>
      <StyledContainer>
        <p>Darkmode</p>
        <StyledButton
          onClick={() => updateDarkmode(!darkmode, session.user.id)}
          $darkmode={darkmode}
        />
      </StyledContainer>
    </>
  );
}

const StyledButton = styled.button`
  border-radius: 99px;
  border: 2px solid #222;
  background-color: #fff;
  cursor: pointer;
  width: 80px;
  height: 40px;
  position: relative;
  margin-left: 10px;
  &:before {
    background-color: #000;
    width: 30px;
    height: 30px;
    content: "";
    position: absolute;
    border-radius: 99px;
    bottom: 3px;
    left: ${({ $darkmode }) => ($darkmode ? "43px" : "3px")};
    transition: 0.2s ease;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;
