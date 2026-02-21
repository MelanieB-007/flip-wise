import Flashcard from "@/components/Flashcard";
import styled from "styled-components";

export default function FlashcardList() {
    return (
        <FlashcardListContainer>
            <Flashcard
                category = "Biology"
                color = "#8B9467"
                question = "What is the powerhouse of the cell?"
                answer = "The mitochondrion."
            />
            <Flashcard
                category = "Geography"
                color = "#34A85A"
                question = "What is the capital of France?"
                answer = "Paris"
            />
            <Flashcard
                category = "Technology"
                color = "#456778"
                question = "What does HTML stand for?"
                answer = "HyperText Markup Language"
            />
        </FlashcardListContainer>
    );
}

const FlashcardListContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem;
  justify-content: flex-start; 
  align-content: flex-start;
`;