import styled, { keyframes, css } from 'styled-components';

export default function FlipWiseLogo({ $isFlipping, flipId, onClick }) {
    return (
        <LogoContainer $isFlipping={$isFlipping} flipId={flipId} onClick={onClick}>
            <FlipWord $flipDirection="up" $isFlipping={$isFlipping}>Flip</FlipWord>
            <FlipWord $flipDirection="down" $isFlipping={$isFlipping}>Wise</FlipWord>
        </LogoContainer>
    );
}

const flipUp = keyframes`
  0% {
    transform: translateY(0) rotateX(0deg);
  }
  50% {
    transform: translateY(-20px) rotateX(90deg);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0) rotateX(0deg);
  }
`;

const flipDown = keyframes`
  0% {
    transform: translateY(0) rotateX(0deg);
  }
  50% {
    transform: translateY(20px) rotateX(-90deg);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0) rotateX(0deg);
  }
`;

const flippingStyle = css`
  animation: ${({ $flipDirection }) =>
          $flipDirection === 'up' ? flipUp : flipDown
  } 2s ease-in-out;
`;

const FlipWord = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #00757F 0%, #3ECFB2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  ${({ $isFlipping }) => $isFlipping && flippingStyle}
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
`;
