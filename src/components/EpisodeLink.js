import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import SmallLabel from "./SmallLabel"
import Img from "gatsby-image"
import PodigeePlayer from "./PodigeePlayer"

const Episode = styled.div`
  max-width: 700px;
  margin: auto;
  text-align: left;
  text-decoration: none;
  display: block;
  padding: 32px 0;
  transition: background 0.2s;

  & > p {
    margin-bottom: 16px;
  }
`
const PlayerContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 16px auto;
  margin-bottom: 16px;
  & > picture {
    margin-right: 16px;
  }
`
const StyledLink = styled(Link)`
  font-family: AvenirNextCondensed-DemiBold;
  font-size: 16px;
  color: #ff0045;
  letter-spacing: 0.25px;
  text-transform: uppercase;
`

const EpisodeLink = props => (
  <Episode key={props.id}>
    <SmallLabel>{props.date}</SmallLabel>
    <h3>{props.title}</h3>
    <PlayerContainer>
      <Img sizes={props.image.sizes} alt={props.image.description} />
      <div></div>
      <PodigeePlayer
        theme="default-dark"
        source={props.podcastSlug}
      ></PodigeePlayer>
    </PlayerContainer>
    <p>{props.excerpt}</p>
    <StyledLink to={props.slug}>Listen now</StyledLink>
  </Episode>
)

export default EpisodeLink
