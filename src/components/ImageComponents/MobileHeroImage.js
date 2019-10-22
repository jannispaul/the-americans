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
  height: 100%;
`

const mobileHeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        mobileHeroImage: file(relativePath: { eq: "hero-mobile.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.mobileHeroImage.childImageSharp
      return <StyledImage fluid={image.fluid} />
    }}
  />
)
export default mobileHeroImage
