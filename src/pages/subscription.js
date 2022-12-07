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
import SubscribrForm from '../widgets/SubscribeForm'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby';
import Seo from '../components/seo';
const config = require("../../data/SiteConfig");
function AboutSubscribe() {

    const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "Subscribe-Page-Banner.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`)

    return <>
        <Seo
            title="A Word, A Thought, A Question - Subscription - Heartfulness Magazine"
            meta={[
                {
                    name: `og:type`,
                    content: 'article',
                },
                {
                    name: `og:title`,
                    content: 'A Word, A Thought, A Question - Subscription - Heartfulness Magazine'
                },
                {
                    name: `og:description`,
                    content: 'A Word, A Thought, A Question - Subscription - Heartfulness Magazine'
                }, {
                    name: `og:url`,
                    content: `${config.siteUrl}/subscription`
                }, {
                    name: `og:image`,
                    content: ''
                },
                {
                    name: `twitter:title`,
                    content: 'A Word, A Thought, A Question - Subscription - Heartfulness Magazine'
                },
                {
                    name: `twitter:card`,
                    content: 'summary'
                },
                {
                    name: `twitter:label1`,
                    content: 'Est. reading time'
                },
                {
                    name: `twitter:data1`,
                    content: '1 minute'
                }
            ]}
        />
        <Header />
        <SectionWrapper sectionStyles={{ p: "50px 0" }}>
            <Flex sx={{
                flexDirection: ['column', null, null, 'row']
            }}>
                <Box sx={{
                    flex: [1, null, null, 1.7],
                    pr: [0, null, null, null, "120px"],
                    order: [2, null, null, 1]
                }}>
                    <Image sx={{ width: ["100", null, null, "80%"] }} src={data.file.childImageSharp.fluid.src} />
                    <br />
                    <Styled.h1 sx={{
                        mb: "20px"
                    }}>
                        Subscribe to <span sx={{ color: "primary" }}>A Word, A Thought, A Question</span>
                    </Styled.h1>
                    <Styled.p sx={{ marginBottom: "20px" }}>
                        These regular weekly inspirations provide simple, practical guidance to help you develop new
                        effective habits and let go of old outdated habits. The lifestyle tips and questions are easy to
                        follow, changing patterns of thinking and behavior one step at a time.
                    </Styled.p>
                    <Styled.p sx={{ marginBottom: "20px" }}>
                        You will receive a new topic every Thursday.
                    </Styled.p>
                    <Styled.p sx={{ marginBottom: "20px" }}>
                        From time to time, you may also receive relevant longform articles from Heartfulness Magazine.
                            We would love to hear from you about the topics that are dear to your heart, so please contact us at <
                            Styled.a sx={{ color: "primary" }} href="mailto:contributions@heartfulnessmagazine.com">contributions@heartfulnessmagazine.com</Styled.a>
                    </Styled.p>
                    <Styled.p sx={{ marginBottom: "20px" }}>
                        To support these lifestyle changes, please download the <Styled.a target="_blank" sx={{ color: "primary" }} href={config.heartsappSiteUrl}>HeartsApp</Styled.a> to try the Heartfulness practices.
                    </Styled.p>
                    <Flex sx={{
                        justifyContent: "space-between"
                    }}>
                        <Box>
                            <Link to="/archive" style={
                                {
                                    display: "inline-block",
                                    fontFamily: "roboto",
                                    padding: "10px 26px",
                                    backgroundColor: "#b08439",
                                    fontSize: "15px",
                                    color: "#fff",
                                    cursor: "pointer",
                                    textDecoration: "none"
                                }}>View Archives</Link>
                        </Box>
                        <Box>
                            <Link to="/" style={{
                               display: "inline-block",
                               fontFamily: "roboto",
                               padding: "10px 26px",
                               fontSize: "15px",
                               cursor: "pointer",
                               textDecoration: "none",
                               border:"1px solid rgb(176, 132, 57)",
                               color:"rgb(176, 132, 57)"
                            }}>Back</Link>
                        </Box>
                    </Flex>
                </Box>
                <Box sx={{
                    flex: [1],
                    order: [1, null, null, 2],
                    mb: ["20px", null, null, 0]
                }}>
                    <SubscribrForm />
                </Box>
            </Flex>
        </SectionWrapper>
        <Footer />
    </>

}

export default AboutSubscribe;

