import React from "react"
import styled from "styled-components"
import spotify from "../content/images/providers/spotify.svg"
import apple from "../content/images/providers/apple.svg"
import overcast from "../content/images/providers/overcast.svg"
import earliaudio from "../content/images/providers/earliaudio.png"
import soundcloud from "../content/images/providers/soundcloud.svg"
import deezer from "../content/images/providers/deezer.svg"
// import { device } from "../theme/breakpoints"

const StyledLogos = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  grid-gap: 10px;
  justify-content: center;

  & > a {
    height: 60px;
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
    }
  }
`
const StyledImage = styled.img`
  width: 34px;
`

const ProviderLogos = props => (
  <StyledLogos>
    <a href="/" target="_blank" rel="noopener noreferrer">
      <img src={apple} alt="apple logo"></img>
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer">
      <img src={spotify} alt="spotify logo"></img>
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer">
      <img src={deezer} alt="deezer logo"></img>
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer">
      <StyledImage src={earliaudio} alt="earliaudio logo"></StyledImage>
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer">
      <img src={soundcloud} alt="soundcloud logo"></img>
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer">
      <img src={overcast} alt="overcast logo"></img>
    </a>
  </StyledLogos>
)
export default ProviderLogos
