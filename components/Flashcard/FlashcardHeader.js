import styled from "styled-components";
import EditIcon from "../Icons/EditIcon";

export default function FlashcardHeader({
  color,
  collection,
  onEdit,
}) {
  return (
    <Header color={color}>
      <Collection>{collection}</Collection>
      <IconGroup>
        <EditIcon onEdit={onEdit} />
      </IconGroup>
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

const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4rem;
`;
