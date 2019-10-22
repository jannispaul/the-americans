import React from "react"
import styled from "styled-components"

import HeroImage from "./ImageComponents/HeroImage"
import MobileHeroImage from "./ImageComponents/HeroImage"
import ProviderLogos from "./ProviderLogos"
import { device } from "../theme/breakpoints"
import { Link } from "gatsby"
import arrowDown from "../content/images/arrow-down.svg"

const StyledHero = styled.section`
  position: relative;
  display: block;
  width: 100%;
  background: lightgray;
  & > div {
    max-width: 1256px;
    margin: auto;
    @media ${device.tablet} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-row: auto;
      height: 750px;
      overflow: hidden;
      align-items: center;
    }
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 16px;
  max-width: 560px;
  @media ${device.tablet} {
    grid-column: 1/3;
    grid-row: 1;
  }
`

const MoreLink = styled(Link)`
  display: flex;
  text-decoration: none;
  line-height: 1.3;
  align-items: center;
  & > img {
    margin-right: 16px;
  }
`
// const StyledHero = styled.section`
//   width: 100%;
//   background-size: auto 50%;
//   position: relative;
//   display: grid;
//   grid-template-columns: 100%;
//   grid-template-rows: 100vw auto;
//   @media ${device.tablet} {
//     min-height: 50vh;
//     clip-path: ellipse(100% 90% at 50% 10%);
//     background-color: #69d9c2;
//     grid-template-columns: 1fr 200px 200px 200px 200px 1fr;
//     grid-template-rows: 1fr;
//   }

//   @media ${device.laptop} {
//     min-height: 50vh;
//     clip-path: ellipse(100% 90% at 50% 10%);
//     background-color: #69d9c2;
//     grid-template-columns: 1fr 300px 300px 300px 300px 1fr;
//     grid-template-rows: 1fr;
//   }
//   /* The Content */
//   & > div:first-of-type {
//     grid-column: 1/4;
//     grid-row: 2;
//     z-index: 2;
//     @media ${device.tablet} {
//       grid-column: 2/4;
//       grid-row: 1;
//     }
//   }
// `
// const HeroRounded = styled.div`
//   grid-column: 1/4;
//   display: grid;
//   grid-template-columns: 1fr 4fr 1fr;
//   grid-row: 1fr;
//   clip-path: ellipse(100% 90% at 50% 10%);
//   @media ${device.tablet} {
//     grid-column: 1/7;
//     grid-row: 1;
//     clip-path: none;
//     grid-template-columns: 1fr 200px 200px 200px 200px 1fr;
//     grid-template-rows: 1fr;
//   }
//   @media ${device.laptop} {
//     grid-column: 1/7;
//     grid-row: 1;
//     clip-path: none;
//     grid-template-columns: 1fr 300px 300px 300px 300px 1fr;
//     grid-template-rows: 1fr;
//   }
// `

// const StyledImage = styled.div`
//   grid-column: 2/6;
//   grid-row: 1;
//   height: 100%;
//   width: 100%;
//   background: #141936;

//   @media ${device.tablet} {
//     margin-left: 1px;
//     grid-column: 3/7;
//     grid-row: 1;
//     height: 100%;
//     z-index: 0;
//     justify-content: center;
//     clip-path: none;
//   }
// `
// const StyledCurve = styled.img`
//   height: 100%;
//   grid-column: 1/3;
//   grid-row: 1;
//   z-index: 1;

//   @media ${device.tablet} {
//     grid-column: 3/4;
//     grid-row: 1;
//     clip-path: none;
//   }
// `
// const HeroContent = styled.div`
//   margin: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   @media ${device.tablet} {
//     margin: 50px 20px 20px 20px;
//   }
//   @media ${device.laptop} {
//     margin: -70px 20px 20px 20px;
//   }
// `

const Hero = props => (
  <StyledHero>
    <div>
      {/* <MobileHeroImage></MobileHeroImage> */}
      <HeroContent>
        <h1>The Americans</h1>
        <p>
          This podcast is about today’s America. It takes a closer look at
          politics and society, and has a special focus on people and their
          stories – stories that give you an up-close, personal and
          differentiated look at America.
        </p>

        <ProviderLogos></ProviderLogos>
        <MoreLink to="#recent-episodes">
          <img src={arrowDown} alt="Pfeil nach unten" />
          Listen
          <br />
          now
        </MoreLink>
      </HeroContent>
    </div>
    <HeroImage></HeroImage>
    {/* <HeroRounded>
      <StyledImage>
      </StyledImage>
    </HeroRounded> */}
  </StyledHero>
)

export default Hero
