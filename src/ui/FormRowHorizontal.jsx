import styled from "styled-components";
import { device } from "../styles/breakpoints";

const StyledFormRowHorizontal = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--color-grey-200);
`;

const StyledLabel = styled.label`
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 1.5;

  @media ${device.tablet} {
    font-size: 1.3rem;
    line-height: 2;
  }

  @media ${device.laptop} {
    font-size: 1.5rem;
    line-height: 2.5;
  }
`;

const Error = styled.p`
  background-color: var(--color-red-100);
  color: var(--color-red-700);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  font-size: 0.7rem;

  @media ${device.tablet} {
    font-size: 1.3rem;
  }

  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`;

function FormRowHorizontal({ label, children, error }) {
  return (
    <StyledFormRowHorizontal>
      {label && <StyledLabel>{label}</StyledLabel>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRowHorizontal>
  );
}

export default FormRowHorizontal;
