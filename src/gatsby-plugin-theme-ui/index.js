
export default {
    breakpoints: ["576px", "768px", "992px", "1200px"],
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#b08439'
    },
    fonts: {
        karla: "karla",
        menuTitle: "roboto",
    },
    styles: {
        root: {
            margin: "0px",
        },
        a: {
            textDecoration: 'none',
            fontFamily: "roboto",
        },
        ul: {
            m: 0,
            p: 0
        },
        li: {
            listStyleType: 'none',
            m: 0
        },
        h1: {
            fontFamily: "karla",
            fontSize: "31px",
            fontWeight: 400,
            color: "#333",
            mt: "10px",
            mb: "10px"
        },
        h3: {
            fontFamily: "karla",
            fontSize: "24px",
            color: "primary",
            fontWeight: 700,
            margin: "10px 0",
            letterSpacing: "1px"
        },
        h4: {
            fontFamily: "roboto",
            fontSize: "16px",
            fontWeight: 700,
            color: "#424242",
            m: "4px 7px;"
        },
        h6: {
            fontFamily: 'karla',
            fontWeight: 400,
            fontSize: "16px",
            letterSpacing: "1px",
            lineHeight: 1.6,
            m: "12px 0"
        },
        p: {
            fontSize: "15px",
            fontFamily: "roboto",
            color: "#000",
            letterSpacing: "0px",
            lineHeight: 1.8,
            mb: "10px",
            mt: 0
        }
    },
    label: {
        fontSize: "14px",
        fontFamily: "roboto",
        letterSpacing: 1
    },
    input: {
        height: "35px",
        bg: "#fff",
        marginTop: "6px",
        borderColor: "#48515C",
        '&:focus': {
            borderColor: "gray",
            outline: "none"
        }
    },
    textarea: {
        mt: "6px",
        borderColor: "#48515C",
        '&:focus': {
            borderColor: "gray",
            outline: "none"
        }
    },
    headerMenu: {
        sticky: {
            position: "fixed",
            width: "100%",
            backgroundColor: "#fff",
            borderBottom: "1px solid lightgray",
            top: "0px",
            left: "0px",
            animation: "smoothScroll 0.5s forwards",
            zIndex: "1000"
        },
        ulParent: {
            display: 'flex',
            flexDirection: ['column', null, null, 'row'],
            alignItems: "center",
            flex: 1,
            justifyContent: "space-evenly"
        },
        ulChild: {
            left: "0px",
            width: "100%",
            top: "100%",
            zIndex: 1000,
            backgroundColor: "#fff",
            boxShadow: "0px 0px 5px lightgrey",
            padding: "10px",
            borderRadius: "4px",
        },
        ulChildSp: {
            position: ['static', null, null, 'absolute'],
            left: "0px",
            // width: "100%",
            top: "100%",
            zIndex: 1000,
            flexDirection: "column",
            width: "210px",
            boxShadow: "0px 0px 5px lightgray",
            p: 0
        },
        title: {
            fontFamily: "Roboto Condensed",
            fontWeight: 500,
            display: "block",
            letterSpacing: "1px",
            padding: ["13px 10px", null, null, "20px 10px"],
            borderBottom: ["1px solid lightgray", null, null, 0],
            ml: "10px",
            fontSize: "14px",
            color: "#222",
            textTransform: "uppercase",
            '&:hover': {
                color: "primary",
            },
        },
        mobileMenuBox: {
            position: "absolute",
            right: "0px",
            top: "100%",
            backgroundColor: "#fff",
            width: "320px",
            border: "5px solid #d2d2d2",
            borderTop: 0,
            zIndex: 2000
        },
        mobileMenuIcon: {
            width: "35px",
            height: "25px",
            mt: "16px"
        }
    },
    footerMenu: {
        title: {
            display: "block",
            fontSize: "15px",
            opacity: "0.9px",
            textTransform: "uppercase",
            fontFamily: "karla",
            color: "#fff",
            padding: "10px",
            letterSpacing: "1px",
            '&:hover': {
                textDecoration: "underline",
            },
        }
    },
    subscribeContainer: {
        box: {
            padding: "20px 30px",
            border: "1px solid",
            borderColor: "#b08439",
            bg: "#fafafa"
        },
        btn: {
            color: "#fff",
            padding: "12px 45px",
            letterSpacing: 0,
            fontFamily: "roboto",
            background: "#b08439",
            borderRadius: "3px",
            '&:focus': {
                outline: "none"
            },
            '&:hover': {
                cursor: 'pointer',
                boxShadow: "0px 0px 5px gray"
            }
        }
    },
    scoBtn: {
        btn: {
            display: "inline-block",
            padding: "12px 40px",
            backgroundColor: "#d0ae5e",
            mt: "2px",
            fontSize: "20px",
            color: "#fff",
            cursor: "pointer"
        }
    },
    adminCancelBtn: {
        btn: {
            display: "inline-block",
            padding: "12px 45px",
            letterSpacing: 0,
            fontFamily: "roboto",
            borderRadius: "3px",
            '&:focus': {
                outline: "none"
            },
            '&:hover': {
                cursor: 'pointer',
                boxShadow: "0px 0px 5px gray"
            },
            textDecoration: "none",
            border: "1px solid rgb(176, 132, 57)",
            color: "rgb(176, 132, 57)",
            marginRight: "20px"
        }
    },
    ack: {
        success: {
            color: "#155724",
            backgroundColor: "#d4edda",
            borderColor: "#c3e6cb",
            padding: "10px 35px",
            borderRadius: "4px",
        },
        error: {
            color: "#721c24",
            backgroundColor: "#f8d7da",
            borderColor: "#f5c6cb",
            padding: "10px 35px",
            borderRadius: "4px",
        }
    },
    addNewContent: {
        outerBox: {
            maxWidth: "940px",
            margin: "auto",
            boxShadow: "0px 0px 5px lightgrey",
            padding: "10px 20px",
            borderRadius: "4px"
        }
    },
    accordion__button: {
        display: "inline-block",
        position: "relative",
        cursor: "pointer"
    },
    reverse_arrow: {
        content: '""',
        position: 'absolute',
        right: "-10px",
        top: '10px',
        display: 'block',
        width: "0",
        height: "0",
        borderLeft: "5px solid transparent",
        borderRight: "5px solid transparent",
        borderBottom: "5px solid #c5c5c5",
        transition: 'transform 300ms',

    },
    arrow: {
        content: '""',
        position: 'absolute',
        right: "-10px",
        top: '10px',
        display: 'block',
        width: "0",
        height: "0",
        borderLeft: "5px solid transparent",
        borderRight: "5px solid transparent",
        borderTop: "5px solid #c5c5c5",
        transition: 'transform 300ms',
    },
    parentContainer: {
        flexFlow: "row wrap",
        alignItems: "stretch",
        display: "flex",
        paddingBottom: "30px"
    },
    truncate: {
        display: "inline-block",
        maxWidth: "300px",
        maxHeight: "157px",
        overflow: "hidden",
        textOverflow: "ellipsis"
    },
    Facebook: {
        content: "",
        backgroundImage: "url(https://prodcdn.heartfulnessmagazine.com/wp-content/uploads/2021/07/Magazine_Icons_All.png)",
        width: "21px",
        display: "block",
        height: "47px",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        marginRight: " 12px",
        float: "left",
        borderRadius: "50%",
        backgroundPosition: "53% 5%"

    },
    Twitter: {
        content: "",
        backgroundImage: "url(https://prodcdn.heartfulnessmagazine.com/wp-content/uploads/2021/07/Magazine_Icons_All.png)",
        width: "33px",
        display: "block",
        height: "47px",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        marginRight: " 12px",
        float: "left",
        borderRadius: "50%",
        backgroundPosition: "57% 4%"

    },
    Youtube: {
        content: "",
        backgroundImage: "url(https://prodcdn.heartfulnessmagazine.com/wp-content/uploads/2021/07/Magazine_Icons_All.png)",
        width: "21px",
        display: "block",
        height: "47px",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        marginRight: " 12px",
        float: "left",
        borderRadius: "50%",
        backgroundPosition: "65% 4%"

    },
    Linkedin: {
        content: "",
        backgroundImage: "url(https://prodcdn.heartfulnessmagazine.com/wp-content/uploads/2021/07/Magazine_Icons_All.png)",
        width: "21px",
        display: "block",
        height: "47px",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        marginRight: " 12px",
        float: "left",
        borderRadius: "50%",
        backgroundPosition: "69% 4%"

    },
    Instagram: {
        content: "",
        backgroundImage: "url(https://prodcdn.heartfulnessmagazine.com/wp-content/uploads/2021/07/Magazine_Icons_All.png)",
        width: "28px",
        display: "block",
        height: "47px",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        marginRight: " 12px",
        float: "left",
        borderRadius: "50%",
        backgroundPosition: "61% 4%"

    },
    Telegram: {
        content: "",
        backgroundImage: "url(https://prodcdn.heartfulnessmagazine.com/wp-content/uploads/2021/07/Magazine_Icons_All.png)",
        width: "21px",
        display: "block",
        height: "47px",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        marginRight: " 12px",
        float: "left",
        borderRadius: "50%",
        backgroundPosition: "97% 78%"


    }
}