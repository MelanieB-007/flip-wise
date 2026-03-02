import styled from "styled-components";
import useSWR from "swr";
import { StyledButton } from "/components/Button";
import { useState } from "react";

export default function CollectionCardForm({ onClose }) {
  const [selectedColor, setSelectedColor] = useState("#777");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onClose();
  }

  return (
    <CardContainer>
      <CardHeader>
        <Headline>{"Add new Collection"}</Headline>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Title:</Label>
            <Input
              type="text"
              id="title"
              name="title"
              placeholder="title"
              defaultValue={""}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="color">Color:</Label>
            <span>
              <Input
                type="color"
                id="color"
                name="color"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                required
              />
              <Input
                type="text"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                placeholder="#333"
              />
            </span>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="icon">Icon:</Label>
            <SelectWrapper>
              <Select
                id="collection"
                name="collection"
                defaultValue={""}
                required
              >
                <option value="" disabled>
                  Please select an icon
                </option>
               <option value="">💭</option>
               <option value="">🎶</option>
               <option value="">💡</option>
               <option value="">⚠️</option>
              </Select>
            </SelectWrapper>
          </FormGroup>

          <Actions>
            <ButtonSubmit type="submit">
              {"Add"}
            </ButtonSubmit>
            <ButtonCancel type="button" onClick={onClose}>
              Cancel
            </ButtonCancel>
          </Actions>
        </form>
      </CardBody>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 100%;
  max-width: 420px;
  border: 3px solid #2d8c6e;
  border-radius: 20px;
  overflow: hidden;
  font-family: "Caveat", cursive;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const CardHeader = styled.div`
  background-color: #2d8c6e;
  padding: 0.8rem 1.2rem;
`;

const Headline = styled.div`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1;
`;

const CardBody = styled.div`
  background-color: white;
  padding: 1.5rem 1.8rem;
`;

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
