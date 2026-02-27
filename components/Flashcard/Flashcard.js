import styled from "styled-components";
import {useState} from "react";

import FlashcardQuestion from "@/components/Flashcard/FlashcardQuestion";
import FlashcardAnswer from "@/components/Flashcard/FlashcardAnswer";
import HeaderContainer from "@/components/Container/HeaderContainer";
import CardContainer from "@/components/Container/CardContainer";
import BodyContainer from "@/components/Container/BodyContainer";
import FlashcardForm from "@/components/Flashcard/FlashcardForm";

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
    <FlashcardContainer
      color={color}
      onClick={flipFlashcard}
      $isShowingAnswer={isShowingAnswer}
      $isFlipping={isFlipping}
    >
      <HeaderContainer
        color={color}
        headline={collection}
        onEdit={() => setIsEditing(true)}
        onDelete={handleDelete}
      />
      <BodyContainer>
        {isShowingAnswer ? (
          <FlashcardAnswer answer={answer} />
        ) : (
          <FlashcardQuestion question={question} />
        )}
      </BodyContainer>
    </FlashcardContainer>
  );
}

const FlashcardContainer = styled(CardContainer)`
  background-color: ${({$isShowingAnswer}) =>
          $isShowingAnswer ? ({color}) => color : "#fff"};
  transform: ${({$isFlipping}) =>
          $isFlipping ? "rotateY(90deg)" : "rotateY(0)"};
  transition: transform 0.2s ease-in-out;
`;