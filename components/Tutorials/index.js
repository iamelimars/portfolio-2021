import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import TutorialCard from "./TutorialCard";

const Tutorials = ({ tutorials, err }) => {
  return (
    <Container name="tutorials">
      <Title>TUTORIALS</Title>
      {err && <img className="err" src="/no-data.png" alt="Error Image" />}
      <CardGroup>
        {tutorials &&
          tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
      </CardGroup>
    </Container>
  );
};

const Container = styled(Element)`
  padding: 1rem;
  max-width: 1200px;
  margin: auto;
  /* padding-top: 6rem; */
`;

const CardGroup = styled.div`
  margin: 50px 0 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  row-gap: 150px;
  justify-items: center;
  @media (max-width: 1060px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.primary};
  font-weight: 400;
  font-size: 1.5rem;
  margin: 3rem 0;
`;

export default Tutorials;
