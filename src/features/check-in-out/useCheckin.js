import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({bookingId, breakfast}) =>
      updateBooking(bookingId, { isPaid: true, status: "checked-in", ...breakfast }),
    onSuccess: (data) => {
      toast.success(`The Booking ${data.id} Was Successfully Checked-in`);
      queryClient.invalidateQueries({
        queryKey: ["booking", data.id],
      });
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { checkin, isCheckingIn };
}
