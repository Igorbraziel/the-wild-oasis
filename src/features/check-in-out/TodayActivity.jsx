import styled from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import useTodayActivity from "../bookings/useTodayActivity";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";
import { device } from "../../styles/breakpoints";

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  gap: 1rem;
  padding-top: 1.4rem;
  grid-column: 1 / 5;

  @media ${device.tablet} {
    padding: 2.2rem;
    gap: 1.4rem;
    padding-top: 2rem;
    grid-column: 1 / span 2;
  }

  @media ${device.laptop} {
    padding: 3.2rem;
    gap: 2.4rem;
    padding-top: 2.4rem;
    grid-column: 1 / span 2;
  }
`;

const TodayList = styled.ul`
  overflow: auto;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1rem;
  margin-top: 0.4rem;
  font-weight: 500;

  @media ${device.tablet} {
    font-size: 1.3rem;
    margin-top: 0.6rem;
  }

  @media ${device.laptop} {
    font-size: 1.8rem;
    margin-top: 0.8rem;
  }
`;

function TodayActivity() {
  const { todayActivities, isLoading } = useTodayActivity();

  return (
    <StyledToday>
      <Row type="horizontal">
        <Heading as="h2">Today Activity</Heading>
      </Row>

      <TodayList>
        {!isLoading ? (
          todayActivities?.length !== 0 ? (
            todayActivities?.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))
          ) : (
            <NoActivity>No Activity Today</NoActivity>
          )
        ) : (
          <Spinner />
        )}
      </TodayList>
    </StyledToday>
  );
}

export default TodayActivity;
