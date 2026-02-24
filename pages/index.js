import FlashcardList from "@/components/Flashcard/FlashcardList";
import useSWR from "swr";

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

  const flashcardsWithColor = flashcards.map((flashcard) => {
    const collection = collections.find((c) => c.name === flashcard.collection);
    return { ...flashcard, color: collection?.color || "#CCC" };
  });

  return (
    <FlashcardList flashcards={flashcardsWithColor} collections={collections} />
  );
}
