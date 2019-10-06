import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import logo from "../content/images/logo.svg"
import SmallLabel from "../components/SmallLabel"

import { device } from "../theme/breakpoints"

const StyledAbout = styled.section`
  max-width: 700px;
  margin: 50px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media ${device.tablet} {
    margin: 100px auto;
  }
`

const StyledLogo = styled.img`
  width: 433px;
  max-width: 100%;
  margin-bottom: 25px;
`

const About = props => (
  <StyledAbout>
    <SmallLabel>Der Podcast</SmallLabel>
    <StyledLogo
      src={logo}
      alt="The Americans Logo in dunkelblauer Serifenschrift mit einem roten Stern"
    ></StyledLogo>
    <p>
      Ich bin Chelsea Spieker und einmal pro Woche schaue ich gemeinsam mit
      interessanten, spanneden Menschen auf das Amerika von heute. Es geht um
      Politik, es geht um die Gesellschaft – aber vor allem geht es um eine gute
      Story. Entdecken wir gemeinm meine Heimt Amerika!
    </p>
  </StyledAbout>
)

export default About
