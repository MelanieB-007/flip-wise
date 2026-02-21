import styled from "styled-components";
import FlashcardQuestion from "@/components/Flashcard/FlashcardQuestion";
import FlashcardAnswer from "@/components/Flashcard/FlashcardAnswer";
import FlashcardHeader from "@/components/Flashcard/FlashcardHeader";

export default function Flashcard({category, color, question, answer}) {
    return (
        <CardContainer color = {color}>
            <FlashcardHeader color = {color} category = {category} />
            <FlashcardBody>
                <FlashcardQuestion question = {question} />
                <FlashcardAnswer answer = {answer} />
            </FlashcardBody>
        </CardContainer>
    );
}

const CardContainer = styled.div`
  border: 3px solid ${({ color }) => color};
  border-radius: 20px;
  width: 420px;
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