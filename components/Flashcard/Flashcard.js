import styled from "styled-components";
import FlashcardQuestion from "@/components/Flashcard/FlashcardQuestion";
import FlashcardAnswer from "@/components/Flashcard/FlashcardAnswer";
import FlashcardHeader from "@/components/Flashcard/FlashcardHeader";
import FlashcardForm from "@/components/Flashcard/FlashcardForm";
import { useState } from "react";
import { StyledButton } from "@/components/Button";
import useSWR from "swr";

export default function Flashcard({
  id,
  collection,
  collections,
  color,
  question,
  answer,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const { mutate } = useSWR("/api/flashcards");

  function flipFlashcard() {
    setIsFlipping(true);
    setTimeout(() => {
      setIsShowingAnswer(!isShowingAnswer);
    }, 100);
    setTimeout(() => {
      setIsFlipping(false);
    }, 200);
  }

  async function setIsAnswered() {
    const response = await fetch("/api/flashcards", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCorrectlyAnswered: "true", _id: id }),
    });
    if (!response.ok) {
      console.error(response.status);
      return;
    }
    if (response.ok) {
      console.log("test");
    }
    mutate();
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
    <CardWrapper color={color} $isFlipping={isFlipping}>
      <CardContainer onClick={flipFlashcard}>
        <FlashcardHeader
          color={color}
          collection={collection}
          onEdit={() => setIsEditing(true)}
          onDelete={null}
        />
        <FlashcardBody $isShowingAnswer={isShowingAnswer} color={color}>
          {isShowingAnswer ? (
            <FlashcardAnswer answer={answer} />
          ) : (
            <FlashcardQuestion question={question} />
          )}
        </FlashcardBody>
      </CardContainer>
      {isShowingAnswer ? (
        <ButtonCorrectlyAnswered onClick={setIsAnswered}>
          Mark as Correct
        </ButtonCorrectlyAnswered>
      ) : null}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  border: 3px solid ${({ color }) => color};
  border-radius: 20px;
  overflow: clip;
  font-family: "Caveat", cursive;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0;
  height: 300px;
  overflow-clip-margin: 1px;
  transform: ${({ $isFlipping }) =>
    $isFlipping ? "rotateY(90deg)" : "rotateY(0)"};
  transition: transform 0.2s ease-in-out;
`;

const CardContainer = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: transparent;
`;

const FlashcardBody = styled.div`
  padding: 1.5rem 1.8rem;
  flex: 1;
  background-color: ${({ $isShowingAnswer }) =>
    $isShowingAnswer ? ({ color }) => color : "#fff"};
  display: ${({ $isShowingAnswer }) => ($isShowingAnswer ? "block" : "flex")};
  justify-content: center;
  align-items: center;
`;

const ButtonCorrectlyAnswered = styled(StyledButton)`
  background-color: transparent;
  color: #fff;
  border-color: #fff;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%);
  &:hover {
    color: #ddd;
    border-color: #ddd;
  }
  &:active {
    transform: translate(-48%, 2px);
  }
`;
