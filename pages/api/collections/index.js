import dbConnect from "../../../db/connect";
import * as Collection from "styled-components/test-utils";

export default async function handler(request, response) {
    await dbConnect();

    if (request.method === "GET") {
        try {
            const collections = await Collection.find();
            return response.status(200).json(collections);
        } catch(error){
            return response.status(500).json({ error: error.message });
        }
    } else {
        return response.status(405).json({ message: "Method not allowed" });
    }
}