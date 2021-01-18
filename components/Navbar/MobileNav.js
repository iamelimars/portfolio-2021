import { Divide as Hamburger } from "hamburger-react";
import { useTransition, config } from "react-spring";
import styled from "styled-components";
import SideDrawer from "./SideDrawer";

const MobileNav = ({ isMenuOpen, setIsMenuOpen, darkMode }) => {
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const SideDrawerTransition = useTransition(isMenuOpen, null, {
    config: config.stiff,
    from: { opacity: 0, transform: "translateX(-50%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(50%)" },
  });
  return (
    <Container>
      {SideDrawerTransition.map(
        ({ item, key, props }) =>
          item && (
            <SideDrawer
              key={key}
              style={props}
              setIsMenuOpen={() => setIsMenuOpen(false)}
              toggleDarkMode={() => darkMode.toggle()}
            />
          )
      )}
      <Hamburger
        size={20}
        color={darkMode.value ? "#fff" : "#575757"}
        toggled={isMenuOpen}
        toggle={toggleMenu}
        easing="ease-in"
        rounded
        label="Show menu"
        hideOutline={true}
      />
    </Container>
  );
};

const Container = styled.div`
  display: none;
  @media only screen and (max-width: 830px) {
    display: block;
  }
`;

export default MobileNav;
