import HeaderContainer from "@/components/Card/HeaderContainer";
import CardContainer from "@/components/Card/CardContainer";
import BodyContainer from "@/components/Card/BodyContainer";
import styled from "styled-components";

export default function CollectionCard({collection, flashcardCount, correctFlashcardCount}) {
    return (
        <CardContainer
            color={collection.color}
        >
            <HeaderContainer
                color={collection.color}
                headline=""
            />
            <BodyContainer>
                <Title>{collection.name}</Title>
                <Info>{flashcardCount} cards</Info>
                <Info>{correctFlashcardCount} correctly answered</Info>
            </BodyContainer>
        </CardContainer>
    );
}

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({color}) => color};
`;

const Info = styled.div`
  font-size: 1rem;
  color: #666;
`;