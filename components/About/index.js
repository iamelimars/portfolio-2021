import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { RoundedAnchor } from "../common/button";

const About = () => {
  return (
    <Container name="about">
      <h1>ABOUT ME</h1>
      <p>
        My name is <span className="bold">Elisha J Marshall</span> and I am a
        <span className="secondary">Creative Web Developer</span> from{" "}
        <span className="primary">South Fl</span>. I have a serious passion for
        building aesthetic design experiences. I specialize in creating fast and
        responsive websites that work on all devices.
      </p>
      <p>
        I have been developing websites fulltime for the past 4 years. In
        addition to developing, in my spare time, I have been teaching others
        how to code on{" "}
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCoSU7SxPV3gxoSL0Rv__uQw"
          className="secondary underline"
        >
          Youtube
        </a>{" "}
        over the last year.
      </p>
      <p className="italic">
        I’m a hard working and passionate developer that loves to learn!
      </p>
      <h3>Dev Stack</h3>
      <p className="bold-stack">
        HTML5 - CSS3 - JAVASCRIPT - SASS - REACT - REDUX - STYLED COMPONENTS -
        CSS MODULES - FIREBASE - BABEL - GRAPHQL - NEXTJS - GIT - WEBPACK - JEST
        - ENZYME{" "}
      </p>
      <RoundedAnchor
        target="_blank"
        href="https://eli-portfolio.cdn.prismic.io/eli-portfolio/d95c71e5-8c73-47e6-853c-97e9074545a7_Resume.pdf"
        secondary={true}
      >
        RESUME
      </RoundedAnchor>
    </Container>
  );
};

const Anchor = styled(RoundedAnchor)`
  a {
    margin: auto;
  }
`;

const Container = styled(Element)`
  max-width: 1000px;
  margin: auto;
  margin-top: 5rem;
  padding: 3rem 3rem;
  display: flex;
  flex-direction: column;
  a {
    margin: auto;
  }
  h1,
  h3 {
    text-align: center;
    color: ${({ theme }) => theme.primary};
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }

  .bold-stack {
    font-weight: 600;
    font-size: 0.8rem;
    margin-bottom: 4rem;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${({ theme }) => theme.text};
    text-align: center;
    font-weight: 200;

    .bold {
      font-weight: 600;
    }

    .primary {
      color: ${({ theme }) => theme.primary};
      font-weight: 400;
    }
    .secondary {
      color: ${({ theme }) => theme.secondary};
      font-weight: 400;
    }

    .underline {
      text-decoration: underline;
    }
  }
  .italic {
    font-style: italic;
  }
`;

export default About;
