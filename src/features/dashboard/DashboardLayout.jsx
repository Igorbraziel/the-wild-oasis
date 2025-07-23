import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";
import Stats from "./Stats";
import useCabins from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
import { device } from "../../styles/breakpoints";
import useMediaQuery from "../../hooks/useMediaQuery";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.8fr 0.8fr 0.8fr;
  grid-template-rows: auto 20rem auto;
  gap: 1rem;

  @media ${device.tablet}{
    grid-template-rows: auto 24rem auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.6rem;
  }

  @media ${device.laptop}{
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
  }
`;

function DashboardLayout() {
  const { recentBookings, isLoading: isLoadingRecentBookings } =
    useRecentBookings();
  const {
    confirmedStays,
    isLoading: isLoadingStays,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading: isLoadingCabins } = useCabins();

  const isTablet = useMediaQuery("(min-width: 768px)");

  if (isLoadingRecentBookings || isLoadingStays || isLoadingCabins)
    return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={recentBookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        totalCabins={cabins.length}
      />
      <TodayActivity />
      {isTablet && <DurationChart confirmedStays={confirmedStays} />}
      <SalesChart bookings={recentBookings} numDays={numDays} />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
