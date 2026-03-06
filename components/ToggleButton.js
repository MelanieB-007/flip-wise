import styled from "styled-components";
import { useState } from "react";

export default function ToggleButton() {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <>
      <StyledContainer>
        <p>Darkmode</p>
        <StyledButton
          onClick={() => setDarkmode(!darkmode)}
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
  width: 100px;
  height: 50px;
  position: relative;
  margin-left: 10px;
  &:before {
    background-color: #000;
    width: 40px;
    height: 40px;
    content: "";
    position: absolute;
    border-radius: 99px;
    bottom: 3px;
    left: ${({ $darkmode }) => ($darkmode ? "53px" : "3px")};
    transition: 0.2s ease;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
