import ListContainer from "@/components/Card/ListContainer";
import CollectionCard from "@/components/Collection/CollectionCard";
import Collapsible from "../Collapsible";
import CollectionCardForm from "./CollectionCardForm";

export default function CollectionList({flashcards, collections}) {
    return (
        <ListContainer>
            {collections.map((collection) => {
                const count = flashcards.filter(flashcard => flashcard.collection === collection.name).length;
                const countCorrectAnswer = flashcards.filter(flashcard => flashcard.isCorrectlyAnswered).length;
                return (
                    <CollectionCard
                        key={collection.name}
                        collection={collection}
                        flashcardCount={count}
                        correctFlashcardCount={countCorrectAnswer}
                    />
                );
            })}
                  <Collapsible label="+ Add Collection">
                    {({ onClose }) => (
                      <CollectionCardForm collections={collections} onClose={onClose} />
                    )}
                  </Collapsible>
        </ListContainer>
    );
}