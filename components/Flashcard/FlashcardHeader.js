import styled from "styled-components";

export default function FlashcardHeader({
  color,
  collection,
  onEdit,
  onDelete,
}) {
  return (
    <Header color={color}>
      <Collection>{collection}</Collection>
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

const Collection = styled.div`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1;
`;