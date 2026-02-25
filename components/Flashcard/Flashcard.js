import styled from "styled-components";
import FlashcardQuestion from "@/components/Flashcard/FlashcardQuestion";
import FlashcardAnswer from "@/components/Flashcard/FlashcardAnswer";
import FlashcardHeader from "@/components/Flashcard/FlashcardHeader";
import { useState } from "react";
import { StyledButton } from "@/components/Button";

export default function Flashcard({ collection, color, question, answer }) {
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
  return (
    <CardWrapper color={color} $isFlipping={isFlipping}>
      <CardContainer onClick={flipFlashcard}>
        <FlashcardHeader
          color={color}
          collection={collection}
          onEdit={null}
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
        <ButtonCorrectlyAnswered>Mark as Correct</ButtonCorrectlyAnswered>
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
`;
