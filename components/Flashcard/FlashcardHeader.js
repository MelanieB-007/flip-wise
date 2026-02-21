import styled from "styled-components";

export default function FlashcardHeader({color, category}){
    return (
        <Header color={color}>
            <Category>{category}</Category>
        </Header>
    );
}

const Header = styled.div`
  background-color: ${({ color }) => color};
  padding: 0.8rem 1.2rem;
`;

const Category = styled.div`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
`;
