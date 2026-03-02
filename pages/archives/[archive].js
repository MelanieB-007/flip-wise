import FlashcardList from "@/components/Flashcard/FlashcardList";
import useSWR from "swr";
import { useRouter } from "next/router";
import Headline from "@/components/Headline/Headline";
import {
  addColorToFlashcards,
  getAnsweredFlashcards
} from "@/components/Service/FlashcardService";

export default function CollectionArchive() {
  const router = useRouter();
  const { archive } = router.query;

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

  const filteredFlashcards = getAnsweredFlashcards(
      addColorToFlashcards(
          flashcards.filter((flashcard) => flashcard.collection === archive),
          collections)
  );

  return (
    <>
      <Headline headline={`${archive} Archive`}></Headline>

      <FlashcardList
        flashcards={filteredFlashcards}
        collections={collections}
        isArchive={true}
      />
    </>
  );
}
