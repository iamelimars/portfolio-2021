import React from "react";
import styled from "styled-components";

const TutorialCard = ({ tutorial }) => {
  console.log(tutorial);
  return (
    <>
      <Container>
        <img src={tutorial.snippet.thumbnails.maxres.url} />
        <a
          href={`https://www.youtube.com/watch?v=${tutorial.snippet.resourceId.videoId}`}
          target="_blank"
        >
          <h3>{tutorial.snippet.title}</h3>
        </a>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 320px;
  height: 180px;

  &:hover {
    img {
      box-shadow: 0 8px 10px -3px rgba(0, 0, 0, 0.5);
      transform: translateY(-9px);
    }

    h3 {
      color: ${({ theme }) => theme.secondary};
    }
  }
  img {
    width: 100%;
    box-shadow: 0 8px 7px -5px rgba(0, 0, 0, 0.25);
    transition: all 0.2s ease-in-out;
  }

  a {
    text-decoration: none;
  }

  h3 {
    color: ${({ theme }) => theme.text};
    transition: all 0.2s ease-in-out;
    font-weight: 400;
  }
`;

export default TutorialCard;
