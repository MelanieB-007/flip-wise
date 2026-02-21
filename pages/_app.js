import GlobalStyle from "../styles";
import styled from "styled-components";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar";

export default function App({ Component, pageProps }) {
  return (
      <>
          <GlobalStyle />
          <Header />
          <ContentWrapper>
              <Sidebar />
              <StyledMain>
                  <Component {...pageProps} />
              </StyledMain>
          </ContentWrapper>
          <Footer />
      </>
  );
}

const StyledMain = styled.main`
  position: relative;
  flex: 1;
  margin: 0;
  width: 100%;
  max-width: 1200px;
  padding: 3rem 2rem;
  z-index: 1;
  overflow: visible;
  background-color: #D4F5EE;
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

const ContentWrapper = styled.div`
    display: flex;
    align-items: stretch;
    gap: 10px;
    width: 100%;
    max-width: 1200px;
    margin: 10px auto 10px;
    min-height: calc(100vh - 120px);

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 8px;
        min-height: auto;
    }
`;