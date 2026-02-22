import FlashcardList from "@/components/Flashcard/FlashcardList";
import useSWR from "swr";

export default function HomePage() {

    const { data: flashcards, isLoading: loadingFlashcards, error: errorFlashcards } = useSWR(`/api/flashcards`);
    const { data: collections, isLoading: loadingCollections, error: errorCollections } = useSWR(`/api/collections`);

    if (errorFlashcards){
        return <div>Fehler beim Laden: {errorFlashcards.message} (Retry?)</div>;
    }

    if (errorCollections){
        return <div>Fehler beim Laden: {errorCollections.message} (Retry?)</div>;
    }

    if (loadingFlashcards || loadingCollections) {
        return <h1>Loading...</h1>;
    }

    if (!flashcards || !collections) {
        return;
    }

    const flashcardsWithColor = flashcards.map(flashcard => {
        const collection = collections.find(c => c.name === flashcard.collection);
        return { ...flashcard, color: collection?.color || '#CCC' };
    });

    return (
    <FlashcardList
        flashcards = {flashcardsWithColor || []}
    />);
}