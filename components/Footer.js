import styled from "styled-components";

export default function Footer() {

    return (
        <StyledFooter>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    position: relative;
    flex-shrink: 0;
    padding: 1rem 0 2rem;
    width: 100%;
    max-width: 1200px;
    height: 70px;
    z-index: 1;
    margin: 0 auto;
    overflow: visible;
    text-align: center;
    background-image: linear-gradient(135deg, #ff8c00 0%, #ff6b35 50%, #68B300 100%);
    backdrop-filter: blur(10px);
    border: 2pt solid rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 2px;
        background: #56a500;
        box-shadow: 0 4px 16px rgba(104, 179, 0, 0.25);
      }

    a {
        color: #fff;
        text-decoration: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
        transition: all 0.3s ease;
        
        &hover {
        color: #ff8c00;
        text-shadow: 0 0 8px #ff8c00;
        }
    }
  
    p {
        margin: 0.5rem 0 0;
        font-size: 0.875rem;
        color: #ffffff;
        font-weight: 500;
        text-shadow: 1px 1px 0 #0e7a4a, 0 0 6px rgba(104, 179, 0, 0.7);
        position: relative;
        z-index: 2;
    }

  @media (max-width: 768px) {
    padding: 1rem;
    height: auto;
    margin: 5px auto;

    p {
      font-size: 0.8rem;
      text-shadow: 0.8px 0.8px 0 #0e7a4a;
    }
  }
`;