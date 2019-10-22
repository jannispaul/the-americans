import React from "react"
import { StaticQuery, graphql } from "gatsby"
import EpisodeLink from "./EpisodeLink"
import styled from "styled-components"
import headlineBG from "../content/images/headline-bg.png"

import Button from "./Button"

const StyledRecentEpisodes = styled.section`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; */
  padding: 0 16px;
  position: relative;
`
const Styledh2 = styled.h2`
  color: #7000c0;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: center;
  & img {
    /* position: absolute;
    top: 15px; */
    width: 501px;
    max-width: 100%;
    margin-top: -32px;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query LatestEpisodesQuery {
        allContentfulPodcast(limit: 3, skip: 1) {
          edges {
            node {
              title
              description {
                description
              }
              slug
              updatedAt(formatString: "DD. MMMM YYYY", locale: "de-DE")
              image {
                sizes(maxWidth: 800) {
                  ...GatsbyContentfulSizes_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledRecentEpisodes>
        <Styledh2>
          Recent Episodes
          <img src={headlineBG} alt="Airplanes flying away from headline" />
        </Styledh2>
        {data.allContentfulPodcast.edges.map(({ node }) => (
          <EpisodeLink
            key={node.id}
            slug={node.slug}
            date={node.updatedAt}
            title={node.title}
            excerpt={node.description.description.substring(0, 100) + " ..."}
            image={node.image}
          ></EpisodeLink>
        ))}
        <br />
        <Button to="/alle-episoden/">All Episodes</Button>
        <br />
      </StyledRecentEpisodes>
    )}
  />
)
