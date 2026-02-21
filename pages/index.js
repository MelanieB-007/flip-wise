import Flashcard from "@/components/Flashcard";
import styled from "styled-components";

export default function HomePage() {
    return (
        <CardContainer>
            <Flashcard />
            <Flashcard />
            <Flashcard />
        </CardContainer>
    );
}

const CardContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem;
  justify-content: flex-start; 
  align-content: flex-start;
`;
