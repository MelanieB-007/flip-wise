import styled from "styled-components";

export default function SuccessMessageContainer({children}){
    return (
        <StyledSuccessMessage>
            {children}
        </StyledSuccessMessage>
    );
}

const StyledSuccessMessage = styled.div`
  grid-column: 1 / -1;
  background-color: #2d8c6e;
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  font-family: "Caveat", cursive;
  font-size: 1.3rem;
  text-align: center;
`;