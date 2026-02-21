import styled from "styled-components";

export default function FlashcardQuestion({question}) {
    return <StyledQuestion>{question}</StyledQuestion>;
}

const StyledQuestion = styled.p`
  font-size: 1.6rem;
  color: #222;
  margin: 0 0 2rem;
`;