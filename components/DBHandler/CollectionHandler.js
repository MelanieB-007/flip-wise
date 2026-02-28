import { dbRead } from "@/components/DBHandler/DBHandler";

export const API_COLLECTIONS = "api/collections";

export async function loadCollections(){
  return await dbRead(API_COLLECTIONS);
}