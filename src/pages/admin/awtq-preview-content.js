/** @jsx jsx */
import {
    Box,
    Styled,
    jsx
} from "theme-ui";

import { useState, useEffect } from 'react'

import { Link } from "gatsby"

import Seo from '../../components/seo'
import PrivateRoute from '../../components/PrivateRoute';
import SectionWrapper from '../../components/SectionWrapper'
import AdminHeader from "../../components/AdminHeader";
import AdminFooter from "../../components/AdminFooter";

import JSON_MONTHS from '../../site-content/months.json'

const PreviewContent = ({ location }) => {

    const [content, setContent] = useState({
        title: "",
        uploadedDate: "",
        bannerUrl: "",
        socialImgUrl: "",
        aWord: "",
        aThought: "",
        aQuestion: "",
        activeContent: true,
        author: "",
        relatedArticles: ""
    });

    const [date, month, year] = (location && location.hasOwnProperty('state') ? location.state.contentUploadedDate.split('/') : []);

    useEffect(() => {

        const { state } = location;

        if (state && state.hasOwnProperty('title')) {
            setContent({
                title: state.title,
                uploadedDate: state.contentUploadedDate,
                bannerUrl: state.bannerImage,
                socialImgUrl: state.socialImage,
                aWord: state.sectionOne.thought_of_the_week,
                aThought: state.sectionTwo.thoughts_for_others,
                aQuestion: state.sectionThree.questions,
                scheduledContentId: state.scheduledContentId,
                activeContent: state.activeContent,
                author: state.sectionFour.author,
                relatedArticles: state.relatedArticles
            })
        }
    }, [])

    return (
        <PrivateRoute>
            <Seo title="preview - Content" />
            <AdminHeader pageName={"Preview Content"} />
            <SectionWrapper sectionStyles={{ pb: "20px" }}>

                <Box sx={{
                    '@media screen and (max-width: 767px)': {
                        backgroundImage: `url('${content.bannerUrl}')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "180px",
                        backgroundPosition: " center center"
                    }
                }}>
                    <img sx={{ display: ['none', null, 'block'] }} style={{ width: "100%" }} src={content.bannerUrl} alt="" />
                </Box>
                <br />
                <br />
                <Box sx={{ maxWidth: ["100%", null, null, null, "900px"], margin: "0 auto" }}>
                    <Box>
                        <Styled.h3 sx={{
                            fontSize: "22px",
                            display: "inline",
                            color: "#0a0a0a",
                            paddingBottom: "10px",
                            borderBottom: "1px solid #ccc"
                        }}>
                            {`${date} ${JSON_MONTHS[month]} ${year}`}
                        </Styled.h3>
                        <br />
                        <br />
                        <br />
                        <Styled.h3>A Word</Styled.h3>
                        <Styled.p sx={{ color: "#636363" }}>{content.aWord}</Styled.p>
                        <br />
                        <Styled.h3>A Thought</Styled.h3>
                        <Styled.p sx={{ color: "#636363" }}>"{content.aThought}" <strong style={{ color: "rgb(176, 132, 57)", "letterSpacing": '1px' }}><i>{content.author ? `${content.author}` : ""}</i></strong></Styled.p>
                        <br />
                        <Styled.h3>A Question</Styled.h3>
                        <Styled.p sx={{ color: "#636363" }}>{content.aQuestion}</Styled.p>
                    </Box>
                    {content.relatedArticles && <Box sx={{ paddingTop: "50px" }}>
                        <Styled.h3 sx={{
                            fontSize: "22px",
                            color: "#0a0a0a",
                            paddingTop: "40px",
                            borderTop: "1px solid #ccc"
                        }}>
                            Related articles
                        </Styled.h3>
                        {content.relatedArticles && content.relatedArticles.map((item) => {
                            console.log(item);
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
                                    <Styled.p sx={{ color: "#636363", display: "inline" }}>{item.content.slice(0, 253)}</Styled.p>
                                    <a sx={{
                                        textDecoration: 'none',
                                        fontFamily: "roboto",
                                        color: "#b08439",
                                        fontSize: "14px",
                                        display: "block"
                                    }} href={item.link} target="_blank" > Read further ..</a>
                                </div>
                            </div>)
                        })}


                    </Box>}

                </Box>

                <div sx={{ textAlign: 'center', marginTop: '30px' }}>
                    <Link to="/admin/awtq-list-content" sx={{ variant: "adminCancelBtn.btn" }}>Back to lists</Link>
                </div>

            </SectionWrapper>
            <AdminFooter />
        </PrivateRoute>
    );
}

export default PreviewContent;
