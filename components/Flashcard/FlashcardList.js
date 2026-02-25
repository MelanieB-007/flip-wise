import Flashcard from "@/components/Flashcard/Flashcard";
import Collapsible from "@/components/Collapsible";
import FlashcardForm from "@/components/Flashcard/FlashcardForm";
import ListContainer from "@/components/Card/ListContainer"

export default function FlashcardList({ flashcards, collections }) {
  return (
    <ListContainer>
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
        />
      ))}
    </ListContainer>
  );
}