import ListContainer from "@/components/Container/ListContainer";
import CollectionCard from "@/components/Collection/CollectionCard";
import { getCollectionStats } from "@/components/Service/CollectionService";
import Collapsible from "../Collapsible";
import CollectionCardForm from "./CollectionCardForm";

export default function CollectionList({ flashcards, collections , mutateCollections}) {
  return (
    <ListContainer>
                  <Collapsible label="+ Add Collection">
                    {({ onClose }) => (
                      <CollectionCardForm collections={collections} onClose={onClose} mutate={mutateCollections} />
                    )}
                  </Collapsible>
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