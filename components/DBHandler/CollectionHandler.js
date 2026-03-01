import {
  getAnsweredFlashcards,
  getFlashcardsFromCollection,
} from "@/components/DBHandler/FlashcardHandler";
import {dbDelete, dbInsert, dbUpdate} from "@/components/DBHandler/DBHandler";

export const API_COLLECTIONS = "/api/collections";

export async function addCollection(data, onClose) {
  await dbInsert("collection", data, API_COLLECTIONS, onClose);
}

export async function updateCollection(data, onClose, id) {
  await dbUpdate("collection", data, `${API_COLLECTIONS}/${id}`, onClose, `${API_COLLECTIONS}`);
}

export async function deleteCollection(id) {
  await dbDelete(`${API_COLLECTIONS}/${id}`, "collection", `${API_COLLECTIONS}`);
}

export function getCollectionStats(flashcards, collectionName) {
  const collectionFlashcards = getFlashcardsFromCollection(flashcards, collectionName);
  return {
    count: collectionFlashcards.length,
    countCorrectAnswer: getAnsweredFlashcards(collectionFlashcards).length,
  };
}

