import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import { device } from "../styles/breakpoints";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 7rem;
  width: auto;

  @media ${device.tablet}{
    height: 8rem;
  }

  @media ${device.laptop}{
    height: 9.6rem;
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
