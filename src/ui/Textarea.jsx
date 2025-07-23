import styled from "styled-components";
import { device } from "../styles/breakpoints";

const Textarea = styled.textarea`
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;
  padding: 0.6rem 0.9rem;
  height: 5.5rem;
  font-size: 0.7rem;

  @media ${device.tablet} {
    padding: 0.7rem 1.1rem;
    height: 7rem;
    font-size: 1rem;
  }
  @media ${device.laptop} {
    padding: 0.8rem 1.2rem;
    height: 8rem;
    font-size: 1.3rem;
  }
`;

export default Textarea;
