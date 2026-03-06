import dbConnect from "@/db/connect";
import Darkmode from "@/db/models/darkmode";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  await dbConnect();
  const { id } = request.query;

  if (request.method === "PUT") {
    try {
      if (!session) {
        return response.status(401).json({ status: "Not authorized" });
      }
      const userToUpdate = await Darkmode.findByIdAndUpdate(id, request.body, {
        new: true,
      });

      if (!userToUpdate) {
        response.status(404).json({ status: "User not found" });
        return;
      }

      response.status(200).json(userToUpdate);
      return;
    } catch (error) {
      response.status(500).json({ status: "error setting darkmode" });
      return;
    }
  }
  response.setHeader("Allow", ["PUT"]);
  response.status(405).end(`Method ${request.method} not allowed`);
}
