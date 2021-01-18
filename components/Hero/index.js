import React from "react";
import styled from "styled-components";
import BgImg from "../../assets/hero_bg";
import HeroContent from "./HeroContent";
import { Player } from "@lottiefiles/react-lottie-player";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <>
      <Container name="top">
        <BgImg />
        <Wrapper>
          <HeroContent />
        </Wrapper>
      </Container>
      <SvgPlayer
        autoplay
        loop
        src="/scrollDown.json"
        style={{ height: "30px", width: "30px" }}
      />
    </>
  );
};

const Container = styled(Element)`
  position: relative;
  overflow: hidden;
  max-width: 100vw;
  width: 100%;
  height: 95vh;
  min-height: 800px;
  display: flex;
  align-items: flex-start;
  .hero_bg {
    position: absolute;
    top: -100px;
    right: -350px;
    z-index: 0;
    width: 1200px;

    @media ${({ theme }) => theme.mediaQueries.larger} {
      /* opacity: 0.5; */
      width: 1000px;
      height: 800px;
      right: -320px;
      top: -50px;
    }
    @media ${({ theme }) => theme.mediaQueries.large} {
      opacity: 0.5;
      width: 1000px;
      height: 800px;
      right: -320px;
      top: -50px;
    }
    @media ${({ theme }) => theme.mediaQueries.medium} {
      opacity: 0.5;
      width: 1000px;
      height: 800px;
      right: -220px;
      top: -50px;
    }
    @media ${({ theme }) => theme.mediaQueries.small} {
      width: 800px;
      height: 600px;
      right: -320px;
      top: -50px;
    }
  }
`;

const Wrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  /* height: 100%; */
  margin: auto;
  padding: 3rem 1rem;
  display: flex;
  align-items: center;
`;

const SvgPlayer = styled(Player)`
  position: absolute;
  z-index: 2;
  bottom: 15px;
  /* width: 50px;
  height: 50px; */
`;

export default Hero;
