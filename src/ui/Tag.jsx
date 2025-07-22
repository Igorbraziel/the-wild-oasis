import styled from "styled-components";
import { device } from "../styles/breakpoints";

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.6rem;
  padding: 0.4rem 0.5rem;
  border-radius: 50px;

  @media ${device.tablet} {
    font-size: 0.8rem;
    padding: 0.3rem 0.9rem;
    border-radius: 70px;
  }

  @media ${device.laptop} {
    font-size: 1.1rem;
    padding: 0.4rem 1.2rem;
    border-radius: 100px;
  }

  /* Make these dynamic, based on the received prop */
  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);
`;

export default Tag;
