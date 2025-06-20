import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidabar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 4rem 5rem;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidabar>
      <Logo />
      <MainNav />
    </StyledSidabar>
  );
}

export default Sidebar;
