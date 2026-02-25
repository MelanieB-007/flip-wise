import styled from "styled-components";
import FlashcardQuestion from "@/components/Flashcard/FlashcardQuestion";
import FlashcardAnswer from "@/components/Flashcard/FlashcardAnswer";
import FlashcardHeader from "@/components/Flashcard/FlashcardHeader";
import FlashcardForm from "@/components/Flashcard/FlashcardForm";
import { useState } from "react";

export default function Flashcard({
  id,
  collection,
  collections,
  color,
  question,
  answer,
  onDelete,
}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this flashcard?")) {
      onDelete();
    }
  }

    const [isShowingAnswer, setIsShowingAnswer] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);
    function flipFlashcard() {
        setIsFlipping(true);
        setTimeout(() => {
            setIsShowingAnswer(!isShowingAnswer);
        }, 100);
        setTimeout(() => {
            setIsFlipping(false);
        }, 200);
    }

  if (isEditing) {
    return (
      <FlashcardForm
        onClose={() => setIsEditing(false)}
        initialData={{ id, collection, question, answer }}
        collections={collections}
      />
    );
  }

  return (
    <CardContainer
      color={color}
      onClick={flipFlashcard}
      $isShowingAnswer={isShowingAnswer}
      $isFlipping={isFlipping}
    >
      <FlashcardHeader
        color={color}
        collection={collection}
        onEdit={() => setIsEditing(true)}
        onDelete={handleDelete}
      />
      <FlashcardBody>
        {isShowingAnswer ? (
          <FlashcardAnswer answer={answer} />
        ) : (
          <FlashcardQuestion question={question} />
        )}
      </FlashcardBody>
    </CardContainer>
  );
}

const CardContainer = styled.button`
  border: 3px solid ${({ color }) => color};
  border-radius: 20px;
  width: 100%;
  overflow: clip;
  font-family: "Caveat", cursive;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: ${({ $isShowingAnswer }) =>
    $isShowingAnswer ? ({ color }) => color : "#fff"};
  padding: 0;
  height: 300px;
  overflow-clip-margin: 1px;
  transform: ${({ $isFlipping }) =>
    $isFlipping ? "rotateY(90deg)" : "rotateY(0)"};
  transition: transform 0.2s ease-in-out;
`;

const FlashcardBody = styled.div`
  padding: 1.5rem 1.8rem;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
