import styled from 'styled-components';
import { device } from '../styles/breakpoints';

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  @media ${device.tablet} {
    gap: 1.1rem;
  }
  @media ${device.laptop} {
    gap: 1.6rem;
  }
`;

export default TableOperations;
