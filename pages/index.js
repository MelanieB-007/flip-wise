import useSWR from "swr";
import Collapsible from "@/components/Collapsible";
import CollectionCardForm from "@/components/Collection/CollectionCardForm";

import CollectionList from "@/components/Collection/CollectionList";
import {
  addColorToFlashcards,
  getUnansweredFlashcards,
} from "@/components/Service/FlashcardService";

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

  return (
    <CollectionList
      flashcards={filteredFlashcards}
      collections={collections}
    >
      <Collapsible label="+ Add Collection">
        {({ onClose }) => (
          <CollectionCardForm
            collections={collections}
            onClose={onClose}
            mutate={mutateCollections}
          />
        )}
      </Collapsible>
    </CollectionList>
  );
}
