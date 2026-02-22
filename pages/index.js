import FlashcardList from "@/components/Flashcard/FlashcardList";
import useSWR from "swr";

export default function HomePage() {

    const { data, isLoading, error } = useSWR(`/api/flashcards`);

    if (error){
        return <div>Fehler beim Laden: {error.message} (Retry?)</div>;
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!data) {
        return;
    }

    return <FlashcardList flashcards={data || []}/>;
}