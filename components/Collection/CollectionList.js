import ListContainer from "@/components/Container/ListContainer";
import CollectionCard from "@/components/Collection/CollectionCard";
import { getCollectionStats } from "@/components/Service/CollectionService";
import { useSession } from "next-auth/react";

export default function CollectionList({ flashcards, collections }) {
  const { data: session } = useSession();
  const userCollections = session
    ? collections.filter((collection) => collection.owner === session.user.name)
    : collections.filter((collection) => collection.owner === "default");
  return (
    <ListContainer>
      {userCollections.map((collection) => {
        const { count, countCorrectAnswer } = getCollectionStats(
          flashcards,
          collection.name
        );

        return (
          <CollectionCard
            key={collection.name}
            collection={collection}
            flashcardCount={count}
            correctFlashcardCount={countCorrectAnswer}
          />
        );
      })}
    </ListContainer>
  );
}
