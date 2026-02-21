import styled from "styled-components";

export default function Flashcard({category, color, question, answer}) {
    return (
        <CardContainer color={color}>
            <Header color={color}>
                <Category>{category}</Category>
            </Header>
            <Body>
                <Question>{question}</Question>
                <AnswerSection>
                    <AnswerLabel>Answer</AnswerLabel>
                    <Answer>{answer}</Answer>
                </AnswerSection>
            </Body>
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
`;

const Header = styled.div`
  background-color: ${({ color }) => color};
  padding: 0.8rem 1.2rem;
`;

const Category = styled.div`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
`;

const Body = styled.div`
  background-color: white;
  padding: 1.5rem 1.8rem;
`;

const Question = styled.p`
  font-size: 1.6rem;
  color: #222;
  margin: 0 0 2rem;
`;

const AnswerSection = styled.div``;

const AnswerLabel = styled.span`
  font-size: 1rem;
  color: #888;
  font-style: italic;
  display: block;
  margin-bottom: 0.3rem;
`;

const Answer = styled.p`
  font-size: 1.6rem;
  color: #222;
  margin: 0;
`;