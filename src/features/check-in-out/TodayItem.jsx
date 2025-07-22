import styled from "styled-components";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";
import { device } from "../../styles/breakpoints";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 4rem 1rem 1fr 3rem 1fr;
  gap: 0.7rem;
  font-size: 0.9rem;
  padding: 0.4rem 0;
  align-items: center;
  overflow: scroll;

  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }

  @media ${device.tablet} {
    grid-template-columns: 5rem 1rem 1fr 4rem 5rem;
    gap: 0.8rem;
    font-size: 1.1rem;
    padding: 0.6rem 0;
  }

  @media ${device.laptop} {
    grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
    gap: 1.2rem;
    font-size: 1.4rem;
    padding: 0.8rem 0;
  }
`;

const Guest = styled.div`
  font-weight: 500;
  font-size: 0.6rem;

  @media ${device.tablet} {
    font-size: 1.1rem;
  }

  @media ${device.laptop} {
    font-size: 1.4rem;
  }
`;

const Nights = Guest;

function TodayItem({ activity }) {
  const { status, id, guests, numNights } = activity;

  return (
    <StyledTodayItem>
      <Tag type={status === "unconfirmed" ? "green" : "blue"}>
        {status === "unconfirmed" ? "Arriving" : "Departing"}
      </Tag>
      <Flag src={guests.countryFlag} alt={`Flag of ${guests.countryName}`} />
      <Guest>{guests.fullName}</Guest>
      <Nights>{numNights} nights</Nights>
      {status === "unconfirmed" ? (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check In
        </Button>
      ) : (
        <CheckoutButton bookingId={id} />
      )}
    </StyledTodayItem>
  );
}

export default TodayItem;
