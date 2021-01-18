import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import UseAnimations from "react-useanimations";

const Contact = () => {
  return (
    <Container name="contact">
      <Title>CONTACT ME</Title>
      <a href="mailto:elishajmarshall@gmail.com">elishajmarshall@gmail.com</a>
      <IconContainer>
        <IconWrapper target="_blank" href="https://github.com/iamelimars">
          <img src="/github.svg" alt="github icon" />
        </IconWrapper>
        <IconWrapper
          target="_blank"
          href="https://www.linkedin.com/in/elisha-marshall-iii-5446a4131/"
        >
          <img src="/linkedin.svg" alt="github icon" />
        </IconWrapper>
        <IconWrapper
          target="_blank"
          href="https://www.youtube.com/channel/UCoSU7SxPV3gxoSL0Rv__uQw"
        >
          <img src="/youtube.svg" alt="github icon" />
        </IconWrapper>
      </IconContainer>
    </Container>
  );
};

const Container = styled(Element)`
  padding: 1rem;
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    text-align: center;
    color: ${({ theme }) => theme.text};
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-decoration: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
`;

const IconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  margin: 1rem;
  border: 2px solid ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.text};
  }
`;

const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.primary};
  font-weight: 400;
  font-size: 1.5rem;
  margin: 2rem 0;
`;
export default Contact;
