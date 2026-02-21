import styled from "styled-components";

export default function Sidebar() {
    return <StyledSidebar />;
}

const StyledSidebar = styled.aside`
  width: 100px;
  min-width: 100px;
  min-height: 500px;
  background: linear-gradient(160deg, #003D45 0%, #00575F 60%, #006B6B 100%);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.22);
  border: 1px solid rgba(62, 207, 178, 0.15);

  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
    min-height: unset;
    height: 50px;
    border-radius: 16px;
  }
`;