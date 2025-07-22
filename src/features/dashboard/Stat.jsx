import styled from "styled-components";
import { device } from "../../styles/breakpoints";

const StyledStat = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1.3rem 1fr;
  padding: 0.5rem;
  column-gap: 0.6rem;
  row-gap: 0.4rem;

  @media ${device.tablet} {
    grid-template-columns: 3.4rem 1fr;
    padding: 0.8rem;
    column-gap: 1rem;
    row-gap: 0.3rem;
  }

  @media ${device.laptop} {
    grid-template-columns: 6.4rem 1fr;
    padding: 1.6rem;
    column-gap: 1.6rem;
    row-gap: 0.4rem;
  }
`;

const Icon = styled.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: var(--color-${(props) => props.color}-100);

  & svg {
    width: 1.4rem;
    height: 1.4rem;
    color: var(--color-${(props) => props.color}-700);

    @media ${device.tablet} {
      width: 2.2rem;
      height: 2.2rem;
    }

    @media ${device.laptop} {
      width: 3.2rem;
      height: 3.2rem;
    }
  }
`;

const Title = styled.h5`
  align-self: end;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);

  @media ${device.tablet} {
    font-size: 1rem;
  }

  @media ${device.laptop} {
    font-size: 1.2rem;
  }
`;

const Value = styled.p`
  font-size: 0.8rem;
  line-height: 1;
  font-weight: 500;

  @media ${device.tablet} {
    font-size: 1.6rem;
  }

  @media ${device.laptop} {
    font-size: 2.4rem;
  }
`;

function Stat({ icon, title, value, color }) {
  return (
    <StyledStat>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledStat>
  );
}

export default Stat;
