import styled from "styled-components";
import {StyledButton} from "/components/Button";
import {addFlashcard, updateFlashcard} from "@/components/DBHandler/FlashcardHandler";
import HeaderContainer from "@/components/Container/HeaderContainer";
import BodyContainer from "@/components/Container/BodyContainer";
import FormContainer from "@/components/Container/FormContainer";

export default function FlashcardForm({collections, onClose, initialData = null}) {
    const isEditMode = initialData !== null;

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        if (isEditMode) {
            await updateFlashcard(data, onClose, initialData.id);
        } else {
            await addFlashcard(data, onClose);
        }
    }

    return (
        <FormContainer>
            <HeaderContainer
                color="#267dc0"
                headline={isEditMode ? "Edit card" : "Add new card"}
            />
            <BodyContainer>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="question">Question:</Label>
                        <Input
                            type="text"
                            id="question"
                            name="question"
                            placeholder="question"
                            defaultValue={initialData?.question ?? ""}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="answer">Answer:</Label>
                        <Input
                            type="text"
                            id="answer"
                            name="answer"
                            placeholder="answer"
                            defaultValue={initialData?.answer ?? ""}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="collection">Collection:</Label>
                        <SelectWrapper>
                            <Select
                                id="collection"
                                name="collection"
                                defaultValue={initialData?.collection ?? ""}
                                required
                            >
                                <option value="" disabled>
                                    Please select a collection
                                </option>
                                {collections.map((collection) => (<option key={collection._id} value={collection.name}>
                                    {collection.name}
                                </option>))}
                            </Select>
                        </SelectWrapper>
                    </FormGroup>

                    <Actions>
                        <ButtonSubmit type="submit">
                            {isEditMode ? "Save" : "Add"}
                        </ButtonSubmit>
                        <ButtonCancel type="button" onClick={onClose}>
                            Cancel
                        </ButtonCancel>
                    </Actions>
                </form>
            </BodyContainer>
        </FormContainer>);
}

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-family: "Caveat", cursive;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 6px;
  color: #222;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 2px solid #222;
  border-radius: 10px;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  background: #fff;
  color: #222;
  outline: none;
  transition: box-shadow 0.15s;

  &:focus {
    box-shadow: 3px 3px 0 #b3a8e8;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px 14px;
  border: 2px solid #222;
  border-radius: 10px;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  background: #fff;
  color: #222;
  outline: none;
  transition: box-shadow 0.15s;
  appearance: none;
  -webkit-appearance: none;

  &:focus {
    box-shadow: 3px 3px 0 #b3a8e8;
  }
`;

const SelectWrapper = styled.div`
  position: relative;

  &::after {
    content: "V";
    font-family: "Caveat", cursive;
    font-size: 1.1rem;
    font-weight: 700;
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    color: #222;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  gap: 12px;
`;

const ButtonSubmit = styled(StyledButton)`
  background-color: #6b8f6e;
  color: #fff;

  &:hover {
    background: #5a7a5d;
  }
`;

const ButtonCancel = styled(StyledButton)`
  background: #fff;
  color: #222;

  &:hover {
    background: #f0ede8;
  }
`;
