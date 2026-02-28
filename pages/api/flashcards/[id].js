import Flashcard from "@/db/models/flashcard";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "PUT") {
    try {
      const flashcardData = request.body;
      const flashcardToUpdate = await Flashcard.findByIdAndUpdate(
        id,
        flashcardData,
        { new: true }
      );

      if (!flashcardToUpdate) {
        return response.status(404).json({ status: "Flashcard not found" });
      }

      response.status(200).json(flashcardToUpdate);
    } catch (error) {
      response.status(500).json({ status: "error updating flashcard" });
    }
  }

  if (request.method === "DELETE") {
    try {
      const deleted = await Flashcard.findByIdAndDelete(id);

      if (!deleted) {
        return response.status(404).json({ status: "KaFlashcard not found" });
      }

      response.status(200).json("Flashcard deleted");
    } catch (error) {
      response.status(500).json({ status: "error deleting flashcard" });
    }
  }

  response.setHeader("Allow", ["PUT", "DELETE"]);
  return response.status(405).end(`Method ${request.method} not allowed`);

}