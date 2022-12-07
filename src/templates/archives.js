/** @jsx jsx */
import {
  Box,
  Flex,
  Image,
  Styled,
  Select,
  jsx
} from "theme-ui"
import React, { useState, useMemo } from 'react';
import SectionWrapper from "../components/SectionWrapper";
import SubscribeForm from '../widgets/SubscribeForm'
import ShareWithSocialMedia from '../widgets/ShareWithSocialMedia'
import folder_img from '../images/Folder-icon.png';
import calendar_img from '../images/Calendar-icon.png'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Seo from '../components/seo';
import JSON_MONTHS from '../site-content/months.json'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';
const config = require("../../data/SiteConfig");

function Archives({ pathContext }) {

  const { content, mobileData } = pathContext;

  const [archiveYear, setArchiveYear] = useState(new Date().getFullYear());

  const archieveOptions = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return Array(currentYear - 2020).fill(2021).map((year, index) => year + index).reverse();
  }, []);

  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "archive-Banner.jpg" }) {
      childImageSharp {
        fluid {
            originalImg
        }
      }
    }
  }
`)

  const getMonthAndYear = my => {
    const [year, month] = my.split('-');
    return `${JSON_MONTHS[month]}, ${year}`
  }

  const getDateMonthAndYear = dmy => {
    const [date, month, year] = dmy.split('/');
    return `${date} ${JSON_MONTHS[month]} ${year}`
  }
  return <>
    <Seo
      title="A Word, A Thought, A Question - Archive - Heartfulness Magazine"
      meta={[
        {
          name: `og:type`,
          content: 'article',
        },
        {
          name: `og:title`,
          content: 'A Word, A Thought, A Question - Archive - Heartfulness Magazine'
        },
        {
          name: `og:description`,
          content: 'A Word, A Thought, A Question - Archive - Heartfulness Magazine'
        }, {
          name: `og:url`,
          content: `${config.siteUrl}/archive`
        }, {
          name: `og:image`,
          content: `${config.siteUrl}${data.file.childImageSharp.fluid.originalImg}`
        },
        {
          name: `twitter:card`,
          content: 'summary'
        }, {
          name: `twitter:url`,
          content: `${config.siteUrl}/archive`
        }, {
          name: 'twitter:title',
          content: 'A Word, A Thought, A Question - Archive - Heartfulness Magazine'
        }, {
          name: 'twitter:description',
          content: 'A Word, A Thought, A Question - Archive - Heartfulness Magazine'
        }, {
          name: `twitter:image`,
          content: `${config.siteUrl}${data.file.childImageSharp.fluid.originalImg}`
        }
      ]}
    />
    {!mobileData.isMobileMode && <Header />}
    <SectionWrapper>
      <Box sx={{
        '@media screen and (max-width: 767px)': {
          backgroundImage: `url('${data.file.childImageSharp.fluid.originalImg}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "180px",
          backgroundPosition: " center center"
        }
      }}>
        <img sx={{ display: ['none', null, 'block'] }} style={{ width: "100%" }} src={data.file.childImageSharp.fluid.originalImg} alt=""></img>
      </Box>
      <br />
      <Flex sx={{
        flexDirection: ['column', null, null, 'row']
      }}>
        <Box sx={{
          flex: 2.1,
          mb: ["30px", null, null, 0]
        }}>
          <Box sx={{
            maxWidth: ["100%", null, null, null, "80%"],
            margin: "0 auto"
          }}>
            <Flex sx={{ mb: "15px", mt: "10px" }}>
              <Select sx={{ minWidth: "75px" }} value={archiveYear} onChange={(e) => setArchiveYear(e.target.value)}>
                {archieveOptions.map((year) => (<option key={year}>{" "}{year}{" "}</option>))}
              </Select>
            </Flex>
            <Accordion allowMultipleExpanded allowZeroExpanded preExpanded={['0-arc-head']}>
              {
                Object.keys(content).filter(key => key.indexOf(archiveYear) === 0).sort().reverse().map((md, index) =>
                  <AccordionItem uuid={`${index}-arc-head`}>
                    <Box sx={{ mb: "10px" }} key={`${index}-arc-head`}>
                      <AccordionItemHeading >
                        <AccordionItemButton
                          sx={{
                            variant: "accordion__button"
                          }}
                        >

                          <Flex mb={1}>
                            <Image sx={{ width: "27px", height: "27px" }} src={folder_img} />
                            <Styled.h4>
                              {getMonthAndYear(md)}
                            </Styled.h4>
                          </Flex>
                          <AccordionItemState>
                            {({ expanded }) => {
                              return (
                                expanded ? <div sx={{
                                  variant: "reverse_arrow"
                                }}></div> : <div sx={{ variant: "arrow" }}></div>

                              )
                            }
                            }
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <div sx={{ mb: "15px" }}>

                        {
                          [...content[md]].reverse().map((data, index) =>
                            <AccordionItemPanel>
                              <Flex key={`${index}-arc-mon`} sx={{
                                paddingLeft: "30px",
                                marginTop: "8px",
                                marginBottom: "10px"
                              }}>
                                <Image sx={{
                                  width: "24px",
                                  height: "24px"
                                }}
                                  src={calendar_img} />
                                <Styled.h4 sx={{
                                  fontFamily: "Lato",
                                  fontSize: "16px",
                                  fontWeight: 300,
                                }}>
                                  <Link
                                    style={{
                                      color: "#000000",
                                      textDecoration: "none"
                                    }}
                                    to={mobileData.isMobileMode ? `/m/${data.contentUploadedDate.replace(/\//g, "-")}` : `/${data.contentUploadedDate.replace(/\//g, "-")}`}>
                                    {getDateMonthAndYear(data.contentUploadedDate)}
                                  </Link>
                                </Styled.h4>
                              </Flex>
                            </AccordionItemPanel>)
                        }
                      </div>
                    </Box>
                  </AccordionItem>

                )

              }
            </Accordion>
          </Box>
        </Box>
        <Box sx={{
          flex: 1
        }}>
          {!mobileData.isMobileMode && <SubscribeForm />}
        </Box>
      </Flex>
      <Box>
        <ShareWithSocialMedia
          showSubscribeBtn={false}
          smLink={`${config.siteUrl}/archive`}
          mobileData={mobileData} />
      </Box>
    </SectionWrapper>
    {!mobileData.isMobileMode && <Footer />}
  </>
}

export default Archives;