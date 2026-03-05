import { mutate } from "swr";

export const API_COLLECTIONS = "/api/collections";


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
