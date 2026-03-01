import { dbDelete, dbInsert, dbUpdate } from "@/components/DBHandler/DBHandler";

export const API_FLASHCARDS = "/api/flashcards";

export async function addFlashcard(data, onClose) {
  await dbInsert("flashcard", data, API_FLASHCARDS, onClose);
}

export async function updateFlashcard(data, onClose, id) {
  await dbUpdate("flashcard", data, `${API_FLASHCARDS}/${id}`, onClose, `${API_FLASHCARDS}`);
}

export async function deleteFlashcard(id) {
  await dbDelete(`${API_FLASHCARDS}/${id}`, "flashcard", `${API_FLASHCARDS}`);
}

export function getFlashcardsFromCollection(flashcards, collections, name) {
  return addColorToFlashcards(
    flashcards.filter((flashcard) => flashcard.collection === name),
    collections
  );
}

export function getUnansweredFlashcards(flashcards) {
  return flashcards.filter((flashcard) =>
    !flashcard.isCorrectlyAnswered);
}

export function getAnsweredFlashcards(flashcards) {
  return flashcards.filter((flashcard) =>
    flashcard.isCorrectlyAnswered);
}

export function addColorToFlashcards(flashcards, collections) {
  return flashcards.map((flashcard) => ({
    ...flashcard,
    color: collections.find((c) => c.name === flashcard.collection)?.color || "#CCC",
  }));
}
