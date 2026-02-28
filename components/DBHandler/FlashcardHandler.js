import { dbDelete, dbInsert, dbUpdate } from "@/components/DBHandler/DBHandler";

export const API_FLASHCARDS = "/api/flashcards";

export async function addFlashcard(data, onClose){
  await dbInsert("flashcard", data, API_FLASHCARDS, onClose)
}

export async function updateFlashcard(data, onClose, id){
  await dbUpdate("flashcard", data, `${API_FLASHCARDS}/${id}`, onClose);
}

export async function deleteFlashcard(id){
  await dbDelete(`${API_FLASHCARDS}/${id}`, "flashcard");
}

export function getFlashcardsCorrectlyAnswered(flashcards, collections){
  return flashcards
    .filter(flashcard =>
      flashcard.isCorrectlyAnswered)
    .map(flashcard =>
      ({ ...flashcard,
        color: collections.find(c => c.name === flashcard.collection)?.color || "#CCC" }));
}

export function getFlashcardsByNameAndCorrectlyAnswered(flashcards, collections, name){
  return flashcards
    .filter(flashcard =>
      flashcard.collection === name &&
      flashcard.isCorrectlyAnswered !== "true")
    .map(flashcard => ({
      ...flashcard,
      color: collections.find(c => c.name === flashcard.collection)?.color || "#CCC"
    }));
}

export function getArchivedFlashcardsCorrectlyAnswered(
  flashcards, collections, archive){

  const archiveCollection = collections.find((c) => c.name === archive);

  return flashcards
    .filter((flashcard) => flashcard.collection === archive)
    .map((flashcard) => ({
      ...flashcard,
      color: archiveCollection?.color || "#CCC",
    }))
    .filter((flashcard) => flashcard.isCorrectlyAnswered);
}