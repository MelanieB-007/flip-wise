import { useState } from "react";
import styled from "styled-components";
import FlashcardForm from "@/components/Flashcard/FlashcardForm";

export default function FlashcardButton() {
    const [showForm, setShowForm] = useState(false);

    if (showForm) {
        return <FlashcardForm onClose={() => setShowForm(false)} />;
    }

    return (
        <ToggleButton onClick={() => setShowForm(true)}>
            + Add Flashcard
        </ToggleButton>
    );
}

const ToggleButton = styled.button`
  width: 420px;
  height: 100%;
  min-height: 200px;
  border: 3px dashed #2d8c6e;
  border-radius: 20px;
  font-family: 'Caveat', cursive;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  background: #2d8c6e22;
  color: #2d8c6e;
  transition: background 0.2s, transform 0.1s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #2d8c6e44;
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`;