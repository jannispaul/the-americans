import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import { device } from "../theme/breakpoints"
import Icon from "../components/Icon"
import { ICONS } from "../theme/Icons"

const StyledFooter = styled.footer`
  white-space: pre;
  padding: 24px 16px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2c004c;
  color: white;
  & > div {
    width: 1256px;
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
    @media ${device.mobileL} {
      flex-direction: row;
    }
    & > div:first-of-type {
      /* flex: 1 1 0; */
      flex-wrap: wrap;
      flex-direction: column;
      @media ${device.tablet} {
        flex-direction: row;
      }
    }
    & > div:last-of-type {
      flex: 1 1 0;
      margin-bottom: 1rem;
      @media ${device.tablet} {
        margin-bottom: 0;
      }
      /* flex-wrap: wrap; */
    }
    & > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      @media ${device.mobileL} {
        justify-content: flex-start;
        :last-of-type {
          justify-content: flex-end;
        }
      }
    }
  }

  span {
    opacity: 0.8;
  }
  /*Links in footer*/
  a {
    margin-right: 10px;
    text-decoration: undeline;
    text-decoration-color: rgba(0, 0, 0, 0);
    /* line-height: 2; */
    display: flex;

    :hover {
      text-decoration-color: rgba(255, 255, 255, 0.5);
    }
  }
`

const StyledIcon = styled.div`
  display: inline-block;
  margin-left: 10px;
  & > svg {
    width: 24px;
    fill: #fff;
  }
`
const Backlink = styled.div`
  display: flex;
`
const Footer = props => (
  <StyledFooter>
    <div>
      <div>
        <a
          href="https://mediapioneer.com/impressum/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link zum Impressum"
        >
          Impressum
        </a>
        <a
          href="https://mediapioneer.com/datenschutz/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link zum Datenschutz"
        >
          Datenschutz
        </a>
        <Backlink>
          <span>Website: </span>
          <a
            href="https://pixel-pink.de"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link zur PixelPink-Website"
          >
            PixelPink
          </a>
        </Backlink>
        <Backlink>
          <span>Artwork: </span>
          <a
            href="https://amadeusamadeus.de/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link zu Amadeus Fronks Website"
          >
            Amadeus Fronk
          </a>
        </Backlink>
      </div>
      <div>
        <a
          href="https://www.facebook.com/the.americans.podcast"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="The americans podcast on facebook"
        >
          <StyledIcon>
            <Icon icon={ICONS.FACEBOOK} />
          </StyledIcon>
        </a>
        <a
          href="https://www.instagram.com/chelsea.spieker"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chelsea Spieker on instagram"
        >
          <StyledIcon>
            <Icon icon={ICONS.INSTAGRAM} />
          </StyledIcon>
        </a>
        <a
          href="https://twitter.com/ChelseaSpieker"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chelsea Spieker on twitter"
        >
          <StyledIcon>
            <Icon icon={ICONS.TWITTER} />
          </StyledIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/chelsea-spieker-2859b016/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chelsea Spieker on linkedIn"
        >
          <StyledIcon>
            <Icon icon={ICONS.LINKEDIN} />
          </StyledIcon>
        </a>
      </div>
    </div>
  </StyledFooter>
)
export default Footer
