import React from "react";
import { Link } from "react-scroll";
import styled, { css } from "styled-components";

//DefaultStyles
const DefaultRounded = css`
  background: ${({ theme, secondary }) =>
    secondary ? theme.secondary : theme.primary};
  padding: 0.5rem 2rem;
  font-size: 0.7rem;
  border-radius: 2rem;
  color: #fff;
  border: 2px solid
    ${({ theme, secondary }) => (secondary ? theme.secondary : theme.primary)};
  cursor: pointer;
  text-decoration: none;
`;

const DefaultOutlined = css`
  background: transparent;
  padding: 0.5rem 2rem;
  font-size: 0.7rem;
  border-radius: 2rem;
  color: ${({ theme, secondary }) =>
    secondary ? theme.secondary : theme.primary};
  border: 2px solid
    ${({ theme, secondary }) => (secondary ? theme.secondary : theme.primary)};
  cursor: pointer;
  text-decoration: none;
`;

//Buttons
const StyledButton = styled.button`
  ${DefaultRounded}
`;
export const Button = ({ secondary, children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

//Outlined Button
const StyledOutlinedButton = styled.button`
  ${DefaultOutlined}
`;
export const OutlinedButton = ({ secondary, children, ...rest }) => {
  return (
    <StyledOutlinedButton secondary={secondary} {...rest}>
      {children}
    </StyledOutlinedButton>
  );
};

// Anchors
const StyledRoundedAnchor = styled.a`
  ${DefaultRounded}
`;
export const RoundedAnchor = ({ secondary, children, ...rest }) => {
  return (
    <StyledRoundedAnchor secondary={secondary} {...rest}>
      {children}
    </StyledRoundedAnchor>
  );
};

const StyledOutlinedAnchor = styled.a`
  ${DefaultOutlined}
`;
export const OutlinedAnchor = ({ secondary, children, ...rest }) => {
  return (
    <StyledOutlinedAnchor secondary={secondary} {...rest}>
      {children}
    </StyledOutlinedAnchor>
  );
};

//Links
const StyledRoundedLink = styled(Link)`
  ${DefaultRounded}
`;
export const RoundedLink = ({ secondary, children, to, ...rest }) => {
  return (
    <StyledRoundedLink
      to={`${to.split(" ").join("-").toLowerCase()}`}
      {...rest}
      spy={true}
      smooth={true}
      secondary={secondary}
    >
      {children}
    </StyledRoundedLink>
  );
};

const StyledOutlinedLink = styled(Link)`
  ${DefaultOutlined}
`;

export const OutlinedLink = ({ secondary, children, to, ...rest }) => {
  return (
    <StyledOutlinedLink
      to={`${to.split(" ").join("-").toLowerCase()}`}
      {...rest}
      spy={true}
      smooth={true}
      secondary={secondary}
    >
      {children}
    </StyledOutlinedLink>
  );
};
