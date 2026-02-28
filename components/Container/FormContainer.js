import styled from "styled-components";

export default function FormContainer({children}){
    return (
        <FormCardContainer>
            {children}
        </FormCardContainer>
    );
}

const FormCardContainer = styled.div`
  width: 100%;
  max-width: 420px;
  border: 3px solid #2d8c6e;
  border-radius: 20px;
  overflow: visible;
  font-family: "Caveat", cursive;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;