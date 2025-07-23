import styled from "styled-components";
import { device } from "../styles/breakpoints";

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.3rem 0;

  @media ${device.tablet} {
    gap: 1.3rem;
    padding: 0.5rem 0;
  }

  @media ${device.laptop} {
    gap: 1.6rem;
    padding: 0.8rem 0;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 500;
  font-size: 0.8rem;

  @media ${device.tablet} {
    gap: 0.7rem;
    font-size: 1.4rem;
  }

  @media ${device.laptop} {
    gap: 0.8rem;
    font-size: 1.8rem;
  }

  & svg {
    width: 1.4rem;
    height: 1.4rem;
    color: var(--color-brand-600);

    @media ${device.tablet} {
      width: 1.8rem;
      height: 1.8rem;
    }

    @media ${device.laptop} {
      width: 2rem;
      height: 2rem;
    }
  }
`;

const Text = styled.span`
  font-size: 0.8rem;
  font-weight: 700;

  @media ${device.tablet} {
    font-size: 1.2rem;
  }

  @media ${device.laptop} {
    font-size: 1.6rem;
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      <Text>{children}</Text>
    </StyledDataItem>
  );
}

export default DataItem;
