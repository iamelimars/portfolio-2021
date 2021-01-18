import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useDarkMode from "use-dark-mode";
import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(null);
  const darkMode = useDarkMode(false);
  const changeMediaSize = () => {
    window.matchMedia("(max-width: 830px").matches
      ? setIsMobile(true)
      : setIsMobile(false);
  };

  useEffect(() => {
    changeMediaSize();
    window.addEventListener("resize", changeMediaSize);
    return () => window.removeEventListener("resize", changeMediaSize);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Logo />
        <MobileNav
          darkMode={darkMode}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <DesktopNav darkMode={darkMode} />
        {/* {isMobile ? (
          <MobileNav
            darkMode={darkMode}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        ) : (
          <DesktopNav darkMode={darkMode} />
        )} */}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.bg};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  box-shadow: 0px -7px 25px 2px rgba(0, 0, 0, 0.2);
`;
const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    margin-top: 0.7rem;
  }
`;

export default Nav;
