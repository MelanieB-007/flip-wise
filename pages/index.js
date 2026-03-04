import useSWR from "swr";
import Collapsible from "@/components/Collapsible";
import CollectionCardForm from "@/components/Collection/CollectionCardForm";
import CollectionCard from "@/components/Collection/CollectionCard";
import {
  getCollectionStats,
  addCollection,
} from "@/components/Service/CollectionService";

import {
  addColorToFlashcards,
  getUnansweredFlashcards,
} from "@/components/Service/FlashcardService";
import ListContainer from "@/components/Container/ListContainer";

export default function HomePage() {
  const {
    data: flashcards,
    isLoading: loadingFlashcards,
    error: errorFlashcards,
  } = useSWR(`/api/flashcards`);

  const {
    data: collections,
    isLoading: loadingCollections,
    error: errorCollections,
    mutate: mutateCollections,
  } = useSWR(`/api/collections`);

  const error = errorFlashcards || errorCollections;
  const isLoading = loadingFlashcards || loadingCollections;

  if (error) {
    return <div>Fehler beim Laden: {error.message} (Retry?)</div>;
  }

  if (isLoading || !flashcards || !collections) {
    return <h1>Loading...</h1>;
  }

  const filteredFlashcards = getUnansweredFlashcards(
    addColorToFlashcards(flashcards, collections)
  );

  async function handleAddCollection(event, onClose) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    await addCollection(data);
    onClose();
  }

  return (
    <ListContainer>
      <Collapsible label="+ Add Collection">
        {({ onClose }) => (
          <CollectionCardForm
            collections={collections}
            onClose={onClose}
            onSubmit={(event) => handleAddCollection(event, onClose)}
          />
        )}
      </Collapsible>
      {collections.map((collection) => {
        const { count, countCorrectAnswer } = getCollectionStats(
          filteredFlashcards,
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
