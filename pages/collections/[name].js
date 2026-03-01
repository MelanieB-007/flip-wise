import FlashcardList from "@/components/Flashcard/FlashcardList";
import useSWR from "swr";
import { useRouter } from "next/router";
import Headline from "@/components/Headline/Headline";
import styled from "styled-components";
import Link from "next/link";
import { AiOutlineContainer } from "react-icons/ai";

import {
  deleteFlashcard,
  getFlashcardsFromCollection,
  getUnansweredFlashcards,
} from "@/components/DBHandler/FlashcardHandler";

export default function CollectionPage() {
  const router = useRouter();
  const { name } = router.query;

  const {
    data: flashcards,
    isLoading: loadingFlashcards,
    error: errorFlashcards,
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

  const flashcardsFromCollection = getFlashcardsFromCollection(flashcards, collections, name);
  const filteredFlashcards = getUnansweredFlashcards(flashcardsFromCollection);
  const isEmpty = flashcardsFromCollection.length === 0;

  return (
    <>
      <Headline headline={name}></Headline>

      <FlashcardList
        flashcards={filteredFlashcards}
        collections={collections}
        onDelete={deleteFlashcard}
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
