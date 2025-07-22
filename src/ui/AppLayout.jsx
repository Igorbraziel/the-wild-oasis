import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { device } from "../styles/breakpoints";

const Main = styled.main`
  background-color: var(--color-grey-50);
  color: var(--color-grey-900);
  padding: 2rem 1rem;
  

  @media ${device.tablet} {
    padding: 4rem 2rem;
  }

  @media ${device.laptop} {
    padding: 6rem 4rem;
  }
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 13rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100dvh;

  @media ${device.tablet} {
    grid-template-columns: 19rem 1fr;
  }

  @media ${device.laptop} {
    grid-template-columns: 26rem 1fr;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  @media ${device.tablet} {
    max-width: 85rem;
    gap: 2rem;
  }

  @media ${device.laptop} {
    max-width: 120rem;
    gap: 3.2rem;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
