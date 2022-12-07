/** @jsx jsx */
import {
  Box,
  Flex,
  Image,
  Styled,
  jsx
} from "theme-ui";
import SectionWrapper from '../components/SectionWrapper'
import Header from '../components/Header'
import Footer from "../components/Footer";
import React from 'react';
import { Link, navigate } from 'gatsby';
import Seo from '../components/seo';

function NotFoundPage({ location }) {
  const isMobile = location.pathname.includes("/m");
  if (isMobile) {
    navigate("/m")
    return <>Loading ...</>
  } else {
  return <>
    <Seo title="A Word, A Thought, A Question - 404 - Heartfulness Magazine" />
    <Header />
    <SectionWrapper sectionStyles={{ p: "50px 0" }}>
      <h1 sx={{ textAlign: "center", fontFamily: "roboto", }}>404: Not Found</h1>
      <p sx={{ textAlign: "center", fontFamily: "roboto", }}>The page you are looking is not available.</p>
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/" style={{
          display: "inline-block",
          fontFamily: "roboto",
          padding: "10px 26px",
          fontSize: "15px",
          cursor: "pointer",
          textDecoration: "none",
          border: "1px solid rgb(176, 132, 57)",
          color: "rgb(176, 132, 57)"
        }}>Home</Link>&nbsp;&nbsp;

<Link to="/archive" style={{
          display: "inline-block",
          fontFamily: "roboto",
          padding: "10px 26px",
          fontSize: "15px",
          cursor: "pointer",
          textDecoration: "none",
          border: "1px solid rgb(176, 132, 57)",
          color: "rgb(176, 132, 57)"
        }}>Archive</Link>
      </Box>

    </SectionWrapper>
    <Footer />
  </>
  }

}

export default NotFoundPage;


