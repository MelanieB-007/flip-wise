import styled from "styled-components";
import FlipWiseLogo from "@/components/Header/FlipWiseLogo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoginIcon from "../Login/LoginIcon";
import Sidebar from "../Sidebar";

export default function Header() {
  const [flipKey, setFlipKey] = useState(0);
  const router = useRouter();

  const triggerFlip = () => {
    setFlipKey((prev) => prev + 1);
  };

  useEffect(() => {
    const initial = setTimeout(() => {
      triggerFlip();
      const interval = setInterval(() => triggerFlip(), 4000);
      return () => clearInterval(interval);
    }, 1000);
    return () => clearTimeout(initial);
  }, []);

  function goToHomepage() {
    router.push("/");
  }

  return (
    <StyledHeader>
      <FlipWiseLogo flipKey={flipKey} onClick={goToHomepage} />
      <LoginIcon />
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
  background-color: #00757f;
  backdrop-filter: blur(10px);
  border: 2pt solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  grid-template-rows: auto auto;
  gap: 0.75rem;
  align-items: center;
`;
