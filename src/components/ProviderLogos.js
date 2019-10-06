import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import spotify from "../content/images/providers/spotify.svg"
import apple from "../content/images/providers/apple.svg"
import google from "../content/images/providers/google.svg"
import podcasting from "../content/images/providers/podcasting.svg"
import soundcloud from "../content/images/providers/soundcloud.svg"
import deezer from "../content/images/providers/deezer.svg"

const StyledLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
  grid-gap: 15px;
  justify-content: center;

  & > a {
    height: 80px;
    /* width: 150px; */
    background: white;
    border-radius: 5px;
    box-shadow: 0 1px 14px 10px rgba(174, 174, 174, 0.12);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 200ms transform ease;
    :hover {
      transform: scale(1.05);
      transition: 200ms transform ease;
      transition: 200ms transform ease;
    }
  }
`

const ProviderLogos = props => (
  <StyledLogos>
    <a href="/#">
      <img src={spotify} alt="spotify logo"></img>
    </a>
    <a href="/#">
      <img src={apple} alt="apple logo"></img>
    </a>
    <a href="/#">
      <img src={google} alt="google logo"></img>
    </a>
    <a href="/#">
      <img src={podcasting} alt="podcasting logo"></img>
    </a>
    <a href="/#">
      <img src={soundcloud} alt="soundcloud logo"></img>
    </a>
    <a href="/#">
      <img src={deezer} alt="deezer logo"></img>
    </a>
  </StyledLogos>
)
export default ProviderLogos
