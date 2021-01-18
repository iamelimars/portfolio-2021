import React from "react";
import styled from "styled-components";
import Logo from "../Navbar/Logo";

const Footer = () => {
  return (
    <Container>
      <Logo width="300px" height="70px" />
      <p>COPYRIGHT © 2021, ELICODES</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  margin-bottom: 2rem;

  p {
    font-size: 11px;
    color: ${({ theme }) => theme.text};
  }
`;

export default Footer;
