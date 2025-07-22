import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { device } from "../styles/breakpoints";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  display: flex;
  padding: 0.2rem;
  gap: 0.2rem;

  @media ${device.tablet} {
    padding: 0.3rem;
    gap: 0.3rem;
  }

  @media ${device.laptop} {
    padding: 0.4rem;
    gap: 0.4rem;
  }
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 0.7rem;
  /* To give the same height as select */
  padding: 0.2rem 0.6rem;
  transition: all 0.3s;

  @media ${device.tablet} {
    font-size: 1.1rem;
    padding: 0.4rem 0.7rem;
  }

  @media ${device.laptop} {
    font-size: 1.4rem;
    padding: 0.44rem 0.8rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Filter({ filteredField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filteredField) || options.at(0).value;

  function handleClick(value) {
    if (searchParams.get("page")) searchParams.set("page", 1);
    searchParams.set(filteredField, value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options?.map((option, index) => (
        <FilterButton
          onClick={() => handleClick(option.value)}
          key={index}
          active={option.value === currentFilter ? "active" : ""}
          disabled={option.value === currentFilter ? "active" : ""}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
