import ListContainer from "@/components/Container/ListContainer";
import CollectionCard from "@/components/Collection/CollectionCard";
import { getCollectionStats } from "@/components/DBHandler/CollectionHandler";

export default function CollectionList({ flashcards, collections }) {
  return (
    <ListContainer>
      {collections.map((collection) => {
        const { count, countCorrectAnswer } = getCollectionStats(flashcards, collection.name);

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