import styled from "styled-components";

export default function EmptySubtextContainer({children}){
    return (
        <StyledEmptySubtext>
            {children}
        </StyledEmptySubtext>
    );
}

const StyledEmptySubtext = styled.p`
  font-family: "Caveat", cursive;
  font-size: 1.3rem;
  color: #888;
  margin: 0;
`;