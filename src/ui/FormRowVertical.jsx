import styled from "styled-components";

const StyledFormRowVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 2rem;
`;

const StyledLabel = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 2rem;
`;

function FormRowVertical({ label, children }) {
  return (
    <StyledFormRowVertical>
      {label && <StyledLabel>{label}</StyledLabel>}

      {children}
    </StyledFormRowVertical>
  );
}

export default FormRowVertical;
