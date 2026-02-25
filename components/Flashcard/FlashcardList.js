import Flashcard from "@/components/Flashcard/Flashcard";
import Collapsible from "@/components/Collapsible";
import FlashcardForm from "@/components/Flashcard/FlashcardForm";
import ListContainer from "@/components/Card/ListContainer"

export default function FlashcardList({ flashcards, collections, onDelete }) {
  const [showSuccess, setShowSuccess] = useState(false);

  async function handleDelete(id) {
    await onDelete(id);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  }

  if (flashcards.length === 0) {
    return (
      <EmptyContainer>
        <EmptyMessage>No flashcards yet!</EmptyMessage>
        <EmptySubtext>Start learning by adding your first card.</EmptySubtext>
          <Collapsible label="+ Add Flashcard">
              {({ onClose }) => (
                  <FlashcardForm collections={collections} onClose={onClose} />
              )}
          </Collapsible>
      </EmptyContainer>
    );
  }

  return (
    <ListContainer>
        {showSuccess && (
            <SuccessMessage>✓ Flashcard successfully deleted!</SuccessMessage>
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
        />
      ))}
    </ListContainer>
  );
}

const SuccessMessage = styled.div`
  grid-column: 1 / -1;
  background-color: #2d8c6e;
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 12px;
  font-family: "Caveat", cursive;
  font-size: 1.3rem;
  text-align: center;
`;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 4rem 2rem;
  text-align: center;
`;

const EmptyMessage = styled.h2`
  font-family: "Caveat", cursive;
  font-size: 2rem;
  color: #2d8c6e;
  margin: 0;
`;

const EmptySubtext = styled.p`
  font-family: "Caveat", cursive;
  font-size: 1.3rem;
  color: #888;
  margin: 0;
`;
