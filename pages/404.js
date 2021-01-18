import Link from "next/link";
import styled from "styled-components";
import { RoundedAnchor } from "../components/common/button";

const FourOhFour = () => (
  <Container>
    <Wrapper>
      <img src="/404.gif" alt="" />
      <Link href="/">
        <RoundedAnchor>Go back home</RoundedAnchor>
      </Link>
    </Wrapper>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin-top: 3rem;
  }
`;

export default FourOhFour;
