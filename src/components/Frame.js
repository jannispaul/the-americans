import React from "react"
import styled from "styled-components"
// import { device } from "../theme/breakpoints"
import frameBG from "../content/images/frame-bg.png"
import frameBGRev from "../content/images/frame-bg-2.png"

const StyledFrame = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  & > div {
    /* background: black; */
    /* background: url(${frameBG}) repeat; */
  }
  /* border: 15px solid red; */
  /* clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 100%,
    0% 100%,
    0% 0%,
    16px 0%,
    16px calc(100% - 16px),
    calc(100% - 16px) calc(100% - 16px),
    calc(100% - 16px) 16px,
    16px 16px
  ); */

  z-index: 100;
  pointer-events: none;
  @supports not (pointer-events: none) {
    display: none;
  }
`
const Top = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 16px;
  background: url(${frameBG}) repeat-x;
  /* background-size: contain; */
`
const Bottom = styled.div`
  position: absolute;
  width: 100%;
  transform: rotate(180deg);
  background: url(${frameBGRev}) repeat-x;
  height: 16px;
  bottom: 0%;
`
const Right = styled.div`
  position: absolute;
  width: 100vh;
  right: -50vh;
  top: 50vh;
  transform: rotate(90deg);
  background: url(${frameBG}) repeat-x;
  height: 16px;
  margin-right: 8px;
`
const Left = styled.div`
  position: absolute;
  width: 100vh;
  left: -50vh;
  bottom: 50%;
  transform: rotate(-90deg);
  background: url(${frameBGRev}) repeat-x;
  height: 16px;
  margin-left: 8px;
`

const Frame = props => (
  <StyledFrame>
    <Top></Top>
    <Right></Right>
    <Bottom></Bottom>
    <Left></Left>
  </StyledFrame>
)

export default Frame
