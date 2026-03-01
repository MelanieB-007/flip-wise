import styled from "styled-components";

export default function EmptyMessageContainer({children}){
    return (
        <StyledEmptyMessage>
            {children}
        </StyledEmptyMessage>
    );
}
const StyledEmptyMessage = styled.h2`
  font-family: "Caveat", cursive;
  font-size: 2rem;
  color: #2d8c6e;
  margin: 0;
`;