import dbConnect from "../../../db/connect";
import Darkmode from "@/db/models/darkmode";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const darkmode = await Darkmode.find();
      return response.status(200).json(darkmode);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
