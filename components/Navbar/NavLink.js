import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: inherit;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  transition: all 0.2s ease-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media ${({ theme }) => theme.mediaQueries.small} {
    margin: 1rem 0;
    font-size: 0.9rem;
  }
`;

const NavLink = ({ link, clicked }) => (
  <StyledLink
    onClick={clicked}
    to={`${link.title.split(" ").join("-").toLowerCase()}`}
    spy={true}
    smooth={true}
  >
    {link.title}
  </StyledLink>
);

export default NavLink;
