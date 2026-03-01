import dbConnect from "@/db/connect";
import Flashcard from "@/db/models/flashcard";
import Collection from "@/db/models/collection";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "DELETE") {
    try {
      const deleted = await Collection.findByIdAndDelete(id);

      if (!deleted) {
        return response.status(404).json({ status: "Collection not found" });
      }

      // delete all flashcards of the collection
      await Flashcard.deleteMany({ collection: deleted.name });

      return response.status(200).json("Collection deleted");
    } catch (error) {
      return response.status(500).json({ status: "error deleting collection" });
    }
  }

  response.setHeader("Allow", ["PUT", "DELETE"]);
  response.status(405).end(`Method ${request.method} not allowed`);
}