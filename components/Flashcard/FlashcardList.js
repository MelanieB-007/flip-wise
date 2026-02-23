import Flashcard from "@/components/Flashcard/Flashcard";
import styled from "styled-components";
import FlashcardButton from "@/components/Flashcard/FlashcardButton";
import { useState } from "react";

export default function FlashcardList({ flashcards, collections, onDelete }) {
  const [showSuccess, setShowSuccess] = useState(false);

  async function handleDelete(id) {
    await onDelete(id);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  }

  return (
    <FlashcardListContainer>
      {showSuccess && (
        <SuccessMessage>✓ Flashcard successfully deleted!</SuccessMessage>
      )}
      <FlashcardButton collections={collections} />
      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard._id}
          id={flashcard._id}
          collection={flashcard.collection}
          collections={collections}
          color={flashcard.color}
          question={flashcard.question}
          answer={flashcard.answer}
          onDelete={() => handleDelete(flashcard._id)}
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

const SuccessMessage = styled.div`
  grid-column: 1 / -1;
  background-color: #2d8c6e;
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  font-family: "Caveat", cursive;
  font-size: 1.3rem;
  text-align: center;
`;
