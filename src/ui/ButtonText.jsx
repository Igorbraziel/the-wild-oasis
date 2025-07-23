import styled from "styled-components";
import { device } from "../styles/breakpoints";

const ButtonText = styled.button`
  color: var(--color-brand-600);
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 1.2rem;

  @media ${device.tablet} {
    font-size: 1.4rem;
  }

  @media ${device.laptop} {
    font-size: 1.6rem;
  }

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`;

export default ButtonText;
