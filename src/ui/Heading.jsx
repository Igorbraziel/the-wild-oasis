import styled, { css } from "styled-components";
import { device } from "../styles/breakpoints";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 1rem;
      font-weight: 600;

      @media ${device.tablet}{
        font-size: 2rem;
      }

      @media ${device.laptop}{
        font-size: 3rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 0.9rem;
      font-weight: 600;

      @media ${device.tablet}{
        font-size: 1.5rem;
      }

      @media ${device.laptop}{
        font-size: 2rem;
      }
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 0.7rem;
      font-weight: 500;

      @media ${device.tablet}{
        font-size: 1.2rem;
      }

      @media ${device.laptop}{
        font-size: 1.5rem;
      }
    `}
`;

export default Heading;
