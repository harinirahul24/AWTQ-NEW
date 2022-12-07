/** @jsx jsx */
import {
    Box,
    Button,
    Flex,
    Label,
    Styled,
    jsx
} from "theme-ui";
import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionWrapper from "../components/SectionWrapper";
import JSON_UNSUB_LIST from '../site-content/unSubsribeList.json'
import axios from 'axios';
import Notification from '../components/Notification'
import Seo from '../components/seo'
import { Link } from "gatsby"
const config = require("../../data/SiteConfig");

function UnSubscribe() {

    const [emailId, setemailId] = useState("");
    const [reason, setReason] = useState("");
    const [showLoader, setShowLoader] = useState(false);
    const [unsubscriberStatus, setUnsubscriberStatus] = useState({
        isSucess: false,
        msg: ""
    })

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if(urlParams.get('email').indexOf(" ") > 0) {
            setemailId(urlParams.get('email').replace(/ /g, '+'));
        } else {
            setemailId(urlParams.get('email'));
        }
    }, [])

    const handleUnsubscribe = () => {
        if (reason) {
            setShowLoader(true);
            axios.put(`${config.serviceUrl}/content-subscription/user-subscription`, {
                "subscriberEmail": emailId,
                "isSubscribed": false,
                "subscriberLanguage": "English",
                "subscriptionTypeId": {
                    "id": "01"
                }
            },
                { ...config.serviceHeader })
                .then(res => {
                    setShowLoader(false);
                    const { data } = res;
                    if (data.error)
                        setUnsubscriberStatus({ isSucess: false, msg: data.message })
                    else
                        setUnsubscriberStatus({ isSucess: true, msg: data.message })
                })
                .catch(err => {
                    setShowLoader(false);
                    setUnsubscriberStatus({ isSucess: false, msg: err.message })
                })
        }
        else
            setUnsubscriberStatus({ isSucess: false, msg: 'Pleas select the option' })
    }

    return <>
        <Seo
            title="Unsubscription"
        />
        <Header />
        <SectionWrapper>
            <Box sx={{
                textAlign: "center"
            }}>
                <Styled.h3>
                    Unsubscribe
                </Styled.h3>
                <Styled.p>
                    You will no longer receive emails from this list.
                <br />
                    {!unsubscriberStatus.isSucess && <span>If you have a moment, please let us know why you are unsubscribing.</span>}
                </Styled.p>
                <br />
            </Box>
            {
                !unsubscriberStatus.isSucess &&
                <Flex sx={{
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <form>
                        {
                            JSON_UNSUB_LIST.list.map((list, index) =>
                                <Box mb={3}>
                                    <Label sx={{
                                        fontSize: "17px",
                                        letterSpacing: 0
                                    }}>
                                        <input
                                            onChange={() => setReason(list.title)}
                                            checked={reason === list.title}
                                            sx={{
                                                marginRight: "16px",
                                                position: "relative",
                                                top: "2px",
                                                filter: "grayscale(0.9)"
                                            }}
                                            type="radio"
                                            value={list.title} />
                                        {list.title}
                                    </Label>
                                </Box>)
                        }
                    </form>
                    <Box>
                        <br />
                        {showLoader && <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
                        <Button
                            onClick={() => handleUnsubscribe()}
                            sx={{
                                variant: 'subscribeContainer.btn'
                            }}>Submit</Button>
                    </Box>
                </Flex>
            }
            {unsubscriberStatus.msg &&
                <Flex sx={{ justifyContent: "center", marginTop: "20px" }}>
                    <Notification status={unsubscriberStatus.isSucess ? "success" : "error"} msg={unsubscriberStatus.msg} />
                </Flex>}
            {unsubscriberStatus.isSucess &&
                <Box sx={{
                    textAlign: "center"
                }}>
                    <br />
                    <Link to="/" sx={{
                        variant: "adminCancelBtn.btn"
                    }}>Back</Link>
                </Box>}
        </SectionWrapper>
        <Footer />
    </>

}


export default UnSubscribe;