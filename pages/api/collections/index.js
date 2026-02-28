import dbConnect from "../../../db/connect";
import Collection from "@/db/models/collection";

export default async function handler(request, response) {
    await dbConnect();

    if (request.method === "GET") {
        try {
            const collections = await Collection.find().sort({createdAt: -1});
            response.status(200).json(collections);
            return;
        } catch (error) {
            response.status(500).json({error: error.message});
            return;
        }
    }

    if (request.method === "POST") {
        try {
            const collectionData = request.body;
            const collectionToCreate = await Collection.create(collectionData);

            if (!collectionToCreate) {
                response.status(404).json({status: "Collection not found"});
                return;
            }

            response.status(201).json({status: "Collection created."});
            return;
        } catch (error) {
            response.status(400).json({error: error.message});
            return;
        }
    }

    response.setHeader("Allow", ["GET", "POST"]);
    return response.status(405).end(`Method ${request.method} not allowed`);
}