import Flashcard from "@/components/Flashcard/Flashcard";
import styled from "styled-components";
import FlashcardButton from "@/components/Flashcard/FlashcardButton";

export default function FlashcardList({ flashcards, collections }) {
  return (
    <FlashcardListContainer>
      <FlashcardButton collections={collections} />
      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard._id}
          collection={flashcard.collection}
          collections={collections}
          color={flashcard.color}
          question={flashcard.question}
          answer={flashcard.answer}
        />
      ))}
    </FlashcardListContainer>
  );
}

const FlashcardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  justify-content: flex-start;
  align-content: flex-start;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;
