import React, { Component } from "react"
import { graphql } from "gatsby"
import propTypes from "prop-types"

import Layout from "../components/Layout"
import styled from "styled-components"
import SmallLabel from "../components/SmallLabel"
import LatestEpisodes from "../components/LatestEpisodes"
import ProviderLogos from "../components/ProviderLogos"
import episodecurve from "../content/images/curves/episode-curve.svg"
import PodigeePlayer from "../components/PodigeePlayer"
import Img from "gatsby-image"
import SEO from "../components/Seo"

// const StyledImage = styled(Img)`
//   width: 100%;
//   height: 200px;
//   background: gray;
//   overflow: hidden;
// `

const StyledHero = styled.section`
  padding: 100px 0;
  position: relative;
  background: #ff8370;
  margin-bottom: 10vw;
`
const Curvecontainer = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: -5vw;
  background: url(${episodecurve});
  background-size: 100% 100%;
  width: 100%;
  height: 5vw;
`
const ContentContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  max-width: 700px;
  text-align: center;
  padding: 20px;
`
const LogoContainer = styled.div`
  max-width: 1020px;
  padding: 20px;
  margin: 100px auto;
`

class Episode extends Component {
  render() {
    console.log(this.props)
    const {
      title,
      updatedAt,
      description,
      image,
    } = this.props.data.contentfulPodcast

    return (
      <Layout logocolor="#69d9c2">
        <SEO title={title} ogimage={image.resize.src} />
        <StyledHero>
          <ContentContainer>
            <SmallLabel color="white">{updatedAt}</SmallLabel>
            <h1>{title}</h1>
            {/* <div dangerouslySetInnerHTML={{ __html: description }} /> */}
            <PodigeePlayer theme="default-dark"></PodigeePlayer>
            <Img sizes={image.sizes} alt={image.description} />
            <p>{description.description}</p>
          </ContentContainer>
          <Curvecontainer></Curvecontainer>
        </StyledHero>
        <LatestEpisodes></LatestEpisodes>
        <LogoContainer>
          <ProviderLogos></ProviderLogos>
        </LogoContainer>
      </Layout>
    )
  }
}
Episode.propTypes = {
  data: propTypes.object.isRequired,
}

export default Episode

export const query = graphql`
  query singleEpisodeQuery($slug: String!) {
    contentfulPodcast(slug: { eq: $slug }) {
      description {
        description
      }
      title
      id
      slug
      updatedAt(formatString: "DD. MMMM YYYY", locale: "de-DE")
      image {
        sizes(maxWidth: 800) {
          ...GatsbyContentfulSizes_withWebp
        }
        description
        resize(width: 900, quality: 90) {
          src
        }
      }
    }
  }
`
