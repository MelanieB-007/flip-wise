import {
  getAnsweredFlashcards,
  getFlashcardsFromCollection,
} from "@/components/DBHandler/FlashcardHandler";

export const API_COLLECTIONS = "api/collections";

export function getCollectionStats(flashcards, collectionName) {
  const collectionFlashcards = getFlashcardsFromCollection(flashcards, collectionName);
  return {
    count: collectionFlashcards.length,
    countCorrectAnswer: getAnsweredFlashcards(collectionFlashcards).length,
  };
}

