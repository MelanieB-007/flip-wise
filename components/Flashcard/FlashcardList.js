import Flashcard from "@/components/Flashcard/Flashcard";
import styled from "styled-components";
import FlashcardForm from "@/components/Flashcard/FlashcardForm";

export default function FlashcardList() {
    return (
        <>
            <FlashcardListContainer>
                <FlashcardForm />
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
        </>
    );
}
const FlashcardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;