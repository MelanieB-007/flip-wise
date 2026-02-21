import styled from "styled-components";

export default function FlashcardAnswer ({answer}) {
    return (
        <AnswerSection>
            <AnswerLabel>Answer</AnswerLabel>
            <AnswerValue>{answer}</AnswerValue>
        </AnswerSection>
    );
}

const AnswerSection = styled.div``;

const AnswerLabel = styled.span`
  font-size: 1rem;
  color: #888;
  font-style: italic;
  display: block;
  margin-bottom: 0.3rem;
`;

const AnswerValue = styled.p`
  font-size: 1.6rem;
  color: #222;
  margin: 0;
`;