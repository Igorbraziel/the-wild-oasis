import styled, { css } from "styled-components";
import { device } from "../styles/breakpoints";

const sizes = {
  small: css`
    font-size: 0.6rem;
    padding: 0.1rem 0.3rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;

    @media ${device.tablet} {
      font-size: 0.9rem;
      padding: 0.2rem 0.6rem;
    }

    @media ${device.laptop} {
      font-size: 1.2rem;
      padding: 0.4rem 0.8rem;
    }
  `,
  medium: css`
    font-size: 0.7rem;
    padding: 0.7rem 0.9rem;
    font-weight: 500;

    @media ${device.tablet} {
      font-size: 1rem;
      padding: 1rem 1.2rem;
    }

    @media ${device.laptop} {
      font-size: 1.4rem;
      padding: 1.2rem 1.6rem;
    }
  `,
  large: css`
    font-size: 0.9rem;
    padding: 0.8rem 1.3rem;
    font-weight: 500;

    @media ${device.tablet} {
      font-size: 1.1rem;
      padding: 1rem 1.8rem;
    }

    @media ${device.laptop} {
      font-size: 1.6rem;
      padding: 1.2rem 2.4rem;
    }
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]};
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
