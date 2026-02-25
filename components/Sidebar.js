import styled from "styled-components";
import Link from "next/link";
import useSWR from "swr";
import {AiOutlineHome} from "react-icons/ai";
import * as GiIcons from "react-icons/gi";

export default function Sidebar() {
    const {
        data: collections = [],
    } = useSWR(`/api/collections`);

    return (
        <StyledSidebar>
            <ul>
                <li>
                    <Link href="/"><AiOutlineHome/> Home</Link>
                </li>
                {collections.map((collection) => {
                    const IconComponent = GiIcons[collection.icon];
                    return (
                        <li key={collection.name}>
                            <Link href={`/collections/${collection.name}`}>
                                {IconComponent && <IconComponent/>}
                                {collection.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </StyledSidebar>
    );
}

const StyledSidebar = styled.aside`
  width: 160px;
  min-width: 160px;
  background: linear-gradient(160deg, #003d45 0%, #00575f 60%, #006b6b 100%);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.22);
  border: 1px solid rgba(62, 207, 178, 0.15);
  align-self: stretch;
  padding: 24px 12px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li a {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #e0f7f4;
    text-decoration: none;
    font-size: 0.9rem;
    padding: 8px 12px;
    border-radius: 10px;
    transition: background 0.2s, color 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.12);
      color: #ffffff;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;