import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import BgImg from "../../assets/portfolio_bg";
import PortfolioPost from "./PortfolioPost";

const Portfolio = ({ posts, err }) => {
  return (
    <Container name="portfolio">
      <h1>PORTFOLIO</h1>
      <Wrapper>
        {err && <img className="err" src="/no-data.png" alt="Error Image" />}
        {posts &&
          posts.map((post, index) => (
            <PortfolioPost key={post.id} alt={index % 2} post={post} />
          ))}
      </Wrapper>
      <BgImg />
    </Container>
  );
};

const Container = styled(Element)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  h1 {
    text-align: center;
    color: ${({ theme }) => theme.primary};
    font-weight: 400;
    font-size: 1.5rem;
    margin: 3rem 0;
  }

  .err {
    width: 300px;
    z-index: 1;
  }

  .portfolio_bg {
    position: absolute;
    top: -0px;
    left: -150px;
    z-index: 0;
    @media ${({ theme }) => theme.mediaQueries.medium} {
      opacity: 0.5;
      width: 800px;
      height: 800px;
      right: -220px;
      top: 0px;
    }
    @media ${({ theme }) => theme.mediaQueries.small} {
      width: 600px;
      height: 600px;
      right: -220px;
      top: 0px;
    }
  }
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  z-index: 1;
  padding: 0 2rem;
`;

export default Portfolio;
