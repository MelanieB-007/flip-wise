import styled, { keyframes } from 'styled-components';

export default function FlipWiseLogo({ flipKey, onClick }) {
    return (
        <LogoContainer onClick={onClick}>
            <PerspectiveWrapper>
                <FlipWord key={`flip-${flipKey}`} $flipDirection="up">Flip</FlipWord>
            </PerspectiveWrapper>
            <PerspectiveWrapper>
                <FlipWord key={`wise-${flipKey}`} $flipDirection="down">Wise</FlipWord>
            </PerspectiveWrapper>
        </LogoContainer>
    );
}

const flipUpAndBack = keyframes`
  0%   { transform: rotateX(0deg);    opacity: 1; }
  25%  { transform: rotateX(90deg);   opacity: 0; }
  50%  { transform: rotateX(180deg);  opacity: 1; }
  75%  { transform: rotateX(90deg);   opacity: 0; }
  100% { transform: rotateX(0deg);    opacity: 1; }
`;

const flipDownAndBack = keyframes`
  0%   { transform: rotateX(0deg);    opacity: 1; }
  25%  { transform: rotateX(-90deg);  opacity: 0; }
  50%  { transform: rotateX(-180deg); opacity: 1; }
  75%  { transform: rotateX(-90deg);  opacity: 0; }
  100% { transform: rotateX(0deg);    opacity: 1; }
`;

const PerspectiveWrapper = styled.span`
  display: inline-block;
  perspective: 400px;
`;

const FlipWord = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #00757F 0%, #3ECFB2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${({ $flipDirection }) =>
          $flipDirection === 'up' ? flipUpAndBack : flipDownAndBack
  } 1.2s ease-in-out both;
`;

const LogoContainer = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.05em;
  margin: 0;
  cursor: pointer;
  user-select: none;

  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  width: 100%;

  &:hover span span {
    filter: brightness(1.2);
  }
`;