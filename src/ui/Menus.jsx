import { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";
import useCloseOnOutsideClick from "../hooks/useCloseOnOutsideClick";
import { device } from "../styles/breakpoints";

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 1.2rem;
    height: 1.2rem;
    color: var(--color-grey-700);

    @media ${device.tablet} {
      width: 1.8rem;
      height: 1.8rem;
    }
    @media ${device.laptop} {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position?.x}px;
  top: ${(props) => props.position?.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.8rem 1rem;
  font-size: 0.8rem;
  gap: 0.9rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;

  @media ${device.tablet} {
    padding: 0.9rem 1.4rem;
    font-size: 1rem;
    gap: 1.2rem;
  }
  @media ${device.laptop} {
    padding: 1.2rem 2.4rem;
    font-size: 1.4rem;
    gap: 1.6rem;
  }

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 0.8rem;
    height: 0.8rem;
    color: var(--color-grey-400);
    transition: all 0.3s;

    @media ${device.tablet} {
      width: 1.2rem;
      height: 1.2rem;
    }
    @media ${device.laptop} {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState(null);
  const [position, setPosition] = useState({});

  const close = () => setOpenId(null);
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }) {
  return <StyledMenu>{children}</StyledMenu>;
}

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.x - rect.width,
      y: rect.y + rect.height + 8,
    });

    openId === null || openId !== id ? open(id) : close();
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

function List({ id, children }) {
  const { openId, setPosition, close, position } = useContext(MenusContext);
  const { ref } = useCloseOnOutsideClick(close, false);

  useEffect(
    function () {
      function handleScroll() {
        setPosition({});
        close();
      }

      document.addEventListener("scroll", handleScroll, true);

      return () => document.removeEventListener("scroll", handleScroll, true);
    },
    [setPosition, close]
  );

  if (openId !== id) return null;

  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body
  );
}

function Button({ children, icon, onClick, disabled }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <StyledButton onClick={handleClick} disabled={disabled}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
