import styled from "styled-components";
import { useState } from "react";

import FlashcardQuestion from "@/components/Flashcard/FlashcardQuestion";
import FlashcardAnswer from "@/components/Flashcard/FlashcardAnswer";
import HeaderContainer from "@/components/Card/HeaderContainer";
import CardContainer from "@/components/Card/CardContainer";
import BodyContainer from "@/components/Card/BodyContainer";
import FlashcardForm from "@/components/Flashcard/FlashcardForm";
import { StyledButton } from "@/components/Button";
import useSWR from "swr";

export default function Flashcard({
  id,
  collection,
  collections,
  color,
  question,
  answer,
  onDelete,
  isArchive,
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

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this flashcard?")) {
      onDelete();
    }
  }

  async function setIsAnswered(value) {
    const response = await fetch("/api/flashcards", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isCorrectlyAnswered: value,
        _id: id,
      }),
    });
    if (!response.ok) {
      console.error(response.status);
      return;
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
      <FlashcardContainer onClick={flipFlashcard}>
        <HeaderContainer
          color={color}
          headline={collection.headline}
          onEdit={() => setIsEditing(true)}
          onDelete={handleDelete}
        />
        <BodyContainer
          $isShowingAnswer={isShowingAnswer}
          $isArchive={isArchive}
          color={color}
        >
          {isShowingAnswer ? (
            <FlashcardAnswer answer={answer} />
          ) : (
            <FlashcardQuestion question={question} />
          )}
        </BodyContainer>
      </FlashcardContainer>
      {isArchive ? (
        <ButtonCorrectlyAnswered
          onClick={() => setIsAnswered(false)}
          $isShowingAnswer={isShowingAnswer}
        >
          Mark as Incorrect
        </ButtonCorrectlyAnswered>
      ) : isShowingAnswer ? (
        <ButtonCorrectlyAnswered
          onClick={() => setIsAnswered(true)}
          $isShowingAnswer={isShowingAnswer}
        >
          Mark as Correct
        </ButtonCorrectlyAnswered>
      ) : null}
    </CardWrapper>
  );
}

const FlashcardContainer = styled(CardContainer)`
  background-color: ${({ $isShowingAnswer }) =>
    $isShowingAnswer ? ({ color }) => color : "#fff"};
  transform: ${({ $isFlipping }) =>
    $isFlipping ? "rotateY(90deg)" : "rotateY(0)"};
  transition: transform 0.2s ease-in-out;
`;

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

const ButtonCorrectlyAnswered = styled(StyledButton)`
  background-color: ${({ $isShowingAnswer }) =>
    $isShowingAnswer ? "transparent" : "#ddd"};
  color: ${({ $isShowingAnswer }) => ($isShowingAnswer ? "#fff" : "#000")};
  border-color: #fff;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%);
  &:hover {
    color: ${({ $isShowingAnswer }) => ($isShowingAnswer ? "#ddd" : "#333")};
    border-color: ${({ $isShowingAnswer }) =>
      $isShowingAnswer ? "#ddd" : "#fff"};
  }
  &:active {
    transform: translate(-48%, 2px);
  }
`;
