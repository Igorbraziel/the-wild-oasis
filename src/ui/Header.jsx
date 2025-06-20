import styled from "styled-components"
import HeaderMenu from "./HeaderMenu"
import UserAvatar from "../features/authentication/UserAvatar"

const StyledHeader = styled.header`
  background-color: var(--color-grey-200);
  padding: 2rem 4rem;
  display: flex;
  gap: 2.4rem;
  justify-content: flex-end;
`

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  )
}



export default Header
