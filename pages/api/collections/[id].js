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
        response.status(404).json({ status: "Flashcard not found" });
        return;
      }
      await Flashcard.deleteMany({ collection: deleted.name });
      response.status(200).json("Collection deleted");
      return;
    } catch (error) {
      response.status(500).json({ status: "error deleting collection" });
      return;
    }
  }
  response.setHeader("Allow", ["DELETE"]);
  response.status(405).end(`Method ${request.method} not allowed`);
}
