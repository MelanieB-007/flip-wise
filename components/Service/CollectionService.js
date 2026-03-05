import {
  getAnsweredFlashcards,
  getFlashcardsFromCollection,
} from "@/components/Service/FlashcardService";
import { mutate } from "swr";

export const API_COLLECTIONS = "/api/collections";

export function getCollectionStats(flashcards, collectionName) {
  const collectionFlashcards = getFlashcardsFromCollection(
    flashcards,
    collectionName
  );
  return {
    count: collectionFlashcards.length,
    countCorrectAnswer: getAnsweredFlashcards(collectionFlashcards).length,
  };
}

export async function addCollection(data) {
  try {
    const response = await fetch(API_COLLECTIONS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error(`Error creating collection:`, response.statusText);
      return;
    }

    await mutate(API_COLLECTIONS);
  } catch (error) {
    console.error(`Error creating:`, error);
  }
}

export async function deleteCollection(id) {
  try {
    const response = await fetch(`${API_COLLECTIONS}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error("Deleting collection failed:", response.statusText);
      return;
    }
    await mutate(API_COLLECTIONS);
  } catch (error) {
    console.error("Deleting failed", error);
  }
}
