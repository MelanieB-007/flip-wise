import styled from "styled-components";

export default function BodyContainer({children, className, ...props}) {
    return (
        <StyledBodyContainer className={className} {...props}>
            {children}
        </StyledBodyContainer>
    );
}

const StyledBodyContainer = styled.div`
  padding: 1.5rem 1.8rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;