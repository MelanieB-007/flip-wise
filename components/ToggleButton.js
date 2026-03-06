import styled from "styled-components";

export default function ToggleButton() {
  return (
    <>
      <StyledContainer>
        <p>Darkmode</p>
        <StyledButton />
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
    left: 3px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
`;
