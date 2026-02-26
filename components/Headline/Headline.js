import styled from "styled-components";
import Link from "next/link";
import { AiOutlineContainer } from "react-icons/ai";

export default function Headline({ headline, link, tooltip }) {
  return (
    <HeadlineContainer>
      <StyledHeadline>{headline}</StyledHeadline>
      {link ? (
        <Link href={link} title={tooltip}>
          <StyledIcon />
        </Link>
      ) : null}
    </HeadlineContainer>
  );
}

const HeadlineContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const StyledHeadline = styled.h2`
  font-size: 5rem;
  margin-top: 0;
  font-family: "Caveat", cursive;
`;

const StyledIcon = styled(AiOutlineContainer)`
  width: 100px;
  height: 100px;
  background-color: #00757f;
  border-radius: 99px;
  padding: 20px;
  fill: #fff;
`;
