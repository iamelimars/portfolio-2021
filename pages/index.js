import styled from "styled-components";
import About from "../components/About";
import Hero from "../components/Hero";
import Nav from "../components/Navbar/Nav";
import Portfolio from "../components/Portfolio";
import { Client } from "../prismic-configuration";
import Prismic from "@prismicio/client";
import Tutorials from "../components/Tutorials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = ({ docs, err, tutorials }) => {
  return (
    <Bg>
      <Nav />
      <Hero />
      <About />
      <Portfolio posts={docs.results} err={err} />
      <Tutorials tutorials={tutorials} err={err} />
      <Contact />
      <Footer />
    </Bg>
  );
};

export const getStaticProps = async () => {
  const client = Client();

  try {
    const doc = await client.query(
      Prismic.Predicates.at("document.type", "portfolio"),
      { orderings: "[document.last_publication_date desc]" }
    );
    // const data = await client.query(
    //   Prismic.Predicates.at("document.type", "resume"),
    //   {}
    // );

    // // console.log(data);
    const res = await fetch(
      "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&part=status&part=id&maxResults=100&playlistId=UUoSU7SxPV3gxoSL0Rv__uQw&key=AIzaSyBCCy4agRBbHZxrniQQiq2NkmY_4d6LotY"
    );
    const json = await res.json();

    return {
      props: {
        docs: doc,
        tutorials: json.items,
      },
    };
  } catch (err) {
    return {
      props: {
        err,
      },
    };
  }
};

export default Home;

const Bg = styled.div`
  background: ${({ theme }) => theme.bg};
`;
