import React from "react"
import styled from "styled-components"
import PhoneImage from "../components/PhoneImage"
import ProviderLogos from "../components/ProviderLogos"
import bgcurve from "../content/images/curves/bg-curve.svg"
import stars from "../content/images/stars.svg"
import { device } from "../theme/breakpoints"

const StyledSection = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 500px auto;
  background-image: url(${bgcurve});
  background-size: 100% 50%;
  background-repeat: no-repeat;
  margin-bottom: 50px;
  justify-content: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 400px 45% 1fr;
  }
  @media ${device.laptop} {
    background-size: 100% 100%;
    grid-template-columns: 1fr 500px 45% 1fr;
    grid-template-rows: 1fr;
    background-size: 100% 100%;
  }
`

const ContentContainer = styled.div`
  grid-row: 2;

  @media ${device.tablet} {
    grid-column: 2;
    grid-row: 1;
    max-width: 100%;
  }
`

const StyledQuote = styled.h4`
  margin-bottom: 32px;
  padding: 20px;
  text-align: center;
  line-height: 1.8;
  & > span {
    font-weight: 600;
  }
  @media ${device.tablet} {
    text-align: left;
  }
`

const StyledPhoneImage = styled.div`
  grid-row: 1;
  grid-column: 1;
  & > div {
    margin: auto;
    max-width: 80vw;
  }
  @media ${device.tablet} {
    grid-column: 3/6;
  }
`
const StyledStars = styled.img`
  display: none;
  position: absolute;
  margin-top: -12vw;
  margin-left: -100px;
  @media ${device.tablet} {
    display: block;
  }
`

const Prodviders = props => (
  <StyledSection>
    <ContentContainer>
      <StyledStars src={stars} alt="verzierende Sterne"></StyledStars>
      <StyledQuote>
        Lorem <span>ipsum</span> dolor sit amet, consectetuer{" "}
        <span>adipiscing</span> elit. <span>Aenean</span> commodo ligula eget
      </StyledQuote>
      <ProviderLogos></ProviderLogos>
    </ContentContainer>
    <StyledPhoneImage>
      <PhoneImage></PhoneImage>
    </StyledPhoneImage>
  </StyledSection>
)

export default Prodviders
