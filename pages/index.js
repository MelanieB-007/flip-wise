import useSWR from "swr";
import Collapsible from "@/components/Collapsible";
import CollectionCardForm from "@/components/Collection/CollectionCardForm";
import CollectionCard from "@/components/Collection/CollectionCard";
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
  } = useSWR(`/api/collections`);

  const error = errorFlashcards || errorCollections;
  const isLoading = loadingFlashcards || loadingCollections;

  if (error) {
    return <div>Fehler beim Laden: {error.message} (Retry?)</div>;
  }

  if (isLoading || !flashcards || !collections) {
    return <h1>Loading...</h1>;
  }

  return (
    <ListContainer>
      <Collapsible label="+ Add Collection">
        {({ onClose }) => (
          <CollectionCardForm
            collections={collections}
            onClose={onClose}
          />
        )}
      </Collapsible>
      {collections.map((collection) => {
        // 1. Filtere alle Flashcards, die zu dieser Collection gehören
        const cardsInCollection = flashcards.filter(
            (card) => card.collection === collection.name
        );

        // 2. Berechne die Gesamtanzahl
        const totalCount = cardsInCollection.length;

        // 3. Berechne die Anzahl der richtig beantworteten Karten
        const correctlyAnsweredCount = cardsInCollection.filter(
            (card) => card.isCorrectlyAnswered === true
        ).length;

        return (
          <CollectionCard
            key={collection.name}
            collection={collection}
            flashcardCount={totalCount}
            correctFlashcardCount={correctlyAnsweredCount}
          />
        );
      })}
    </ListContainer>
  );
}
