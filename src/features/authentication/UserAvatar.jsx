import styled from "styled-components";
import useUser from "./useUser";
import { device } from "../../styles/breakpoints";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  font-size: 1.2rem;
  align-items: center;
  font-weight: 500;
  color: var(--color-grey-600);

  @media ${device.tablet} {
    font-size: 1.3rem;
  }

  @media ${device.laptop} {
    font-size: 1.4rem;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 3.2rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);

  @media ${device.tablet} {
    width: 3.6rem;
  }

  @media ${device.laptop} {
    width: 4rem;
  }
`;

function UserAvatar() {
  const { user = {} } = useUser();

  const { fullName, avatar } = user.user_metadata;

  return (
    <StyledUserAvatar>
      <Avatar
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
