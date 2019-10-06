import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import "../theme/font-face.css"
import "../theme/styles.css"

import Navigation from "./Navigation"
import Footer from "./Footer"

const StyledMain = styled.main`
  max-width: 700px;
  margin: auto;
  margin-top: 100px;
  padding: 20px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MyTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navigation siteTitle={data.site.siteMetadata.title} />
      <StyledMain>{children}</StyledMain>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
