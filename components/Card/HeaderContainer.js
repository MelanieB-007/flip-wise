import styled from "styled-components";

export default function HeaderContainer({ color, headline }) {
  return (
    <Header color={color}>
      <Headline>{headline}</Headline>
    </Header>
  );
}

const Header = styled.div`
  background-color: ${({ color }) => color};
  padding: 0.8rem 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Headline = styled.div`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1;
`;
