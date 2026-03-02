import {mutate} from "swr";

export const API_FLASHCARDS = "/api/flashcards";

export async function addFlashcard(data, onClose) {
  try {
    const response = await fetch(API_FLASHCARDS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error(`Error creating flashcard:`, response.statusText);
      return;
    }

    await mutate(API_FLASHCARDS);
  } catch (error) {
    console.error(`Error creating:`, error);
  }

  onClose();
}

export async function updateFlashcard(data, onClose, id) {
  try {
    const response = await fetch(`${API_FLASHCARDS}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
    });

    if (!response.ok) {
      console.error(`Error updating flashcard:`, response.statusText);
      return;
    }

    await mutate(`${API_FLASHCARDS}/${id}`);
  } catch (error) {
    console.error(`Error updating:`, error);
  }

  if (onClose) onClose();
}

export async function deleteFlashcard(id) {
  try {
    const response = await fetch(`${API_FLASHCARDS}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error("Deleting flashcard failed:", response.statusText);
      return;
    }

    await mutate(`${API_FLASHCARDS}/${id}`);
  } catch (error) {
    console.error("Deleting failed:", error);
  }
}

export function getFlashcardsWithColorFromCollection(flashcards, collections, name) {
  return addColorToFlashcards(
    flashcards.filter((flashcard) => flashcard.collection === name),
    collections
  );
}

export function getFlashcardsFromCollection(flashcards, name) {
  return flashcards.filter((flashcard) => flashcard.collection === name);
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
