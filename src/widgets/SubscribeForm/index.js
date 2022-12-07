/** @jsx jsx */
import {
    Box,
    Button,
    Flex,
    Input,
    Label,
    Styled,
    jsx
} from "theme-ui"
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import JSON_REGEX from '../../site-content/regexPattern.json'
import Notification from '../../components/Notification'
import heartsapp from '../../images/heartsapp.png'
import ReCAPTCHA from "react-google-recaptcha";
const config = require("../../../data/SiteConfig");

function SubscribeForm() {

    const [subscriberData, setSubscriberData] = useState({ fullName: "", emailId: "", isAgreed: false, captcha: "" });
    const [subscriberErrMsg, setSubscriberErrMsg] = useState({
        nameErr: "",
        nameValidErr: "",
        emailErr: "",
        emailIdErr: "",
        termsErr: "",
    })
    const [currentSubscriptionType, setCurrentSubscriptionType] = useState('EMAIL');
    const [showLoader, setShowLoader] = useState(false);
    const [subscribeFormStatus, setSubscribeFormStatus] = useState({
        isSuccess: false,
        formErrmsg: ""
    })
    const errStyle = {
        color: "red",
        position: "relative",
        top: "-11px",
        fontFamily: "Lato",
        fontSize: "14px",
    }

    const recaptchaRef = useRef();

    const handleSubriberData = e => {
        setSubscriberData({ ...subscriberData, [e.target.name]: e.target.value })
    }

    const switchSubscriptionType = (type) => {
        setCurrentSubscriptionType(type);
    }

    const validation = () => {
        let nameErr = "", nameValidErr = "", emailErr = "", emailIdErr = "", termsErr = "", captchaErr = "";
        let captchaVal = recaptchaRef.current.getValue();
        const email = /^[a-zA-Z0-9+._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

        //validation

        if (subscriberData.fullName)
            nameErr = "";
        else
            nameErr = "This field is required";

        if (subscriberData.fullName !== "") {
            if (subscriberData.fullName.trim() && new RegExp(JSON_REGEX.onlyAlphabetAndSpace).test(subscriberData.fullName))
                nameValidErr = "";
            else
                nameValidErr = "Please enter a valid name";
        }

        if (subscriberData.emailId)
            emailErr = "";
        else
            emailErr = "This field is required"

        if (subscriberData.emailId !== "") {
            if (subscriberData.emailId && new RegExp(email).test(subscriberData.emailId))
                emailIdErr = "";
            else
                emailIdErr = "Invalid email address. (Only letters (a-z), numbers (0-9) and symbols(+_-) are allowed)"
        }

        if (subscriberData.isAgreed)
            termsErr = "";
        else
            termsErr = "This is required field"

        if (captchaVal)
            captchaErr = "";
        else
            captchaErr = "Please verify that you are not a robot."

        setSubscriberErrMsg({ nameErr, nameValidErr, emailErr, emailIdErr, termsErr, captchaErr });

        return { nameErr, nameValidErr, emailErr, emailIdErr, termsErr, captchaErr }
    }


    const instanceValidate = (type) => {
        const email = /^[a-zA-Z0-9+._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        let nameErr = subscriberErrMsg.nameErr
        let nameValidErr = subscriberErrMsg.nameValidErr
        let emailErr = subscriberErrMsg.emailErr
        let emailIdErr = subscriberErrMsg.emailIdErr
        let termsErr = subscriberErrMsg.termsErr

        if (type === 'name') {
            nameErr = ''
            nameValidErr = ''
            if (subscriberData.fullName)
                nameErr = "";
            else
                nameErr = "This field is required";

            if (subscriberData.fullName !== "") {
                if (subscriberData.fullName.trim() && new RegExp(JSON_REGEX.onlyAlphabetAndSpace).test(subscriberData.fullName))
                    nameValidErr = "";
                else
                    nameValidErr = "Please enter a valid name";
            }

        } else if (type === 'email') {
            emailErr = ''
            emailIdErr = ''
            if (subscriberData.emailId)
                emailErr = "";
            else
                emailErr = "This field is required"

            if (subscriberData.emailId !== "") {
                if (subscriberData.emailId && new RegExp(email).test(subscriberData.emailId))
                    emailIdErr = "";
                else
                    emailIdErr = "Invalid email address. (Only letters (a-z), numbers (0-9) and symbols(+_-) are allowed)"
            }
        } else if (type === 'term') {
            if (subscriberData.isAgreed)
                termsErr = "";
            else
                termsErr = "This is required field"
        }
        setSubscriberErrMsg({ nameErr, nameValidErr, emailErr, emailIdErr, termsErr: termsErr });
    }

    const handlleSubscription = () => {
        const { nameErr, nameValidErr, emailErr, emailIdErr, termsErr, captchaErr } = validation();
        //service call

        if (!(nameErr || nameValidErr || emailErr || emailIdErr || termsErr || captchaErr)) {
            setShowLoader(true);
            typeof window !== "undefined" && window.gtag !== "undefined" && window.gtag("event", "conversion", {
                'send_to': 'AW-944501175/oIQACLia5IACELfjr8ID',
            });
            axios.put(`${config.serviceUrl}/content-subscription/user-subscription`, {
                "subscriberName": subscriberData.fullName,
                "subscriberEmail": subscriberData.emailId,
                "isSubscribed": true,
                "subscriberLanguage": "English",
                "subscriptionTypeId": {
                    "id": "01"
                }
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(res => {
                    setShowLoader(false);
                    const { data } = res;
                    if (data.error) {
                        setSubscribeFormStatus({ ...subscribeFormStatus, formErrmsg: data.message })
                    } else {
                        setSubscribeFormStatus({ ...subscribeFormStatus, isSuccess: true })
                    }
                })
                .catch(err => {
                    setShowLoader(false);
                    setSubscribeFormStatus({ ...subscribeFormStatus, formErrmsg: err.message })
                })
        }
    }


    const [tiLink, setTiLink] = useState()

    useEffect(() => {
        let tryItLink = (window.innerWidth < 1023) ? config.deeplinkingUrl : config.heartsappSiteUrl;
        setTiLink(tryItLink)
    }, []);


    return subscribeFormStatus.isSuccess ?

        <Box sx={{
            variant: "subscribeContainer.box",
            pb: "40px",
            textAlign: "center"
        }}>
            <Styled.h2 sx={{
                fontFamily: "karla",
                fontSize: "33px",
                fontWeight: 300,
                color: "#0a0a0a"
            }}>Thank you.<br /> <span style={{ fontSize: "19px", fontWeight: 400 }}>Your subscription has been successful.</span></Styled.h2>
        </Box>
        :
        <Box sx={{
            variant: "subscribeContainer.box",
            pb: "40px"
        }}>
            <Box sx={{
                textAlign: "center"
            }}>
                <Styled.h3 sx={{
                    fontSize: "30px",
                }}>SUBSCRIBE</Styled.h3>
            </Box>
            <Box>
                <Styled.p sx={{ mb: "5px", fontSize: "14px" }}>
                    Start receiving your weekly inspirations through
                </Styled.p>
                <Box
                    as='form'
                    onSubmit={e => {
                        e.preventDefault()
                        handlleSubscription()
                    }
                    }>

                    <input id="semail" style={{ filter: "grayscale(0.9)", margin: 0, marginTop: "10px" }} onChange={e => switchSubscriptionType('EMAIL')} name='subscriptionType' type={"radio"} checked={currentSubscriptionType === 'EMAIL'} />
                    <label htmlFor='semail' style={{ fontFamily: "roboto", fontSize: "14px", cursor: "pointer" }}>&nbsp;&nbsp;Email</label>

                    &nbsp;&nbsp;&nbsp;&nbsp;

                    <input id="smob" style={{ filter: "grayscale(0.9)", margin: 0, marginTop: "10px" }} onChange={e => switchSubscriptionType('MOBILE')} name='subscriptionType' type={"radio"} checked={currentSubscriptionType === 'MOBILE'} />
                    <label htmlFor='smob' style={{ fontFamily: "roboto", fontSize: "14px", cursor: "pointer" }}>&nbsp;&nbsp;Mobile</label>

                    {currentSubscriptionType === 'EMAIL' && <div>
                        <Label mt={3} htmlFor='fullName'>Name<span sx={{ color: "red" }}>*</span></Label>
                        <Input
                            onChange={e => handleSubriberData(e)}
                            onBlur={e => instanceValidate('name')}
                            value={subscriberData.fullName}
                            name='fullName'
                            mb={3}
                            sx={{ border: (subscriberErrMsg.nameErr || subscriberErrMsg.nameValidErr ? 'solid 1px #ff0000' : 'solid 1px #48515C') }}
                        />
                        {subscriberErrMsg.nameErr && <span style={{ ...errStyle }}>{subscriberErrMsg.nameErr}</span>}
                        {subscriberErrMsg.nameValidErr && <span style={{ ...errStyle }}>{subscriberErrMsg.nameValidErr}</span>}

                        <Label htmlFor='emailId'>Email<span sx={{ color: "red" }}>*</span></Label>
                        <Input
                            onBlur={e => instanceValidate('email')}
                            onChange={e => handleSubriberData(e)}
                            value={subscriberData.emailId}
                            name={'emailId'}
                            mb={3}
                            sx={{ border: (subscriberErrMsg.emailErr || subscriberErrMsg.emailIdErr ? 'solid 1px #ff0000' : 'solid 1px #48515C') }}
                        />
                        
                        {subscriberErrMsg.emailIdErr && <span style={{ ...errStyle }}>{subscriberErrMsg.emailIdErr}</span>}
                        {subscriberErrMsg.emailErr && <span style={{ ...errStyle }}>{subscriberErrMsg.emailErr}</span>}
                        <ReCAPTCHA ref={recaptchaRef} sitekey={config.captchaPublicKey} />

                        {subscriberErrMsg.captchaErr && <span sx={{ margin: '10px 0 0', display: 'inline-block' }} style={{ ...errStyle }}>{subscriberErrMsg.captchaErr}</span>}
                        <br />
                        <Flex>
                            <input
                                onChange={_ => {
                                    setSubscriberData({ ...subscriberData, isAgreed: !subscriberData.isAgreed })
                                }}
                                onBlur={e => instanceValidate('term')}
                                checked={subscriberData.isAgreed}
                                type="checkbox"
                            />
                            <Label sx={{ display: "block", lineHeight: 1.5, letterSpacing: 0 }} pl={1} mb={3}>
                                I agree to<span>
                                    <Styled.a target="_blank" href={config.hfmTerms} sx={{ textDecoration: "underline", color: "#b08439" }}> the terms of use </Styled.a>
                                </span>
                 &
                 <span>
                                    <Styled.a target="_blank" href={config.hfmPolicy} sx={{ textDecoration: "underline", color: "#b08439" }}> privacy policy </Styled.a>
                                </span>
                  of Heartfulness Institute <span sx={{ color: "red" }}>*</span></Label><br />
                        </Flex>
                        {subscriberErrMsg.termsErr && <span style={{ ...errStyle }}>{subscriberErrMsg.termsErr}</span>}
                        <br />

                        <Box sx={{
                            textAlign: "center"
                        }}>
                            {showLoader && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
                            <Button sx={{
                                variant: 'subscribeContainer.btn'
                            }}>
                                Subscribe
                        </Button>
                        </Box>
                        <br />
                        <Box sx={{ textAlign: "center" }}>
                            {
                                subscribeFormStatus.formErrmsg &&
                                <Notification status={"error"} msg={subscribeFormStatus.formErrmsg} />
                            }
                        </Box>
                    </div>
                    }
                    {currentSubscriptionType === 'MOBILE' && <div sx={{
                        textAlign: "center",
                        fontFamily: "roboto",
                        backgroundColor: '#ffffff',
                        padding: '10px 0 20px 0',
                        margin: '10px 0 0 0'
                    }}>
                        <h3 sx={{ fontFamily: "roboto", fontWeight: '500', lineHeight: '26px' }}>Get the weekly inspiration <br />& much more on the go!</h3>
                        <div><img src={heartsapp} /></div>
                        <p sx={{ color: "#6A6A6A", fontSize: '16px', padding: '12px 0', lineHeight: '22px' }}>Meditate with trainer<br />anytime, anywhere</p>
                        <div>
                            <a href={tiLink} sx={{ display: "inline-block", background: "#b08439", borderRadius: "3px", padding: "12px 45px", color: "#ffffff", textDecoration: "none" }}>Try it!</a>
                        </div>
                    </div>
                    }

                    <br />

                </Box>
            </Box>
        </Box>

}

export default SubscribeForm;