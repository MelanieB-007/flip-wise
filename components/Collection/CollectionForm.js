import styled from "styled-components";
import {StyledButton} from "@/components/Button";
import IconPicker from "@/components/Icons/IconPicker";
import {useState} from "react";
import HeaderContainer from "@/components/Container/HeaderContainer";
import BodyContainer from "@/components/Container/BodyContainer";
import FormContainer from "@/components/Container/FormContainer";
import {addCollection} from "@/components/DBHandler/CollectionHandler";

export default function CollectionForm({onClose}) {
    const [selectedIcon, setSelectedIcon] = useState("");
    const [selectedColor, setSelectedColor] = useState("#000000");

    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        await addCollection(data, onClose);
    }

    return (
        <FormContainer>
            <HeaderContainer
                color="#267dc0"
                headline="Add new collection"
            />
            <BodyContainer>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="name">Collection name:</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="name"
                            defaultValue={""}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="color">Color:</Label>
                        <ColorRow>
                            <ColorInput
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
                                placeholder="#000000"
                            />
                        </ColorRow>
                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="icon">Icon:</Label>
                        <IconPicker value={selectedIcon} onChange={setSelectedIcon}/>
                    </FormGroup>

                    <Actions>
                        <ButtonSubmit type="submit">
                            Add
                        </ButtonSubmit>
                        <ButtonCancel type="button">
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

const ColorRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ColorInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 2px;
  border: 2px solid #222;
  border-radius: 10px;
  cursor: pointer;
  background: none;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: 8px;
  }
`;