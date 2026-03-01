import Flashcard from "@/components/Flashcard/Flashcard";
import Collapsible from "@/components/Collapsible";
import FlashcardForm from "@/components/Flashcard/FlashcardForm";
import ListContainer from "@/components/Container/ListContainer";
import {useState} from "react";
import EmptyContainer from "@/components/Container/EmptyContainer";
import EmptyMessageContainer from "@/components/Container/EmptyMessageContainer";
import EmptySubtextContainer from "@/components/Container/EmptySubtextContainer";
import SuccessMessageContainer from "@/components/Container/SuccessMessageContainer";

export default function FlashcardList({
  flashcards,
  collections,
  onDelete,
  isArchive,
  isEmpty,
}) {
  const [showSuccess, setShowSuccess] = useState(false);

  async function handleDelete(id) {
    await onDelete(id);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  }

  if (isEmpty) {
    return (
      <EmptyContainer>
        <EmptyMessageContainer>
            No flashcards yet!
        </EmptyMessageContainer>
        <EmptySubtextContainer>
            Start learning by adding your first card.
        </EmptySubtextContainer>

        <Collapsible label="+ Add Flashcard">
          {({ onClose }) => (
            <FlashcardForm collections={collections} onClose={onClose} />
          )}
        </Collapsible>
      </EmptyContainer>
    );
  }

  if (flashcards === 0) {
    return (
      <EmptyContainer>
        <EmptyMessageContainer>
          {isArchive
            ? "No flashcards have been correctly answered yet!"
            : "All flashcards have been correctly answered!"}
        </EmptyMessageContainer>
      </EmptyContainer>
    );
  }

  return (
    <ListContainer>
      {showSuccess && (
        <SuccessMessageContainer>
            ✓ Flashcard successfully deleted!
        </SuccessMessageContainer>
      )}

      <Collapsible label="+ Add Flashcard">
        {({ onClose }) => (
          <FlashcardForm collections={collections} onClose={onClose} />
        )}
      </Collapsible>

      {flashcards.map((flashcard) => (
        <Flashcard
          key={flashcard._id}
          id={flashcard._id}
          collection={flashcard.collection}
          collections={collections}
          color={flashcard.color}
          question={flashcard.question}
          answer={flashcard.answer}
          onDelete={() => handleDelete(flashcard._id)}
          isArchive={isArchive}
        />
      ))}
    </ListContainer>
  );
}