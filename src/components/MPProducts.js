import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import MBPodcastImage from "./ImageComponents/MBPodcastImage"
import MBNewsletterImage from "./ImageComponents/MBNewsletterImage"
import PioneerBlogImage from "./ImageComponents/PioneerBlogImage"
import PioneerOneImage from "./ImageComponents/PioneerOneImage"
import mpLogo from "../content/images/MP-logo.svg"

const StyledSection = styled.section`
  background: #f7f2fb;
  width: 100%;
  text-align: center;
  padding: 40px 16px;

  & > div {
    max-width: 1256px;
    margin: auto;
  }
  @media ${device.tablet} {
    padding: 80px 16px;
  }
`
const ProductContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  margin-top: 24px;
  grid-gap: 12px;

  @media ${device.laptop} {
    grid-template-columns: repeat(4, minmax(192px, 1fr));
  }
  a {
    text-decoration: none;
    font-family: Avenir-Medium;
    color: #2c2c2c;
    font-size: 14px;
    letter-spacing: 0.17px;
    line-height: 20px;
    margin-bottom: 40px;

    @media ${device.laptop} {
      font-size: 22px;
      letter-spacing: 0.27px;
      margin: auto;
      line-height: 30px;
      max-width: 240px;
    }
    &:not(:last-of-type) {
      /* margin-right: 40px; */
    }
  }
`
const PreHeadline = styled.p`
  font-family: AvenirNextCondensed-Bold;
  font-size: 20px;
  color: #ff0045;
  text-align: center;
`

const MPProducts = props => (
  <StyledSection>
    <div>
      <PreHeadline>Further productions from</PreHeadline>
      <img src={mpLogo} alt="Mediapioneer-Logo" />
      <ProductContainer>
        <a href="https://www.gaborsteingart.com/der-podcast/">
          <MBPodcastImage></MBPodcastImage>
          <p>Steingarts Morning Briefing Podcast</p>
        </a>
        <a href="https://www.gaborsteingart.com/morning-briefing/">
          <MBNewsletterImage></MBNewsletterImage>
          <p>Steingarts Morning Breifing Newsletter</p>
        </a>
        <a href="https://mediapioneer.com/blog/">
          <PioneerBlogImage></PioneerBlogImage>
          <p>Pioneer Blog – von Michael Bröcker</p>
        </a>
        <a href="https://mediapioneer.com/redaktionsschiff/">
          <PioneerOneImage></PioneerOneImage>
          <p>Pioneer One – das Redaktionsschiff</p>
        </a>
      </ProductContainer>
    </div>
  </StyledSection>
)

export default MPProducts