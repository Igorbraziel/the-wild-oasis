import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { device } from "../styles/breakpoints";

const StyledSidabar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 1.5rem 1rem;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media ${device.tablet}{
    padding: 2.5rem 3rem;
    gap: 2rem;
  }

  @media ${device.laptop}{
    padding: 4rem 5rem;
    gap: 3.2rem;
  }
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
