import styled from "styled-components";

export default function Sidebar() {
  return <StyledSidebar />;
}

const StyledSidebar = styled.aside`
  width: 100px;
  min-width: 100px;
  background: linear-gradient(160deg, #003d45 0%, #00575f 60%, #006b6b 100%);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.22);
  border: 1px solid rgba(62, 207, 178, 0.15);
  align-self: stretch;

  @media (max-width: 768px) {
    display: none;
  }
`;