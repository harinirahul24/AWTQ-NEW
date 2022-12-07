/** @jsx jsx */
import {
    Box,
    Button,
    Flex,
    Styled,
    jsx
} from "theme-ui"
import React from 'react';
import SectionWrapper from '../SectionWrapper'
import JSON_ADMIN_MENU from '../../site-content/adminHeader.json'
import SiteLogo from '../SiteLogo'
import { Link } from 'gatsby'
function AdminHeader({ pageName = "Weekly Inspiration" }) {

    const logout = () => {
        sessionStorage.clear();
        window.location.reload();
    }

    return <>
        <Box sx={{
            backgroundColor: "#666",
            padding: "4px 10px"
        }}>
            <Flex>
                <Flex>
                    <SiteLogo styles={{ width: "180px", height: "50px" }} />
                </Flex>
                <Flex sx={{
                    alignItems: "center"
                }}>
                    <Styled.ul sx={{
                        display: 'flex'
                    }}>
                        {
                            JSON_ADMIN_MENU.menus.map((menu, index) =>
                                <Styled.li key={`${index}-admin-header`}>
                                    <Link
                                        style={{
                                            textDecoration: 'none',
                                            color: "#fff",
                                            fontSize: "18px",
                                            padding: "0px 17px",
                                            fontFamily: "karla",
                                        }}
                                        to={menu.to}>
                                        {menu.title}
                                    </Link>
                                </Styled.li>)
                        }
                    </Styled.ul>
                </Flex>
                <Flex sx={{
                    marginLeft: "auto",
                    alignItems: "center"
                }}>
                    <Button onClick={() => logout()} sx={{
                        color: "#fff",
                        fontSize: "18px",
                        padding: "0px 17px",
                        fontFamily: "karla",
                        bg: "transparent",
                        cursor: "pointer",
                        outline: "none"
                    }}>
                        Logout
                </Button>
                </Flex>
            </Flex>
        </Box>
        <SectionWrapper sectionStyles={{ p: "10px 0", bg: "ghostwhite" }}>
            <Styled.h3 sx={{
                margin: 0,
                color: "#666"
            }}>{pageName}</Styled.h3>
        </SectionWrapper>
    </>
}

export default AdminHeader;