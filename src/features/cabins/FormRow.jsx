import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 14rem 1fr 1.2fr;
  gap: 1.2rem;

  padding: 0.8rem 0;

  @media ${device.tablet} {
    grid-template-columns: 18rem 1fr 1.2fr;
    gap: 1.6rem;

    padding: 0.9rem 0;
  }

  @media ${device.laptop} {
    grid-template-columns: 24rem 1fr 1.2fr;
    gap: 2.4rem;

    padding: 1.2rem 0;
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 0.8rem;

    @media ${device.tablet} {
      gap: 1rem;
    }

    @media ${device.laptop} {
      gap: 1.2rem;
    }
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1rem;
  color: var(--color-red-700);

  @media ${device.tablet} {
    font-size: 1.2rem;
  }

  @media ${device.laptop} {
    font-size: 1.4rem;
  }
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      <Label htmlFor={children.props?.id}>{label}</Label>
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
