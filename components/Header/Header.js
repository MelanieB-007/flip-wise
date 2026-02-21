import styled from "styled-components";
import FlipWiseLogo from "@/components/Header/FlipWiseLogo";
import { useEffect, useState } from "react";

export default function Header() {
    const [flipKey, setFlipKey] = useState(0);

    const triggerFlip = () => {
        setFlipKey(prev => prev + 1);
    };

    // Automatisch alle 4 Sekunden flippen, startet nach 1 Sekunde
    useEffect(() => {
        const initial = setTimeout(() => {
            triggerFlip();
            const interval = setInterval(() => triggerFlip(), 4000);
            return () => clearInterval(interval);
        }, 1000);
        return () => clearTimeout(initial);
    }, []);

    return (
        <StyledHeader>
            <FlipWiseLogo
                flipKey={flipKey}
                onClick={triggerFlip}
            />
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
  flex-shrink: 0;
  padding: 1rem 1.5rem 0.5rem;
  margin: 10px auto 5px auto;
  width: 100%;
  max-width: 1200px;
  height: auto;
  min-height: 120px;
  z-index: 2000;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  background-color: #00757F;
  backdrop-filter: blur(10px);
  border: 2pt solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  grid-template-rows: auto auto;
  gap: 0.75rem;
`;