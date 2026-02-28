import { mutate } from "swr";
import { API_FLASHCARDS } from "@/components/DBHandler/FlashcardHandler";


export async function dbInsert(text, data, api, onClose){
  try {
    const response = await fetch(api, {
      method: "POST", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error(`Error creating `, text, `:`, response.statusText);
      return;
    }

    await mutate(API_FLASHCARDS);
  } catch (error) {
    console.error(`Error creating:`, error);
  }

  onClose();
}

export async function dbUpdate(text, data, api, onClose){
  try{
    const response = await fetch(api, {
      method: "PUT", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify({...data}),
    });

    if (!response.ok) {
      console.error(`Error updating:`, text, `:`, response.statusText);
      return;
    }

    await mutate(API_FLASHCARDS);
  } catch (error) {
    console.error(`Error updating: `, error);
  }

  onClose();
}

export async function dbDelete(api, text, onClose){
  try {
    const response = await fetch(api, {
      method: "DELETE"
    });

    if (!response.ok) {
      console.error("Deleting", text, " failed:", response.statusText);
      return;
    }

    await mutate(API_FLASHCARDS);
  } catch (error) {
    console.error("Deleting failed:", error);
  }

  onClose();
}