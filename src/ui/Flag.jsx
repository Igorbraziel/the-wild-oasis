import styled from "styled-components";
import { device } from "../styles/breakpoints";

export const Flag = styled.img`
  max-width: 1.2rem;
  border-radius: var(--border-radius-tiny);
  display: block;
  border: 1px solid var(--color-grey-100);

  @media ${device.tablet} {
    max-width: 1.6rem;
  }

  @media ${device.laptop} {
    max-width: 2rem;
  }
`;
