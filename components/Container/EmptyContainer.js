import styled from "styled-components";

export default function EmptyContainer({children}){
    return (
        <StyledEmptyContainer>
            {children}
        </StyledEmptyContainer>
    );
}

const StyledEmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 2rem;
  text-align: center;
`;