import styled from "styled-components"
import { device } from "../styles/breakpoints";

const Input = styled.input`
  background-color: var(--color-grey-50);
  color: var(--color-grey-900);
  padding: 4px 8px;
  border: 1px solid var(--color-grey-400);
  border-radius: 8px;
  max-width: 15rem;
  font-size: 0.8rem;

  @media ${device.tablet} {
    max-width: 24rem;
    font-size: 1rem;
  }

  @media ${device.laptop} {
    max-width: 30rem;
    font-size: 1.4rem;
  }
`

export default Input;