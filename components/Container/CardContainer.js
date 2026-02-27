import styled from "styled-components";

export default function CardContainer({ children, className, ...props }){
    return (
        <StyledCardContainer className={className} {...props}>
            { children }
        </StyledCardContainer>
    );
}

const StyledCardContainer = styled.button`
  border: 3px solid ${({color}) => color};
  border-radius: 20px;
  width: 100%;
  overflow: clip;
  font-family: "Caveat", cursive;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: #fff;
  padding: 0;
  height: 300px;
  overflow-clip-margin: 1px;

  transition: transform 0.2s ease-in-out;
`;