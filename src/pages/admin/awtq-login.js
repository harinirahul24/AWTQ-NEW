/** @jsx jsx */
import {
    Box,
    Button,
    Flex,
    Image,
    Input,
    Styled,
    jsx
} from "theme-ui";
import React, { useState } from 'react';
import SectionWrapper from '../../components/SectionWrapper'
import SiteLogo from '../../components/SiteLogo'
import USER_IMG from '../../images/user-solid.svg'
import LOCK_IMG from '../../images/lock-solid.svg'
import Notification from '../../components/Notification'
import { navigate } from 'gatsby'
import Seo from '../../components/seo'
const config = require("../../../data/SiteConfig");
function Login() {

    const [loginData, setLoginData] = useState({
        userName: "",
        password: "",
        isError: "",
        errMsg: ""
    })

    const handleLoginData = e => setLoginData({ ...loginData, [e.target.name]: e.target.value })

    const handleAuthLogin = () => {

        if (loginData.userName === config.adminUserName
            && loginData.password === config.adminPass) {
            sessionStorage.setItem("isLoged", "yes");
            navigate('/admin/awtq-list-content');
        }
        else
            setLoginData({ ...loginData, isError: true, errMsg: "User Name or Password is wrong" })
    }

    return <>
        <Seo
            title="Subscription Management - Login"
        />
        <SectionWrapper sectionStyles={{ p: 0 }}>
            <Flex sx={{
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}>
                <Box>
                    <Box sx={{ textAlign: "center" }}>
                        <SiteLogo styles={{
                            width: "180px",
                            height: "50px"
                        }} />
                    </Box>
                    <br />
                    <Box sx={{
                        boxShadow: "0px 0px 5px lightgray",
                        p: "10px 20px",
                        borderRadius: "4px",
                        minWidth: "400px"
                    }}>
                        <Box sx={{ textAlign: "center" }}>
                            <Styled.h3 sx={{
                                letterSpacing: 0,
                                display: "inline-block",
                                color: "#666"
                            }}>
                                Subscription Management
                        </Styled.h3>
                        </Box>
                        <Box sx={{
                            borderTop: "1px solid lightgray",
                            mt: "5px"
                        }}>
                            <br />
                            <Flex sx={{
                                height: "40px",
                                border: "1px solid lightgray",
                                backgroundColor: "ghostwhite"
                            }}>
                                <Flex sx={{
                                    width: "60px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRight: "1px solid lightgray"
                                }}>
                                    <Image
                                        sx={{
                                            width: "22px",
                                            height: "22px",
                                        }}
                                        src={USER_IMG} />
                                </Flex>
                                <Flex sx={{
                                    flex: 1
                                }}>
                                    <Input
                                        sx={{
                                            border: "0px",
                                            m: 0,
                                            height: "100%",
                                            backgroundColor: "transparent"

                                        }}
                                        placeholder="User Name"
                                        name={'userName'}
                                        value={loginData.userName}
                                        onChange={e => handleLoginData(e)}
                                    />
                                </Flex>
                            </Flex>
                            <br />
                            <Flex sx={{
                                height: "40px",
                                border: "1px solid lightgray",
                                backgroundColor: "ghostwhite"
                            }}>
                                <Flex sx={{
                                    width: "60px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRight: "1px solid lightgray"
                                }}>
                                    <Image
                                        sx={{
                                            width: "22px",
                                            height: "22px"
                                        }}
                                        src={LOCK_IMG} />
                                </Flex>
                                <Flex sx={{
                                    flex: 1
                                }}>
                                    <Input
                                        sx={{
                                            border: "0px",
                                            m: 0,
                                            height: "100%",
                                            backgroundColor: "transparent"
                                        }}
                                        placeholder="Password"
                                        type="password"
                                        name={'password'}
                                        value={loginData.password}
                                        onChange={e => handleLoginData(e)}
                                    />
                                </Flex>
                            </Flex>
                            <br />
                            <Box sx={{ textAlign: "center" }}>
                                <Button
                                    onClick={() => handleAuthLogin()}
                                    sx={{
                                        variant: "subscribeContainer.btn",
                                        p: "7px 30px"
                                    }}>
                                    Login
                            </Button>
                            </Box>
                            <br />
                            <Box sx={{ textAlign: "center" }}>
                                {
                                    loginData.errMsg &&
                                    <Notification status={"error"} msg={loginData.errMsg} />
                                }
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </SectionWrapper>
    </>
}


export default Login;