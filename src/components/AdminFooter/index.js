/** @jsx jsx */
import {
    Box,
    Styled,
    jsx
} from "theme-ui"
import React from 'react';
import SectionWrapper from "../SectionWrapper";


function AdminFooter() {
    return <SectionWrapper sectionStyles={{ p: 0,marginBottom:"15px" }}>
        <Box sx={{
            bg:"ghostwhite",
            padding:"10px 0px",
            textAlign:"center",
            borderTop:"1px solid lightgray",
            borderBottom:"1px solid lightgray"
        }}> 
            <Styled.p sx={{
                margin:0
            }}>Copyright © 2022 Heartfulness Education Trust. All rights reserved.</Styled.p>
        </Box>
    </SectionWrapper>
}

export default AdminFooter;