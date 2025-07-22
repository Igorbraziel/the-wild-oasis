import styled from "styled-components";
import { device } from "../styles/breakpoints";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.3rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  @media ${device.tablet} {
    padding: 0.4rem;
  }
  @media ${device.laptop} {
    padding: 0.6rem;
  }

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 1.8rem;
    height: 1.8rem;
    color: var(--color-brand-600);

    @media ${device.tablet} {
      width: 2rem;
      height: 2rem;
    }

    @media ${device.laptop} {
      width: 2.2rem;
      height: 2.2rem;
    }
  }
`;

export default ButtonIcon;
