import React from "react"
import styled from "styled-components"

const StyledSmall = styled.small`
  color: ${props => props.color || "#e6270a"};
  margin-bottom: 16px;
`

const SmallLable = props => (
  <StyledSmall color={props.color}>{props.children}</StyledSmall>
)

export default SmallLable
