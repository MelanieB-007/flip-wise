import styled from "styled-components";

export default function FlashcardForm() {
    return (
        <CardContainer>
            <CardHeader>
                <Headline>Add new card</Headline>
            </CardHeader>
            <CardBody>
                <form>
                    <FormGroup>
                        <Label htmlFor="question">Question:</Label>
                        <Input
                            type="text"
                            id="question"
                            name="question"
                            placeholder="question"
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
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="collection">Collection:</Label>
                        <SelectWrapper>
                            <Select id="collection" name="collection" required>
                                <option value="" disabled selected>Please select a collection</option>
                                <option value="Biology">Biology</option>
                                <option value="Technology">Technology</option>
                            </Select>
                        </SelectWrapper>
                    </FormGroup>

                    <Actions>
                        <ButtonSubmit type="submit">Add</ButtonSubmit>
                        <ButtonCancel type="button">Cancel</ButtonCancel>
                    </Actions>
                </form>
            </CardBody>
        </CardContainer>
    );
}

const CardContainer = styled.div`
  width: 420px;
  max-width: 420px;
  flex-shrink: 0;
  border: 3px solid #222;
  border-radius: 20px;
  overflow: hidden;
  font-family: "Caveat", cursive;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const CardHeader = styled.div`
  background-color: #2d8c6e;
  padding: 16px 24px;
`;

const Headline = styled.h2`
  font-family: 'Caveat', cursive;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
  color: #fff;
`;

const CardBody = styled.div`
  background: #fff;
  padding: 24px 24px 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-family: 'Caveat', cursive;
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
  font-family: 'Nunito', sans-serif;
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
  font-family: 'Nunito', sans-serif;
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
        content: 'V';
        font-family: 'Caveat', cursive;
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

const ButtonSubmit = styled.button`
    flex: 1;
    padding: 11px 20px;
    border: 2px solid #222;
    border-radius: 10px;
    font-family: 'Caveat', cursive;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.1s, box-shadow 0.1s;
    background: #6b8f6e;
    color: #fff;
    box-shadow: 3px 3px 0 #222;

    &:hover {
        background: #5a7a5d;
    }

    &:active {
        transform: translate(2px, 2px);
        box-shadow: none;
    }
`;

const ButtonCancel = styled.button`
    flex: 1;
    padding: 11px 20px;
    border: 2px solid #222;
    border-radius: 10px;
    font-family: 'Caveat', cursive;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.1s, box-shadow 0.1s;
    background: #fff;
    color: #222;
    box-shadow: 3px 3px 0 #222;

    &:hover {
        background: #f0ede8;
    }

    &:active {
        transform: translate(2px, 2px);
        box-shadow: none;
    }
`;