/** @jsx jsx */
import {
    Styled,
    jsx
} from "theme-ui"
import React from 'react';


const NotificationBar = ({ status, msg = "", ...props }) => {

        const styles = {
            fontFamily: "Lato",
            fontSize: "15px",
        }

        switch (status) {
            case "success":
                return <Styled.p {...props} sx={{
                    ...styles,
                    variant: "ack.success"
                }}>
                    <strong>Success! </strong>{msg}
                </Styled.p>
            case "error":
                return <Styled.p {...props} sx={{
                    ...styles,
                    variant: "ack.error"
                }}>
                    <strong>Error! </strong>{msg}
                </Styled.p>
            default:
            // code block
        }
    
}


function Notification(props) {
    return <NotificationBar {...props} />
}

export default Notification;