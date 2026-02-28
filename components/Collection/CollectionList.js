import ListContainer from "@/components/Container/ListContainer";
import CollectionCard from "@/components/Collection/CollectionCard";
import { getCollectionStats } from "@/components/DBHandler/CollectionHandler";
import CollectionForm from "@/components/Collection/CollectionForm";
import Collapsible from "@/components/Collapsible";

export default function CollectionList({ flashcards, collections }) {
  return (
    <ListContainer>
      <Collapsible label="+ Add collection">
        {({ onClose }) => <CollectionForm onClose={onClose} />}
      </Collapsible>
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
