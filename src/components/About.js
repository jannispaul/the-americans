import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import Icon from "../components/Icon"
import { ICONS } from "../theme/Icons"
import { device } from "../theme/breakpoints"

const StyledAbout = styled.section`
  background: #fff2f5;
  width: 100%;
  padding: 24px 24px;
  text-align: center;

  & > div {
    max-width: 740px;
    margin: auto;
  }
  @media ${device.tablet} {
    padding: 80px 0;
  }
`

const Styledh2 = styled.h2``

const SocialContainer = styled.div`
  font-family: AvenirNextCondensed-Bold;
  font-size: 21.6px;
  color: #ff0045;
  letter-spacing: 0.34px;
  text-align: center;
  margin-top: 16px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const StyledIcon = styled.div`
  display: inline-block;
  margin-left: 16px;
  @media ${device.mobileM} {
    margin-left: 24px;
  }
  & > svg {
    fill: #ff0045;
    width: 24px;
  }
`

const About = props => (
  <StyledAbout>
    <div>
      <Styledh2>About Chelsea</Styledh2>
      <p>
        As an American living in Germany for over a decade, Chelsea Spieker has
        a unique view on her home country: one that gives you an inside and an
        outside perspective on what moves people in the United States.
      </p>
      <SocialContainer>
        Follow:
        <a
          href="https://business.facebook.com/the.americans.podcast"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon>
            <Icon icon={ICONS.FACEBOOK} />
          </StyledIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/chelsea-spieker-2859b016/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon>
            <Icon icon={ICONS.LINKEDIN} />
          </StyledIcon>
        </a>
        <a
          href="https://www.instagram.com/chelsea.spieker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon>
            <Icon icon={ICONS.INSTAGRAM} />
          </StyledIcon>
        </a>
        <a
          href="https://twitter.com/ChelseaSpieker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledIcon>
            <Icon icon={ICONS.TWITTER} />
          </StyledIcon>
        </a>
      </SocialContainer>
    </div>
  </StyledAbout>
)

export default About
