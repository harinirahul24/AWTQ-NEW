/** @jsx jsx */
import {
    Box,
    Flex,
    Styled,
    jsx
} from "theme-ui"
import SectionWrapper from "../SectionWrapper";
import JSON_FOOTER_MENU from '../../site-content/footerMenu.json';
const config = require("../../../data/SiteConfig");
function Footer() {


    return <SectionWrapper sectionStyles={{
        bg: "#313131"
    }}>
        <Flex sx={{

            flexDirection: ['column', null, 'row'],
            flexFlow: "row wrap",

        }}>
            <Box sx={{
                flex: 2,
                order: [3, null, 1],
                pr: "30px",
                '@media screen and (max-width: 767px)': {
                    flex: "1 100%",
                },

            }}>
                <a href="https://heartfulness.org/en/"
                    style={{ fontSize: "inherit", borderStyle: "none", textDecoration: "none !important", border: "0" }}
                >
                    <img src="https://prodcdn.heartfulnessmagazine.com/wp-content/uploads/2021/07/heartfulness-logo-grey-advancing-in-love.png" alt="Heartfulness"
                        sx={{
                            display: "block !important",
                            paddingTop: "42px",
                            width: "250px",
                            '@media screen and (min-width: 992px)': {
                                flex: "1 100%",

                            },
                            '@media screen and (max-width: 600px)': {
                                flex: "1 100%",
                            }
                        }}
                        border="0" hspace="0" vspace="0" height="auto"
                    />
                </a>

                <div sx={{
                    '@media screen and (max-width: 767px)': {
                        flex: "1 100%",
                    },

                }}>
                    <a target="_blank" href="https://www.facebook.com/practiceheartfulness" title="Facebook" rel="noopener">
                        <span sx={{ variant: "Facebook" }}></span>
                        <i class="td-icon-facebook"></i>
                    </a>
                    <a target="_blank" href="https://twitter.com/heartfulness" class="Twitter" title="Twitter" rel="noopener">
                        <span sx={{ variant: "Twitter" }}></span>

                        <i class="td-icon-twitter"></i>
                    </a>
                    <a target="_blank" href="https://www.youtube.com/heartfulness" class="Youtube" title="Youtube" rel="noopener">
                        <span sx={{ variant: "Youtube" }}></span>

                        <i class="td-icon-youtube"></i>
                    </a>
                    <a target="_blank" href="https://linkedin.com/company/heartfulness" class="Linkedin" title="Linkedin" rel="noopener"><span sx={{ variant: "Linkedin" }}></span><i class="td-icon-linkedin"></i></a>
                    <a target="_blank" href="https://instagram.com/heartfulness" class="Instagram share" title="Instagram" rel="noopener"><span sx={{ variant: "Instagram" }}></span><i class="td-icon-instagram"></i></a>
                    <a target="_blank" href="https://t.me/heartfulness" class="Telegram" title="Telegram" rel="noopener"><span sx={{ variant: "Telegram" }}></span><i class="td-icon-telegram"></i></a>
                </div>
            </Box>
            <Box sx={{
                flex: 3,
                order: [1, null, 2],
                '@media screen and (max-width: 767px)': {
                    flex: "1 100%",
                    order: "3",

                },

            }}>
                <div sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}>
                    <h5 sx={{
                        fontFamily: "Roboto",
                        opacity: "0.9",
                        fontSize: "24px",
                        lineHeight: "32px",
                        color: "#fff",
                        borderBottom: "3px solid #ac7f2c",
                        display: "inline-flex",
                        padding: "10px 0px",
                        marginBottom: "0px",
                        paddingRight: "50px",
                    }}>Explore</h5></div>

                <Styled.ul sx={{
                    display: "grid",
                    gridTemplateColumns: "250px 200px 200px",

                    '@media screen and (max-width: 767px)': {
                        flex: "1 100%",
                        display: "block",
                    }
                }}>
                    {
                        Object.keys(JSON_FOOTER_MENU.footerMenu).sort().reverse().map((menu, index) =>
                            <Styled.li key={`${index}-footer-one`}>
                                <Styled.a
                                    sx={{
                                        variant: "footerMenu.title",
                                    }}
                                    href={`${config.heartMaga}${JSON_FOOTER_MENU.footerMenu[index].to}`}>
                                    {JSON_FOOTER_MENU.footerMenu[index].title}
                                </Styled.a>
                            </Styled.li>)
                    }
                </Styled.ul>
            </Box>

        </Flex>
        
        <Box sx={{borderTop: "1px solid #ccc", padding: "12px 0 0 0", margin: "12px 0 0 0"}}>
            <Styled.p sx={{
                fontSize: "14px",
                display: "grid",
                gridTemplateColumns: "709px 200px 200px",

                '@media screen and (max-width: 767px)': {
                    flex: "1 100%",
                    display: "block",

                }
            }}>
                <span sx={{
                    color: "#fff",
                    opacity: "0.7",
                    '@media screen and (max-width: 767px)': {
                        display: "block",
                        textAlign: "center"

                    }
                }}>&#169; Copyrights 2022 All rights reserved.</span>
                <span sx={{
                    '@media screen and (max-width: 767px)': {
                        display: "block",
                        textAlign: "center"

                    }
                }}><Styled.a sx={{ color: "#fff", opacity: "0.7", '&:hover': { textDecoration: "underline" } }} href="https://www.heartfulnessmagazine.com/terms-of-use/">Terms of use</Styled.a></span>
                <span sx={{
                    '@media screen and (max-width: 767px)': {
                        display: "block",

                        textAlign: "center"

                    }
                }}><Styled.a sx={{ color: "#fff", opacity: "0.7", '&:hover': { textDecoration: "underline" }, }} href="https://www.heartfulnessmagazine.com/privacy-policy/">Privacy & Cookie Policy</Styled.a></span>
                
            </Styled.p>
        </Box>
    </SectionWrapper >

}

export default Footer;
