import useSWR from "swr";

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
    addColorToFlashcards(flashcards, collections));

  return (
    <CollectionList
      flashcards={filteredFlashcards}
      collections={collections}
    />
  );
}