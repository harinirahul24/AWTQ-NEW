/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box } from 'theme-ui'


function SectionWrapper({ children, sectionStyles, boxStyles }) {
    return <section sx={{ padding: "40px 0px", ...sectionStyles }}>
        <Box sx={{
            maxWidth: ["100%", "540px", "720px", "960px", "1140px"],
            paddingLeft: "15px",
            paddingRight: "15px",
            marginLeft: "auto",
            marginRight: "auto",
            ...boxStyles
        }}>
            {children}
        </Box>
    </section>
}

export default SectionWrapper;