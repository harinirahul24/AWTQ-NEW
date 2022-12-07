/** @jsx jsx */
import {
  Image,
  Styled,
  jsx
} from "theme-ui"
import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
const config = require("../../../data/SiteConfig");

function SiteLogo({ styles = { width: "50%" } }) {

  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "hfn-magazine-logo.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
  }
`)

  return <Styled.a href={`${config.heartMaga}`}>
     <Image sx={{ ...styles }} src={data.file.childImageSharp.fluid.src} />
</Styled.a>
}

export default SiteLogo;