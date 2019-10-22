import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
/**
 * This component is built using `gatsby-background-image` to automatically
 * serve optimized background-images with lazy loading and reduced file sizes
 * as well as a `gatsby-image` for comparison.
 * The image is loaded using a `StaticQuery`, which allows us to load the image
 * from directly within this component, rather than having to pass
 * the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-background-image`: https://github.com/timhagn/gatsby-background-image
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const StyledImage = styled(Img)`
  position: absolute !important;

  width: 70%;
  z-index: 0;
  top: 0;
  right: 0;
`

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "hero.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.heroImage.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: "contain" }}
          alt="Frau Chelsea Spieker schaut mit bestimmtem Blick in die Kamera"
        />
      )
    }}
  />
)
export default HeroImage
