import Flashcard from "@/components/Flashcard/Flashcard";
import Collapsible from "@/components/Collapsible";
import FlashcardForm from "@/components/Flashcard/FlashcardForm";
import ListContainer from "@/components/ListContainer"

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
          collection={flashcard.collection}
          color={flashcard.color}
          question={flashcard.question}
          answer={flashcard.answer}
        />
      ))}
    </ListContainer>
  );
}