import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import useLogout from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function LogoutButton() {
  const { logoutMutate, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logoutMutate}>
      {isLoading ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
}

export default LogoutButton;
