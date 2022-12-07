/** @jsx jsx */
import {
    Box,
    Styled,
    jsx
} from "theme-ui"
import { Link } from 'gatsby'
const config = require("../../../data/SiteConfig");

function ShareWithSocialMedia({ showSubscribeBtn = true, smLink, mobileData }) {

    const td = {
        textDecoration: "underline",
        color: "#636363",
        cursor: "pointer",
        margin: "0 0 0 5px",
        display: "inline-block"
    };

    const gtag_report_conversion = (url) => {
        typeof window !== "undefined" && window.gtag !== "undefined" && window.gtag("event", "conversion", {
            'send_to': 'AW-944501175/oIQACLia5IACELfjr8ID',
        });
        window.location = config.siteUrl + '/' + url;
        return false;
      }

    return <Box sx={{
        maxWidth: ["100%", null, null, null, "80%"],
        margin: "50px auto 0",
        textAlign: "center",
        padding: "30px 20px",
        border: "2px solid",
        borderColor: "primary"
    }}>
        <Styled.p sx={{
            fontSize: "18px",
            color: "#636363",
        }}>
            You can inspire others too by sharing this weekly newsletter on
            <br />
                <Styled.a
                    href={`${config.shareWithSocailMedia.fb}${smLink}`}
                    target="_blank"
                    sx={{ ...td }}
                >
                    Facebook
            </Styled.a>,
                <Styled.a
                    href={`${config.shareWithSocailMedia.twitter}${smLink}`}
                    target="_blank"
                    sx={{ ...td }}>
                    Twitter
                </Styled.a> and
                <Styled.a
                    href={`${config.shareWithSocailMedia.whatsApp}${smLink}`}
                    target="_blank"
                    sx={{ ...td }}>
                    WhatsApp
                </Styled.a>
        </Styled.p>
        {showSubscribeBtn && !mobileData.isMobileMode &&
            <a onClick={() => gtag_report_conversion('subscription')}
                style={{
                    display: "inline-block",
                    padding: "12px 40px",
                    backgroundColor: "#b08439",
                    marginTop: "10px",
                    color: "#fff",
                    cursor: "pointer",
                    fontFamily: "roboto",
                    fontSize: "20px",
                    fontWeight: 300,
                    textDecoration: 'none'
                }}
            >
                Subscribe
        </a>}

        {mobileData.isMobileMode && mobileData.showArchiveBtn &&
            <Link to="/m/archive"
                style={{
                    display: "inline-block",
                    padding: "12px 40px",
                    backgroundColor: "#b08439",
                    marginTop: "10px",
                    color: "#fff",
                    cursor: "pointer",
                    fontFamily: "roboto",
                    fontSize: "20px",
                    fontWeight: 300,
                    textDecoration: 'none'
                }}
            >
                View Archives
            </Link>}
    </Box>
}

export default ShareWithSocialMedia