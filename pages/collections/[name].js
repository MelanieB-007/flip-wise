import FlashcardList from "@/components/Flashcard/FlashcardList";
import useSWR from "swr";
import {useRouter} from "next/router";

export default function CollectionPae() {
    const router = useRouter();
    const {name} = router.query;

    const {
        data: flashcards,
        isLoading: loadingFlashcards,
        error: errorFlashcards,
        mutate: mutateFlashcards,
    } = useSWR(`/api/flashcards`);

    const {
        data: collections,
        isLoading: loadingCollections,
        error: errorCollections,
    } = useSWR(`/api/collections`);

    const error = errorFlashcards || errorCollections;
    const isLoading = loadingFlashcards || loadingCollections;

    if (error) {
        return <div>Fehler beim Laden: {error.message} (Retry?)</div>;
    }

    if (isLoading || !flashcards || !collections) {
        return <h1>Loading...</h1>;
    }

    async function handleDelete(id) {
        try {
            const response = await fetch("/api/flashcards", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ _id: id }),
            });

            if (!response.ok) {
                console.error("Deleting flashcard failed:", response.statusText);
                return;
            }

            mutateFlashcards();
        } catch (error) {
            console.error("Deleting failed:", error);
        }
    }

    const filteredFlashcards = flashcards
        .filter(collectionFlashcards => collectionFlashcards.collection === name)
        .map((flashcard) => {
            const collection = collections.find((c) => c.name === flashcard.collection);
            return {...flashcard, color: collection?.color || "#CCC"};
        });

    return (
        <FlashcardList flashcards={filteredFlashcards} collections={collections} onDelete={handleDelete}/>
    );
}