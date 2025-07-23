import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../styles/breakpoints";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  @media ${device.tablet} {
    gap: 0.6rem;
  }

  @media ${device.laptop} {
    gap: 0.8rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;

    color: var(--color-grey-600);
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0.6rem 1.2rem;
    transition: all 0.3s;

    @media ${device.tablet} {
      gap: 0.9rem;
      font-size: 1.2rem;
      padding: 0.9rem 1.8rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }

    @media ${device.laptop} {
      gap: 1.2rem;
      font-size: 1.6rem;
      padding: 1.2rem 2.4rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;

    @media ${device.tablet} {
      width: 2rem;
      height: 2rem;
    }

    @media ${device.laptop} {
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <StyledNavLink to="/dashboard">
          <HiOutlineHome />
          <span>Home</span>
        </StyledNavLink>
        <StyledNavLink to="/bookings">
          <HiOutlineCalendarDays />
          <span>Bookings</span>
        </StyledNavLink>
        <StyledNavLink to="/cabins">
          <HiOutlineHomeModern />
          <span>Cabins</span>
        </StyledNavLink>
        <StyledNavLink to="/users">
          <HiOutlineUsers />
          <span>Users</span>
        </StyledNavLink>
        <StyledNavLink to="/settings">
          <HiOutlineCog6Tooth />
          <span>Settings</span>
        </StyledNavLink>
      </NavList>
    </nav>
  );
}

export default MainNav;
