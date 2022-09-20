import styled from "styled-components";
import { BsGear } from "react-icons/bs";

const StyledIcon = styled.span`
  color: white;
  margin-top: 1.2rem;
  cursor: pointer;
`;

function SettingsButton() {
  return (
    <StyledIcon>
      <BsGear size="1.6rem" />
    </StyledIcon>
  );
}

export default SettingsButton;
