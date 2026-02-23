import dbConnect from "../../../db/connect";
import Flashcard from "@/db/models/flashcard";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const flashcards = await Flashcard.find().sort({ createdAt: -1 });
      return response.status(200).json(flashcards);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }

  if (request.method === "POST") {
    try {
      const flashcardData = request.body;
      await Flashcard.create(flashcardData);
      return response.status(201).json({ status: "Flashcard created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
