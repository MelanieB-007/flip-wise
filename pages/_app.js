import GlobalStyle from "../styles";
import styled from "styled-components";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
        <StyledMain>
            <Component {...pageProps} />
        </StyledMain>
        <Footer/>
    </>
  );
}

const StyledMain = styled.main`
  position: relative;
  flex: 1 1 auto;
  margin: 0 auto 10px;
  width: 100%;
  max-width: 1200px;
  padding: 3rem 2rem;
  min-height: calc(100vh - 120px);
  z-index: 1;
  overflow: visible;
  background-color: #DAE67F;
  backdrop-filter: blur(10px);
  border: 2pt solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  
  @media (max-width: 768px) {
      padding: 1.5rem 1rem;
      margin: 8px auto;
      min-height: auto;
      border-radius: var(--border-radius);
  }
`;
