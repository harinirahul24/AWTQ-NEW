import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import LandingPage from '../templates/individual-post'

const IndexPage = (props) => {
  const { myNodeType } = useStaticQuery(graphql`
  query{	
    myNodeType {	
      sectionOne {	
        thought_of_the_week	
      }	
      sectionThree {	
        questions	
      }	
      sectionTwo {	
        thoughts_for_others	
      }
      sectionFour {
        author
      }	
      contentUploadedDate
      title
      socialImage
      bannerImage
      activeContent	
    }	
  }  	
`)
  myNodeType.title = 'A Word A Thought A Question - Heartfulness Magazine'
  return <LandingPage pathContext={{
    content: { ...myNodeType },
    mobileData: {
      isMobileMode: true,
      showArchiveBtn: false,
      socialSharing: true
    }
  }} />
}

export default IndexPage