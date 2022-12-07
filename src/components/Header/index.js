/** @jsx jsx */
import {
    Box,
    Flex,
    Image,
    Styled,
    jsx
} from "theme-ui"
import React from 'react';
import SectionWrapper from "../SectionWrapper";
import JSONmenu from '../../site-content/headerMenu.json';
import { useState, useRef, useEffect } from 'react';
import SiteLogo from "../SiteLogo";
import { useStaticQuery, graphql } from "gatsby";
import menu_bar_svg from '../../images/menu-bar.svg'
import menu_close_svg from '../../images/menu-close.svg'
const config = require("../../../data/SiteConfig");
function Header() {

    const [applySticky, setApplySticky] = useState(false);
    const [holdMenuIndex, setHoldMenuIndex] = useState("");
    const [showMenu, setShowMenu] = useState();
    const headerRef = useRef();

    const { allFile } = useStaticQuery(graphql`
    query {
        allFile(filter: {
          relativeDirectory: {eq: "header-images"}}) 
        {
          edges {
            node {
              childImageSharp {
                fluid {
                  originalName
                  src
                }
              }
            }
          }
        }
      }
`)
    useEffect(() => setShowMenu(window.innerWidth > 991 ? true : false), [])

    useEffect(() => window.addEventListener('scroll', handleHeaderSticky), []);

    const handleHeaderSticky = () => {
        if (window.innerWidth > 911) {
            if (headerRef.current && window.pageYOffset > headerRef.current.offsetTop)
                setApplySticky(true)
            else
                setApplySticky(false)
        }
    }

    const findImageSrcAndReturnImgTag = imageName => {
        const [imgData] = allFile.edges.filter(
            id => id.node.childImageSharp.fluid.originalName === imageName);

        if (imgData)
            return <Image src={imgData.node.childImageSharp.fluid.src} />
        else
            return <Image src={""} alt="img_not_foud" />
    }

    const displaySubMenu = (subMenu, index) => {

        if (subMenu[0].hasOwnProperty('displayPicName'))
            return <Styled.ul sx={{
                variant: "headerMenu.ulChild",
                display: holdMenuIndex === index ? 'flex' : 'none',
                flexDirection: ["column", null, null, 'row'],
                position: ['static', null, null, 'absolute']
            }}>
                {
                    subMenu.map((sm, smIndex) =>
                        <Styled.li
                            key={`${smIndex}submenu`}
                            sx={{ flex: 1, justifyContent: "center", display: "flex" }}>
                            <Styled.a
                                href={`${config.heartMaga}${sm.to}`}
                                sx={{
                                    variant: "headerMenu.title",
                                    textAlign: "center"
                                }}>
                                {findImageSrcAndReturnImgTag(sm.displayPicName)}
                                <br /><br />
                                {sm.title}
                            </Styled.a>
                        </Styled.li>
                    )
                }
            </Styled.ul>
        else
            return <Styled.ul sx={{
                variant: "headerMenu.ulChildSp",
                display: holdMenuIndex === index ? 'flex' : 'none',
                bg: "#fff",
            }}>
                {
                    subMenu.map((sm, smIndex) =>
                        <Styled.li
                            key={`${smIndex}submenu`}
                            sx={{ flex: 1, justifyContent: "left", display: "flex" }}>
                            <Styled.a
                                href={`${config.heartMaga}${sm.to}`}
                                sx={{
                                    variant: "headerMenu.title",
                                    width: "100%",
                                    padding: "12px !important",
                                    fontSize: "12px",
                                    m: 0,
                                    '&:hover': {
                                        bg: "#f9f9f9",
                                        color: "primary"
                                    },
                                }}>
                                {sm.title}
                            </Styled.a>
                        </Styled.li>
                    )
                }
            </Styled.ul>

    }


    return <>
        <SectionWrapper sectionStyles={{ p: 0 }}>
            <Box sx={{
                textAlign: "center",
                mt: "20px",
                display: ['none', null, null, 'block']
            }}>
                <SiteLogo styles={{ width: "350px" }} />
            </Box>
        </SectionWrapper>
        <SectionWrapper sectionStyles={{
            p: 0,
            variant: applySticky ? "headerMenu.sticky" : ""
        }} >

            <header ref={headerRef} sx={{
                position: 'relative',
                borderBottom: applySticky ? 0 : "1px solid lightgray"
            }}>
                <Flex>
                    <Box sx={{
                        display: ["block", null, null, applySticky ? "block" : "none"]
                    }}>
                        <SiteLogo styles={{ width: "200px", height: "53px", mt: "5px" }} />
                    </Box>
                    <Flex sx={{ flex: 1, justifyContent: ['flex-end', null, null, 'initial'] }}>

                        {/* mobile menu icon */}
                        <Box sx={{
                            display: ['block', null, null, 'none']
                        }}>
                            {
                                !showMenu ?
                                    <Image
                                        onClick={() => setShowMenu(true)}
                                        sx={{
                                            variant: "headerMenu.mobileMenuIcon",
                                            display: !showMenu ? 'block' : 'none'
                                        }}
                                        src={menu_bar_svg} />
                                    :
                                    <Image
                                        onClick={() => setShowMenu(false)}
                                        sx={{
                                            variant: "headerMenu.mobileMenuIcon",
                                            display: !showMenu ? 'none' : 'block'
                                        }}
                                        sx={{ variant: "headerMenu.mobileMenuIcon" }}
                                        src={menu_close_svg} />
                            }
                        </Box>
                        {
                            showMenu &&
                            <Styled.ul
                                onMouseLeave={() => setHoldMenuIndex("")}
                                sx={{
                                    '@media screen and (max-width: 911px) and (min-width: 0px)': {
                                        variant: 'headerMenu.mobileMenuBox'
                                    },
                                    '@media screen and (min-width: 992px)': {
                                        variant: 'headerMenu.ulParent'
                                    },
                                }}>
                                {
                                    JSONmenu.menus.map((menu, index) =>
                                        <Styled.li
                                            key={`${index} _menu`}
                                            sx={{
                                                position: menu.hasSubMenu === "y" ?
                                                    (menu.subMenu[0].hasOwnProperty('displayPicName') ? 'static' : 'relative') : 'static'
                                            }}
                                        >
                                            <Styled.a
                                                onMouseEnter={() => setHoldMenuIndex(index)}
                                                href={`${config.heartMaga}${menu.to}`}
                                                sx={{
                                                    variant: "headerMenu.title",
                                                    fontSize: applySticky ? "13px" : "14px",
                                                }}
                                            >
                                                {menu.title}
                                            </Styled.a>
                                            {menu.hasSubMenu === "y" && displaySubMenu(menu.subMenu, index)}
                                        </Styled.li>
                                    )
                                }
                            </Styled.ul >
                        }
                    </Flex >
                </Flex >
            </header >
        </SectionWrapper >
    </>
}


export default Header;