import dbConnect from "../../../db/connect";
import Collection from "@/db/models/collection";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const collections = await Collection.find();
      return response.status(200).json(collections);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}