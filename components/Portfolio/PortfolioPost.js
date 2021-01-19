import React from "react";
import styled from "styled-components";
import { RoundedAnchor, OutlinedAnchor } from "../common/button";

const PortfolioPost = ({ post: { data }, alt }) => {
  const { desc, image, site, source, title } = data;
  return (
    <Container alt={alt}>
      <Img src={image.url} alt="" />
      <ContentWrapper>
        <h1>{title[0].text}</h1>
        <p>{desc[0].text}</p>
        <ButtonWrapper>
          <RoundedAnchor target="_blank" href={site.url}>
            VISIT
          </RoundedAnchor>
          <OutlinedAnchor target="_blank" href={source.url}>
            SOURCE
          </OutlinedAnchor>
        </ButtonWrapper>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: ${({ alt }) => (alt ? "row-reverse" : "row")};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 5rem 0;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;

  a {
    margin-right: 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 3rem;
  width: calc(50% - 3rem);

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 100%;
  }

  h1 {
    position: relative;
    font-style: italic;
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0;
    margin-top: 2rem;
    background: ${({ theme }) => theme.primary};
    padding: 0 1rem;
    color: #fff;

    &::before {
      content: "";
      z-index: -1;
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      transform: translate(4px, 4px);
      background: ${({ theme }) => theme.secondary};
    }
  }

  p {
    font-size: 0.8rem;
    font-weight: bold;
    margin: 1rem 0;
    color: ${({ theme }) => theme.text};
  }
`;

const Img = styled.img`
  width: 45%;
  min-width: 300px;
  box-shadow: 4px 4px 25px -9px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
`;

export default PortfolioPost;
