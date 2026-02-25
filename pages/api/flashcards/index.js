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
      await Flashcard.create(flashcardData);
      response.status(201).json({ status: "Flashcard created." });
      return;
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
      return;
    }
  }

  if (request.method === "PUT") {
    try {
      const flashcardData = request.body;
      const flashcardToUpdate = await Flashcard.findByIdAndUpdate(
        flashcardData._id,
        flashcardData
      );
      response.status(200).json(flashcardToUpdate);
      console.log(request.body);
    } catch (error) {
      console.log(error);
      response.status(500).json({ status: "error updating flashcard" });
    }
  }
}
