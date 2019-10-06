import React from "react"
import styled from "styled-components"

import HeroImage from "./HeroImage"
import herocurve from "../content/images/curves/hero-curve.svg"
import CurrentEpisode from "./CurrentEpisode"
import { device } from "../theme/breakpoints"

const StyledHero = styled.section`
  width: 100%;
  background-size: auto 50%;
  position: relative;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100vw auto;
  @media ${device.tablet} {
    min-height: 50vh;
    clip-path: ellipse(100% 90% at 50% 10%);
    background-color: #69d9c2;
    grid-template-columns: 1fr 200px 200px 200px 200px 1fr;
    grid-template-rows: 1fr;
  }

  @media ${device.laptop} {
    min-height: 50vh;
    clip-path: ellipse(100% 90% at 50% 10%);
    background-color: #69d9c2;
    grid-template-columns: 1fr 300px 300px 300px 300px 1fr;
    grid-template-rows: 1fr;
  }
  /* The Content */
  & > div:first-of-type {
    grid-column: 1/4;
    grid-row: 2;
    z-index: 2;
    @media ${device.tablet} {
      grid-column: 2/4;
      grid-row: 1;
    }
  }
`
const HeroRounded = styled.div`
  grid-column: 1/4;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-row: 1fr;
  clip-path: ellipse(100% 90% at 50% 10%);
  @media ${device.tablet} {
    grid-column: 1/7;
    grid-row: 1;
    clip-path: none;
    grid-template-columns: 1fr 200px 200px 200px 200px 1fr;
    grid-template-rows: 1fr;
  }
  @media ${device.laptop} {
    grid-column: 1/7;
    grid-row: 1;
    clip-path: none;
    grid-template-columns: 1fr 300px 300px 300px 300px 1fr;
    grid-template-rows: 1fr;
  }
`

const StyledImage = styled.div`
  grid-column: 2/6;
  grid-row: 1;
  height: 100%;
  width: 100%;
  background: #141936;

  @media ${device.tablet} {
    margin-left: 1px;
    grid-column: 3/7;
    grid-row: 1;
    height: 100%;
    z-index: 0;
    justify-content: center;
    clip-path: none;
  }
`
const StyledCurve = styled.img`
  height: 100%;
  grid-column: 1/3;
  grid-row: 1;
  z-index: 1;

  @media ${device.tablet} {
    grid-column: 3/4;
    grid-row: 1;
    clip-path: none;
  }
`
const HeroContent = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media ${device.tablet} {
    margin: 50px 20px 20px 20px;
  }
  @media ${device.laptop} {
    margin: -70px 20px 20px 20px;
  }
`

const Navigation = props => (
  <StyledHero>
    <HeroContent>
      <CurrentEpisode></CurrentEpisode>
    </HeroContent>
    <HeroRounded>
      <StyledCurve src={herocurve}></StyledCurve>
      <StyledImage>
        <HeroImage></HeroImage>
      </StyledImage>
    </HeroRounded>
  </StyledHero>
)

export default Navigation
