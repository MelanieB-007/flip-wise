import ListContainer from "@/components/Card/ListContainer";
import CollectionCard from "@/components/Collection/CollectionCard";

export default function CollectionList({flashcards, collections}) {
    return (
        <ListContainer>
            {collections.map((collection) => {
                const count = flashcards.filter(f => f.collection === collection.name).length;
                return (
                    <CollectionCard
                        key={collection.name}
                        collection={collection}
                        flashcardCount={count}
                        correctFlashcardCount={0}
                    />
                );
            })}
        </ListContainer>
    );
}