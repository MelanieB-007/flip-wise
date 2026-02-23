import Flashcard from "@/components/Flashcard/Flashcard";
import styled from "styled-components";

export default function FlashcardList({ flashcards }) {
  return (
    <FlashcardListContainer>
      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard._id}
          category={flashcard.collection}
          color={flashcard.color}
          question={flashcard.question}
          answer={flashcard.answer}
        />
      ))}
    </FlashcardListContainer>
  );
}

const FlashcardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem;
  justify-content: flex-start;
  align-content: flex-start;
`;