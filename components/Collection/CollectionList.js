import ListContainer from "@/components/Container/ListContainer";
import CollectionCard from "@/components/Collection/CollectionCard";
import { getCollectionStats } from "@/components/Service/CollectionService";

export default function CollectionList({ flashcards, collections, children }) {
  return (
    <ListContainer>
      {children}
      {collections.map((collection) => {
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
