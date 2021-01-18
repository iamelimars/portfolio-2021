import React from "react";
import { useTrail } from "react-spring";
import { animated, config } from "react-spring";
import styled from "styled-components";
import NavLink from "./NavLink";

const Links = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Portfolio",
    href: "#portfolio",
  },
  {
    title: "Tutorials",
    href: "#tutorials",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const NavLinks = ({ mobile, clicked }) => {
  const linksTrail = useTrail(Links.length, {
    config: config.wobbly,
    delay: 300,
    opacity: 1,
    transform: "translateY(0px)",
    from: {
      opacity: 0,
      transform: "translateY(20px)",
      display: "flex",
      cursor: "pointer",
    },
  });

  return (
    <Container mobile={mobile}>
      {linksTrail.map((propStyles, index) => (
        <animated.div key={Links[index].title} style={propStyles}>
          <NavLink key={Links[index]} link={Links[index]} clicked={clicked} />
        </animated.div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex: 1;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  justify-content: ${({ mobile }) => (mobile ? "center" : "flex-end")};
  align-items: center;

  /* @media ${({ theme }) => theme.mediaQueries.large} {
    margin-right: ${({ mobile }) => (mobile ? "0rem" : "4rem")};
  } */
`;

export default NavLinks;
