import { useMutation } from "@tanstack/react-query";
import { signup } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useSignUp() {
  const { mutate: signupMutate, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signup({ fullName, email, password }),
    onSuccess: () => {
      toast.success(
        "Account Successfully Created! Please Verify and Confirm it from the user's email address",
        {
          duration: 6 * 1000,
        }
      );
    },
  });

  return { signupMutate, isLoading };
}
