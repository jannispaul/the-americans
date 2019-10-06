import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import footercurve from "../content/images/curves/footer-curve.svg"
import facebook from "../content/images/facebook.svg"
import instagram from "../content/images/instagram.svg"
import { device } from "../theme/breakpoints"

const StyledFooter = styled.footer`
  /* min-height: 200px; */
  position: relative;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${footercurve});
  background-size: 100% 100%;
  z-index: 1;

  /*Links in footer*/
  a {
    margin: 10px;
    margin-top: 70px;
    text-decoration: undeline;
    text-decoration-color: rgba(0, 0, 0, 0);
    line-height: 2;
    display: flex;
    @media (${device.tablet}) {
      margin: 20px;
    }

    :hover {
      text-decoration-color: rgba(0, 0, 0, 0.5);
    }
  }
`

const StyledLogo = styled.img`
  filter: invert(1);
`

const Footer = props => (
  <StyledFooter>
    {/* <StyledCurve src={footercurve}></StyledCurve> */}
    <Link to="/datenschutz">Datenschutz</Link>
    <Link to="/impressum">Impressum</Link>
    <a href="https://www.facebook.com">
      <StyledLogo src={facebook} alt="Faccebook logo"></StyledLogo>
    </a>
    <a href="https://www.instagram.com">
      <StyledLogo src={instagram} alt="Instagram logo"></StyledLogo>
    </a>
  </StyledFooter>
)
export default Footer
