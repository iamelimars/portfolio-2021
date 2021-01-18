import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import NavLinks from "./NavLinks";

const DesktopNav = () => {
  return (
    <Container>
      <NavLinks />
      <DarkModeToggle />
    </Container>
  );
};

const Container = styled.div`
  flex-direction: row;
  display: flex;
  @media only screen and (max-width: 830px) {
    display: none;
  }
  a {
    font-size: 0.7rem;
  }

  svg {
    cursor: pointer;
    transition: transform 0.2s ease-in;
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

export default DesktopNav;
