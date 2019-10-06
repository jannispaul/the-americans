import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

// import styled from "styled-components"
import "../theme/font-face.css"
import "../theme/styles.css"

import Navigation from "./Navigation"
import Footer from "./Footer"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Navigation
        siteTitle={data.site.siteMetadata.title}
        logocolor={props.logocolor}
      />
      <main>{props.children}</main>
      <Footer></Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
