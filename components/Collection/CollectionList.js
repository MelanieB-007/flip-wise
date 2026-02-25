import ListContainer from "@/components/Card/ListContainer";
import CollectionCard from "@/components/Collection/CollectionCard";

export default function CollectionList({ collections }) {
  return (
    <ListContainer>

      {collections.map((collection) => (
        <CollectionCard
         collection = {collection}
        />
      ))}
    </ListContainer>
  );
}