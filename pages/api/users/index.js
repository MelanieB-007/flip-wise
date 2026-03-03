import dbConnect from "../../../db/connect";
import Users from "@/db/models/users";
import { getToken } from "next-auth/jwt";

export default async function handler(request, response) {
  await dbConnect();
  const token = await getToken({ req: request });
  const userId = token?.sub;

  if (request.method === "GET") {
    return response.status(405).json({ message: "Method not allowed" });
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
