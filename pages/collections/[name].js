import FlashcardList from "@/components/Flashcard/FlashcardList";
import useSWR from "swr";
import { useRouter } from "next/router";
import Headline from "@/components/Headline/Headline";
import styled from "styled-components";
import Link from "next/link";
import { AiOutlineContainer } from "react-icons/ai";

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

    const flashcardsFromCollection = flashcards
        .filter((collectionFlashcards) => collectionFlashcards.collection === name)
        .map((flashcard) => {
            const collection = collections.find(
                (c) => c.name === flashcard.collection
            );
            return { ...flashcard, color: collection?.color || "#CCC" };
        });

  const filteredFlashcards = flashcardsFromCollection.filter((flashcard) => {
    return flashcard.isCorrectlyAnswered !== "true";
  });

  const isEmpty = flashcardsFromCollection.length === 0 ? true : false;

  return (
    <>
      <Headline headline={name}></Headline>

      <FlashcardList
        flashcards={filteredFlashcards}
        collections={collections}
        isEmpty={isEmpty}
      />
      <StyledLink href={`/archives/${name}`} title={`to the ${name} archive`}>
        <StyledIcon />
        <p>To the archive</p>
      </StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 20px;
`;

const StyledIcon = styled(AiOutlineContainer)`
  width: 100px;
  height: 100px;
  background-color: #00757f;
  border-radius: 99px;
  padding: 20px;
  fill: #fff;
  &:hover {
    background-color: #009ba8;
  }
`;
