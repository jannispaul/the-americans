import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import SmallLabel from "./SmallLabel"
import Img from "gatsby-image"

const StyledLink = styled(Link)`
  max-width: 700px;
  margin: auto;
  text-align: center;
  text-decoration: none;
  display: block;
  padding: 32px 16px;
  transition: background 0.2s;

  :hover {
    background: #fafafa;
    transition: background 0.2s;
  }
`

const EpisodeLink = props => (
  <StyledLink key={props.id} to={props.slug}>
    <SmallLabel>{props.date}</SmallLabel>
    <h3>{props.title}</h3>
    <p>{props.body}</p>
    <Img sizes={props.image.sizes} />

    {/* <p>{node.frontmatter.podcastUrl}</p> */}
  </StyledLink>
)

export default EpisodeLink
