import styled from "styled-components";
import EditIcon from "../Icons/EditIcon";
import DeleteIcon from "../Icons/DeleteIcon";

export default function FlashcardHeader({color, category, onEdit, onDelete}) {
    return (
        <Header color={color}>
            <Category>{category}</Category>
            <IconGroup>
                <EditIcon onEdit={onEdit}/>
                <DeleteIcon onDelete={onDelete}/>
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

const Category = styled.div`
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