import styled, { css } from "styled-components";
import { device } from "../styles/breakpoints";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 1.4rem 2.5rem;

      /* Box */
      background-color: var(--color-grey-100);
      border: 1px solid var(--color-grey-300);
      border-radius: var(--border-radius-md);

      @media ${device.tablet} {
        padding: 2rem 3rem;
      }

      @media ${device.laptop} {
        padding: 2.4rem 4rem;
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      max-width: 40rem;

      @media ${device.tablet} {
        max-width: 60rem;
      }

      @media ${device.laptop} {
        max-width: 80rem;
      }
    `}
    
  overflow: hidden;
  font-size: 1.2rem;

  @media ${device.tablet} {
    font-size: 1.3rem;
  }

  @media ${device.laptop} {
    font-size: 1.4rem;
  }
`;

export default Form;
