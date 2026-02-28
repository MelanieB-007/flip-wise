import {useState} from "react";
import { BsMusicNote } from "react-icons/bs";
import { MdMovie, MdLanguage, MdSportsSoccer } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import styled from "styled-components";

const ICONS = [
    { name: "BsMusicNote", label: "Musik", Icon: BsMusicNote },
    { name: "MdMovie", label: "Film", Icon: MdMovie },
    { name: "FaReact", label: "React", Icon: FaReact },
    { name: "MdLanguage", label: "Sprachen", Icon: MdLanguage },
    { name: "MdSportsSoccer", label: "Sport", Icon: MdSportsSoccer },
];

export default function IconPicker({ value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const selected = ICONS.find((i) => i.name === value);

    return (
        <PickerContainer>
            <PickerButton type="button" onClick={() => setIsOpen(!isOpen)}>
                {selected ? (
                    <><selected.Icon /> {selected.label}</>
                ) : "Please select an icon"}
            </PickerButton>
            {isOpen && (
                <OptionList>
                    {ICONS.map(({ name, label, Icon }) => (
                        <OptionItem
                            key={name}
                            onClick={() => {
                                onChange(name);
                                setIsOpen(false);
                            }}
                        >
                            <Icon /> {label}
                        </OptionItem>
                    ))}
                </OptionList>
            )}
            <input type="hidden" name="icon" value={value || ""} />
        </PickerContainer>
    );
}

const PickerContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: visible;
`;

const PickerButton = styled.button`
  width: 100%;
  padding: 10px 14px;
  border: 2px solid #222;
  border-radius: 10px;
  font-family: "Nunito", sans-serif;
  font-size: 0.95rem;
  background: #fff;
  color: #222;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: left;
`;

const OptionList = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  border: 2px solid #222;
  border-radius: 10px;
  background: #fff;
  z-index: 1000;
  overflow: hidden;
  margin-bottom: 4px;
`;

const OptionItem = styled.div`
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-family: "Nunito", sans-serif;

  &:hover {
    background: #f0ede8;
  }
`;