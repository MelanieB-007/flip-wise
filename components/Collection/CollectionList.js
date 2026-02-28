import ListContainer from "@/components/Container/ListContainer";
import CollectionCard from "@/components/Collection/CollectionCard";
import { getCollectionStats } from "@/components/DBHandler/CollectionHandler";
import CollectionForm from "@/components/Collection/CollectionForm";

export default function CollectionList({ flashcards, collections }) {
  return (
    <ListContainer>
      {collections.map((collection) => {
        const { count, countCorrectAnswer } = getCollectionStats(flashcards, collection.name);

        return (
            <>
              <CollectionForm/>
          <CollectionCard
            key={collection.name}
            collection={collection}
            flashcardCount={count}
            correctFlashcardCount={countCorrectAnswer}
          />
            </>
        );
      })}
    </ListContainer>
  );
}