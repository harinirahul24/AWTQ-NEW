/** @jsx jsx */
import {
    Box,
    Button,
    Flex,
    Label,
    Input,
    Styled,
    Textarea,
    jsx
} from "theme-ui";
import React, { useState, useEffect } from 'react'
import SectionWrapper from '../../components/SectionWrapper'
import AdminHeader from "../../components/AdminHeader";
import axios from 'axios';
import Notification from '../../components/Notification'
import PrivateRoute from '../../components/PrivateRoute'
import AdminFooter from "../../components/AdminFooter";
import Seo from '../../components/seo'
import { Link } from "gatsby"

const config = require("../../../data/SiteConfig");


function AddContent({ location }) {

    const [newContent, setNewContent] = useState({
        title: "",
        uploadedDate: "",
        bannerUrl: "",
        socialImgUrl: "",
        aWord: "",
        aThought: "",
        aQuestion: "",
        emailTemplate: "",
        activeContent: true,
        author: "",
        relatedArticles: []
    });
    const [showLoader, setShowLoader] = useState(false);
    const [formStatus, setFormStatus] = useState({
        isSucess: false,
        msg: ""
    });

    useEffect(() => {
        const { state } = location;
        if (state && state.hasOwnProperty('title')) {
            setNewContent({
                title: state.title,
                uploadedDate: state.contentUploadedDate,
                bannerUrl: state.bannerImage,
                socialImgUrl: state.socialImage,
                aWord: state.sectionOne.thought_of_the_week,
                aThought: state.sectionTwo.thoughts_for_others,
                aQuestion: state.sectionThree.questions,
                emailTemplate: state.contentEmailTemplate,
                scheduledContentId: state.scheduledContentId,
                activeContent: state.activeContent,
                author: state.sectionFour.author,
                relatedArticles: JSON.stringify(state.relatedArticles)
            })
        }
    }, [])

    const handleNewContetData = e => {
        if (e.target.name === 'uploadedDate') {
            const [year, month, date] = e.target.value.split('-');
            setNewContent({ ...newContent, uploadedDate: `${date}/${month}/${year}` })
        }
        else
            setNewContent({ ...newContent, [e.target.name]: e.target.value })
    }

    const chnageDateFormat = data => {
        const [date, month, year] = data.split('/');
        return `${year}-${month}-${date}`
    }

    const submitNewContent = () => {
        //validation
        let isError = false;
        for (const feildName of Object.keys(newContent)) {
            if (!newContent[feildName]) {
                setFormStatus({ isSucess: false, msg: "Please enter all the fields" });
                isError = true;
                break;
            }
        }
        if (!isError) {
            const requestPayload = {
                contentEmailTemplate: newContent.emailTemplate,
                contentUploadedDate: newContent.uploadedDate,
                contentLanguage: "English",
                isActiveContent: newContent.activeContent,
                scheduledContentId: newContent.scheduledContentId,
                subscriptionTypeId: {
                    id: "01"
                },
                title: newContent.title,
                bannerImage: newContent.bannerUrl,
                socialImage: newContent.socialImgUrl,
                sectionOne:
                {
                    "thought_of_the_week": newContent.aWord
                }
                ,
                sectionTwo:
                {
                    "thoughts_for_others": newContent.aThought
                }
                ,
                sectionThree:
                {
                    "questions": newContent.aQuestion
                },
                sectionFour:
                {
                    "author": newContent.author
                },
                relatedArticles: JSON.parse(newContent.relatedArticles)
            }

            setShowLoader(true);
            axios.put(`${config.serviceUrl}/content-subscription/contents`, { ...requestPayload }, { ...config.serviceHeader })
                .then(res => {
                    const { data } = res;
                    setShowLoader(false);
                    if (!data.error)
                        setFormStatus({ isSucess: true, msg: "Submited" })
                    else
                        setFormStatus({ isSucess: false, msg: data.message })
                })
                .catch(err => {
                    setShowLoader(false);
                    setFormStatus({ isSucess: false, msg: err.message })
                })
        }

    }
    return <PrivateRoute>
        <Seo
            title="Add, Edit - Content"
        />
        <AdminHeader pageName={"Add Content"} />
        <SectionWrapper>
            <Box sx={{
                variant: "addNewContent.outerBox"
            }}>
                <Box mb={2} sx={{ textAlign: "center" }}>
                    <Styled.h3 sx={{
                        display: "inline-block",
                        borderBottom: "1px solid lightgray",
                        pb: "2px",
                        letterSpacing: 0
                    }}>
                        Add New Content
                </Styled.h3>
                </Box>
                <Flex sx={{
                    flexDirection: ['column', null, null, 'row']
                }}>
                    <Box mb={3} sx={{
                        flex: 1,
                        paddingRight: [0, null, null, "10px"]

                    }}>
                        <Label htmlFor='title'>Title<span sx={{ color: "red" }}>*</span></Label>
                        <Input
                            onChange={e => handleNewContetData(e)}
                            value={newContent.title}
                            name={'title'}
                        />
                    </Box>
                    <Box mb={3} sx={{
                        flex: 1,
                        paddingLeft: [0, null, null, "10px"]
                    }}>
                        <Label htmlFor='uploadedDate'>Date<span sx={{ color: "red" }}>*</span></Label>
                        <Input
                            onChange={e => handleNewContetData(e)}
                            value={chnageDateFormat(newContent.uploadedDate)}
                            name={'uploadedDate'}
                            type={'date'}
                        />
                    </Box>
                </Flex>
                <Flex sx={{
                    flexDirection: ['column', null, null, 'row']
                }}>
                    <Box mb={3} sx={{
                        flex: 1,
                        paddingRight: [0, null, null, "10px"]
                    }}>
                        <Label htmlFor='bannerUrl'>Banner Image URL<span sx={{ color: "red" }}>*</span></Label>
                        <Input
                            onChange={e => handleNewContetData(e)}
                            value={newContent.bannerUrl}
                            name={'bannerUrl'}
                        />
                    </Box>
                    <Box mb={3} sx={{
                        flex: 1,
                        paddingLeft: [0, null, null, "10px"]
                    }}>
                        <Label htmlFor='socialImgUrl'>Social Image URL<span sx={{ color: "red" }}>*</span></Label>
                        <Input
                            onChange={e => handleNewContetData(e)}
                            value={newContent.socialImgUrl}
                            name={'socialImgUrl'}
                        />
                    </Box>
                </Flex>
                <Box>
                    <Box mb={3}>
                        <Label htmlFor='author'>Author<span sx={{ color: "red" }}>*</span></Label>
                        <Input
                            onChange={e => handleNewContetData(e)}
                            value={newContent.author}
                            name={'author'}
                        />
                    </Box>
                    <Box mb={3}>
                        <Label htmlFor='aWord'>A Word<span sx={{ color: "red" }}>*</span></Label>
                        <Textarea
                            onChange={e => handleNewContetData(e)}
                            value={newContent.aWord}
                            name={'aWord'}
                        />
                    </Box>
                    <Box mb={3}>
                        <Label htmlFor='aThought'>A Thought<span sx={{ color: "red" }}>*</span></Label>
                        <Textarea
                            onChange={e => handleNewContetData(e)}
                            value={newContent.aThought}
                            name={'aThought'}
                        />
                    </Box>
                    <Box mb={3}>
                        <Label htmlFor='aQuestion'>A Question<span sx={{ color: "red" }}>*</span></Label>
                        <Textarea
                            onChange={e => handleNewContetData(e)}
                            value={newContent.aQuestion}
                            name={'aQuestion'}
                        />
                    </Box>
                    <Box mb={3}>
                        <Label htmlFor='emailTemplate'>Email template<span sx={{ color: "red" }}>*</span></Label>
                        <Textarea
                            onChange={e => handleNewContetData(e)}
                            value={newContent.emailTemplate}
                            name={'emailTemplate'}
                        />
                    </Box>
                    <Box mb={3}>
                        <Label htmlFor='relatedArticles'>Related articles<span sx={{ color: "red" }}>*</span></Label>
                        <Textarea
                            onChange={e => handleNewContetData(e)}
                            value={newContent.relatedArticles}
                            name={'relatedArticles'}
                        />
                    </Box>
                </Box>
                <br />
                <Box mb={4} sx={{ textAlign: "center" }}>
                    {showLoader && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
                    <Link to="/admin/awtq-list-content" sx={{
                        variant: "adminCancelBtn.btn"
                    }}>Cancel</Link>
                    <Button
                        onClick={submitNewContent}
                        sx={{ variant: "subscribeContainer.btn" }}>Submit</Button>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                    {
                        formStatus.msg &&
                        <Notification status={formStatus.isSucess ? "success" : "error"} msg={formStatus.msg} />
                    }
                </Box>
            </Box>
        </SectionWrapper>
        <AdminFooter />
    </PrivateRoute>
}

export default AddContent;