/** @jsx jsx */
import {
    Box,
    Styled,
    jsx
} from "theme-ui"
import Header from '../components/Header'
import Footer from "../components/Footer"
import SectionWrapper from '../components/SectionWrapper'
import React from 'react'
import { Link } from 'gatsby';
import ShareWithSocialMedia from '../widgets/ShareWithSocialMedia'
import Seo from '../components/seo'
import JSON_MONTHS from '../site-content/months.json'
const config = require("../../data/SiteConfig");
function IndividualPost({ pathContext }) {
    const { content, mobileData } = pathContext;
    const [date, month, year] = content.contentUploadedDate.split('/');
    const pageUrl = `/${content.contentUploadedDate.replace(/\//g, "-")}`
    const startDate = new Date(2021, 5, 16);
    let mobileBannerUrl = content.bannerImage;
    const bannerUrl = content.bannerImage;
    const publishedDate = content.contentUploadedDate.split('/');
    const capitalizeTitle = () => {
        return content.title
          .toLowerCase()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      };
      
    const postDate = new Date(parseInt(publishedDate[2]), (parseInt(publishedDate[1]) - 1), parseInt(publishedDate[0]));
    if (content && (postDate >= startDate)) {
        const tempImg = content.bannerImage.split(".").slice(0, -1).join(".");
        mobileBannerUrl = tempImg + "-600.jpg";
    }
    return <>
        <Seo
            title={capitalizeTitle() }
            meta={[
                {
                    name: "description",
                    content: content.sectionTwo.thoughts_for_others
                },
                {
                    name: `og:type`,
                    property: `og:type`,
                    content: 'article',
                },
                {
                    name: `og:title`,
                    property: `og:title`,
                    content: capitalizeTitle()
                },
                {
                    name: `og:description`,
                    property: `og:description`,
                    content: content.sectionTwo.thoughts_for_others
                }, {
                    name: `og:url`,
                    property: `og:url`,
                    content: `${config.siteUrl}${pageUrl}`
                }, {
                    name: `og:image`,
                    property: `og:image`,
                    content: content.socialImage
                },
                {
                    name: `og:image:width`,
                    property: `og:image:width`,
                    content: '1200'
                },
                {
                    name: `og:image:height`,
                    property: `og:image:height`,
                    content: '630'
                },
                {
                    name: `twitter:card`,
                    property: `twitter:card`,
                    content: 'summary_large_image'
                },
                {
                    name: `twitter:image`,
                    property: `twitter:image`,
                    content: content.socialImage
                },
                {
                    name: `twitter:url`,
                    property: `twitter:url`,
                    content: `${config.siteUrl}${pageUrl}`
                },
                {
                    name: 'twitter:title',
                    property: 'twitter:title',
                    content: capitalizeTitle()
                },
                {
                    name: 'twitter:description',
                    property: 'twitter:description',
                    content: content.sectionTwo.thoughts_for_others
                }
            ]}
        />
        { !mobileData.isMobileMode && <Header />}
        <SectionWrapper sectionStyles={{
            pb: "80px",
            '@media screen and (max-width: 600px)': {
                pt: "10px"
            }
        }}>
            <Box sx={{
                '@media screen and (max-width: 600px)': {
                    backgroundImage: `url('${mobileBannerUrl}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    height: "140px",
                    backgroundPosition: " center center"
                },
                '@media screen and (max-width: 450px)': {
                    backgroundImage: `url('${mobileBannerUrl}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    height: "120px",
                    backgroundPosition: " center center"
                }
            }}>
                <img sx={{
                    '@media screen and (max-width: 600px)': {
                        display: "none",
                    },
                }} style={{ width: "100%" }} src={bannerUrl} alt="" />
            </Box>

            <Box sx={{
                maxWidth: ["100%", null, null, null, "900px"],
                margin: "0 auto"
            }}>
                <Box>
                    <Styled.h3 sx={{
                        fontSize: "22px",
                        display: "inline-block",
                        color: "#0a0a0a",
                        paddingBottom: "10px",
                        borderBottom: "1px solid #ccc",
                        mb: '18px',
                        mt: '38px',
                        '@media screen and (max-width: 600px)': {
                            mb: '0px',
                            pb: '5px',
                            mt: '15px',
                            fontSize: "18px",
                        }
                    }}>
                        {`${date} ${JSON_MONTHS[month]} ${year}`}
                    </Styled.h3>
                    <Styled.h3
                        sx={{
                            '@media screen and (max-width: 600px)': {
                                margin: '0px',
                                mt: '10px',
                                fontSize: "20px",
                            }
                        }}>A Word</Styled.h3>
                    <Styled.p sx={{
                        color: "#636363", mb: '38px', '@media screen and (max-width: 600px)': {
                            mb: '18px'
                        }
                    }}>{content.sectionOne.thought_of_the_week}</Styled.p>
                    <Styled.h3 sx={{
                        '@media screen and (max-width: 600px)': {
                            fontSize: "20px",
                            mb: '0px',
                            pb: '5px',
                        }
                    }}>A Thought</Styled.h3>
                    <Styled.p sx={{
                        color: "#636363", mb: '38px', '@media screen and (max-width: 600px)': {
                            mb: '18px'
                        }
                    }}>"{content.sectionTwo.thoughts_for_others}"&nbsp;<strong style={{ color: "rgb(176, 132, 57)", letterSpacing: '1px' }}><i>{content.hasOwnProperty('sectionFour') ? `${content.sectionFour.author}` : ""}</i></strong></Styled.p>
                    <Styled.h3 sx={{
                        '@media screen and (max-width: 600px)': {
                            fontSize: "20px",
                            mb: '0px',
                            pb: '5px',
                        }
                    }}>A Question</Styled.h3>
                    <Styled.p sx={{ color: "#636363" }}>{content.sectionThree.questions}</Styled.p>
                    { content.relatedArticles && !mobileData.isMobileMode && <Box sx={{ paddingTop: ["10px", "20px", "50px"] }}>
                        <Styled.h3 sx={{
                            fontSize: "22px",
                            color: "#0a0a0a",
                            paddingTop: "40px",
                            borderTop: "1px solid #ccc"
                        }}>
                            Related articles
                        </Styled.h3>
                        {content.relatedArticles && content.relatedArticles.map((item) => {
                            return (<div sx={{ width: ["100%", "600px", "600px"], overflow: "hidden" }}>
                                <img sx={{ float: "left", margin: "20px 0 0 0", width: ["100%", "200px", "200px"], border: "solid 1px #d0d4d6" }} src={item.banner_url} alt="" />
                                <div sx={{ float: "right", padding: ["8px", "20px", "20px"], width: ["100%", "300px", "400px"] }}>
                                <a sx={{
                                        textDecoration: 'none',
                                        fontFamily: "roboto",
                                        color: "#b08439",
                                        fontSize: "14px",
                                        display: "inline"
                                    }} href={item.link} target="_blank" ><Styled.h4 sx={{
                                        fontSize: "16px",
                                        display: "block",
                                        marginLeft: "0",
                                        color: "#b08439"
                                    }} >{item.title}</Styled.h4></a>
                                    <Styled.p sx={{ color: "#636363", display: "inline" }}>{item.content.slice(0, 180)}</Styled.p>
                                    &nbsp;<a sx={{
                                        textDecoration: 'none',
                                        fontFamily: "roboto",
                                        color: "#b08439",
                                        fontSize: "14px",
                                        display: "inline-block"
                                    }} href={item.link} target="_blank" > Read further ..</a>
                                </div>
                            </div>)
                        })}

                    </Box> }
                </Box>

                {(!mobileData.isMobileMode || mobileData.socialSharing) && <ShareWithSocialMedia smLink={`${config.siteUrl}${pageUrl}`} mobileData={mobileData} />}

                {!content.landingpage && !mobileData.isMobileMode && <div sx={{ textAlign: "center", marginTop: "60px", marginBottom: "30px" }}>
                    <Link to={"/archive"} style={{
                        display: "inline-block",
                        fontFamily: "roboto",
                        padding: "10px 26px",
                        fontSize: "15px",
                        cursor: "pointer",
                        textDecoration: "none",
                        border: "1px solid rgb(176, 132, 57)",
                        color: "rgb(176, 132, 57)"
                    }}>Back To Archive</Link>
                </div>
                }
            </Box>

        </SectionWrapper>
        { !mobileData.isMobileMode && <Footer />}
    </>
}


export default IndividualPost;