import ListContainer from "@/components/Container/ListContainer";
import CollectionCard from "@/components/Collection/CollectionCard";
import { getCollectionStats } from "@/components/DBHandler/CollectionHandler";
import CollectionForm from "@/components/Collection/CollectionForm";
import Collapsible from "@/components/Collapsible";
import {useState} from "react";
import FlashcardForm from "@/components/Flashcard/FlashcardForm";
import EmptyContainer from "@/components/Container/EmptyContainer";
import EmptyMessageContainer from "@/components/Container/EmptyMessageContainer";
import EmptySubtextContainer from "@/components/Container/EmptySubtextContainer";
import SuccessMessageContainer from "@/components/Container/SuccessMessageContainer";

export default function CollectionList({ flashcards, collections, onDelete }) {
    const [showSuccess, setShowSuccess] = useState(false);

    async function handleDelete(id) {
        await onDelete(id);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    }

    if(collections.length === 0){
        return (
            <EmptyContainer>
                <EmptyMessageContainer>
                    No Collections yet!
                </EmptyMessageContainer>
                <EmptySubtextContainer>
                    Start learning by adding your first collection.
                </EmptySubtextContainer>

                <Collapsible label="+ Add Flashcard">
                    {({ onClose }) => (
                        <FlashcardForm collections={collections} onClose={onClose} />
                    )}
                </Collapsible>
            </EmptyContainer>
        );

    }
  return (
    <ListContainer>
        {showSuccess && (
            <SuccessMessageContainer>
                ✓ Collection successfully deleted!
            </SuccessMessageContainer>
        )}

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
            onDelete={() => handleDelete(collection._id)}
          />
        );
      })}
    </ListContainer>
  );
}
