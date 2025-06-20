import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useCreateCabin(){
  const queryClient = useQueryClient();

  const { mutate: createCabinMutate, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("New Cabin successfully created");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isCreating, createCabinMutate };
}