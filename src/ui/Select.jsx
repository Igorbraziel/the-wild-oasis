import styled from "styled-components";
import { device } from "../styles/breakpoints";

const StyledSelect = styled.select`
  font-size: 0.7rem;
  padding: 0.3rem 0.6rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);

  @media ${device.tablet} {
    font-size: 1rem;
    padding: 0.6rem 0.8rem;
  }
  @media ${device.laptop} {
    font-size: 1.4rem;
    padding: 0.8rem 1.2rem;
  }
`;

function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
