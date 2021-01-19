import React from "react";
import styled from "styled-components";
import { RoundedLink, OutlinedAnchor } from "../common/button";
const HeroContent = () => {
  return (
    <Container>
      <TextWrapper>
        <h1>Hello,</h1>
        <h1>
          I'm <span>Eli</span>
        </h1>
        <p>
          <span>A</span> Front-end developer
        </p>
        <p>Designer</p>
        <p>Youtuber</p>
      </TextWrapper>
      <ButtonWrapper>
        <RoundedLink to="about">ABOUT</RoundedLink>
        <Anchor
          target="_blank"
          href="https://eli-portfolio.cdn.prismic.io/eli-portfolio/a0d10f0b-dabc-40b8-9691-18822acda0d1_Resume.pdf"
        >
          RESUME
        </Anchor>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  z-index: 1;
`;

const TextWrapper = styled.div`
  margin-bottom: 3rem;
  h1 {
    color: ${({ theme }) => theme.text};
    font-size: 5rem;
    font-weight: 100;
    padding: 0;
    margin: 0;
    span {
      color: ${({ theme }) => theme.primary};
      font-weight: 500;
    }
  }

  p {
    color: ${({ theme }) => theme.text};
    font-weight: 100;

    span {
      font-weight: 500;
      margin-left: -15px;
      color: ${({ theme }) => theme.secondary};
    }
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
`;

const Anchor = styled(OutlinedAnchor)`
  margin-left: 2rem;
`;

export default HeroContent;
