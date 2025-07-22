import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { device } from "../styles/breakpoints";

const StyledHeader = styled.header`
  background-color: var(--color-grey-200);
  padding: 1rem 1.5rem;
  gap: 3rem;
  display: flex;
  justify-content: flex-end;

  @media ${device.tablet} {
    padding: 1.4rem 3rem;
    
  }

  @media ${device.laptop} {
    padding: 2rem 4rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
