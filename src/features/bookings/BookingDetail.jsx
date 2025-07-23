import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useNavigate, useParams } from "react-router-dom";
import useBooking from "./useBooking";
import Spinner from "../../ui/Spinner";
import CheckoutButton from "../check-in-out/CheckoutButton";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useDeleteBooking from "./useDeleteBooking";
import Empty from "../../ui/Empty";


const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  padding: 0.4rem 2rem;
`;

function BookingDetail() {
  const navigate = useNavigate();
  const { bookingId } = useParams();
  const { booking, isLoading } = useBooking(bookingId);

  const { deleteBookingMutate, isDeleting } = useDeleteBooking();

  const status = booking?.status;

  const moveBack = useMoveBack();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  if (isLoading) return <Spinner />;
  if (!booking) return <Empty resource="booking" />;

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check In
          </Button>
        )}

        {status === "checked-in" && <CheckoutButton bookingId={bookingId} />}

        <Modal.Open opens="confirm-delete">
          <Button variation="danger">Delete</Button>
        </Modal.Open>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>

      <Modal.Window name="confirm-delete">
        <ConfirmDelete
          resourceName={`Booking #${bookingId}`}
          onConfirm={() => {
            deleteBookingMutate(bookingId);
            navigate("/bookings");
          }}
          disabled={isDeleting}
        />
      </Modal.Window>
    </>
  );
}

export default BookingDetail;
