import styled, { css } from "styled-components";
import { device } from "../styles/breakpoints";

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      gap: 1rem;

      @media ${device.tablet} {
        gap: 1.3rem;
      }

      @media ${device.laptop} {
        gap: 1.6rem;
      }
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1rem;

      @media ${device.tablet} {
        gap: 1.3rem;
      }

      @media ${device.laptop} {
        gap: 1.6rem;
      }
    `}
`;

export default Row;
