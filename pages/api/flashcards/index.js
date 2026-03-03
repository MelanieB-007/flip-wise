import dbConnect from "../../../db/connect";
import Flashcard from "@/db/models/flashcard";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const flashcards = await Flashcard.find().sort({ createdAt: -1 });
      response.status(200).json(flashcards);
      return;
    } catch (error) {
      response.status(500).json({ error: error.message });
      return;
    }
  }

  if (request.method === "POST") {
    try {
      const flashcardData = request.body;
      const flashcardToCreate = await Flashcard.create(flashcardData);

      if (!flashcardToCreate) {
        response.status(404).json({ status: "Flashcard not found" });
        return;
      }

      response.status(201).json({ status: "Flashcard created." });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

}
