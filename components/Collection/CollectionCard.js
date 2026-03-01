import HeaderContainer from "@/components/Container/HeaderContainer";
import CardContainer from "@/components/Container/CardContainer";
import BodyContainer from "@/components/Container/BodyContainer";
import styled from "styled-components";
import { useRouter } from "next/router";
import CardWrapper from "../Container/CardWrapper";
import * as GiIcons from "react-icons/gi";
import { useState } from "react";
import CollectionForm from "@/components/Collection/CollectionForm";

export default function CollectionCard({
  collection,
  flashcardCount,
  correctFlashcardCount,
  onDelete,
}) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const Icon = GiIcons[collection.icon];

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this collection?")) {
      onDelete();
    }
  }

  if (isEditing) {
    return (
      <CollectionForm
        onClose={() => setIsEditing(false)}
        initialData={{
          id: collection._id,
          name: collection.name,
          color: collection.color,
          icon: collection.icon,
        }}
      />
    );
  }

  return (
    <CardWrapper color={collection.color}>
      <CardContainer
        color={collection.color}
        onClick={() => router.push(`/collections/${collection.name}`)}
      >
        <HeaderContainer
          color={collection.color}
          headline=""
          onEdit={() => setIsEditing(true)}
          onDelete={handleDelete}
        />
        <BodyContainer>
          <Title>
            {Icon && <Icon />} {collection.name}
          </Title>
          <Info>{flashcardCount} cards</Info>
          <Info>{correctFlashcardCount} correctly answered</Info>
        </BodyContainer>
      </CardContainer>
    </CardWrapper>
  );
}

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ color }) => color};
`;

const Info = styled.div`
  font-size: 1rem;
  color: #666;
`;
