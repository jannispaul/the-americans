import React from "react"
import styled from "styled-components"
// import { device } from "../theme/breakpoints"
import MPPresents from "../content/images/mp-presents.svg"

const PresentedBy = styled.div`
  height: 90px;
  background: #2c2c2c;
  /* padding-top: 25px; */
  display: flex;
  justify-content: center;
  align-content: center;
`
const MyStatelessComponent = props => (
  <PresentedBy>
    <img src={MPPresents} alt="Mediapioneer presents Schriftzug"></img>
  </PresentedBy>
)

export default MyStatelessComponent
