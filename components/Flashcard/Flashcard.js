import styled from "styled-components";
import FlashcardQuestion from "@/components/Flashcard/FlashcardQuestion";
import FlashcardAnswer from "@/components/Flashcard/FlashcardAnswer";
import FlashcardHeader from "@/components/Flashcard/FlashcardHeader";
import FlashcardForm from "@/components/Flashcard/FlashcardForm";
import { useState } from "react";

export default function Flashcard({
  collection,
  collections,
  color,
  question,
  answer,
}) {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <FlashcardForm
        onClose={() => setIsEditing(false)}
        initialData={{ collection, question, answer }}
        collections={collections}
      />
    );
  }

  return (
    <CardContainer color={color}>
      <FlashcardHeader
        color={color}
        collection={collection}
        onEdit={() => setIsEditing(true)}
        onDelete={() => {
          /* delete logic */
        }}
      />
      <FlashcardBody>
        <FlashcardQuestion question={question} />
        <FlashcardAnswer answer={answer} />
      </FlashcardBody>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  border: 3px solid ${({ color }) => color};
  border-radius: 20px;
  width: 100%;
  overflow: hidden;
  font-family: "Caveat", cursive;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const FlashcardBody = styled.div`
  background-color: white;
  padding: 1.5rem 1.8rem;
  flex: 1;
`;
