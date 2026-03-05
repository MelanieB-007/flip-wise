import useSWR from "swr";
import Collapsible from "@/components/Collapsible";
import CollectionCardForm from "@/components/Collection/CollectionCardForm";
import CollectionCard from "@/components/Collection/CollectionCard";
import {
  getCollectionStats,
  addCollection,
} from "@/components/Service/CollectionService";

import {
  getUnansweredFlashcards,
} from "@/components/Service/FlashcardService";
import ListContainer from "@/components/Container/ListContainer";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();
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

  const userCollections = session
    ? collections.filter((collection) => collection.owner === session.user.id)
    : collections.filter((collection) => collection.owner === "default");

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
        const cardsInCollection = flashcards.filter(
            (card) => card.collection === collection.name
      {userCollections.map((collection) => {
        const { count, countCorrectAnswer } = getCollectionStats(
          filteredFlashcards,
          collection.name
        );

        const totalCount = cardsInCollection.length;

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