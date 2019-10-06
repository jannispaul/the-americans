import React from "react"
import { StaticQuery, graphql } from "gatsby"
import EpisodeLink from "./EpisodeLink"
import styled from "styled-components"
import SmallLable from "./SmallLabel"
import Button from "./Button"

const StyledLatestEpisodes = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const StyledIntro = styled.div`
  margin: auto;
  padding: 20px;
  max-width: 700px;
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
      <StyledLatestEpisodes>
        <StyledIntro>
          <SmallLable>Noch nicht genug?</SmallLable>
          <h2>Letzte Episoden</h2>
        </StyledIntro>
        {data.allContentfulPodcast.edges.map(({ node }) => (
          <EpisodeLink
            key={node.id}
            slug={node.slug}
            date={node.updatedAt}
            title={node.title}
            body={node.description.description}
            image={node.image}
          ></EpisodeLink>
        ))}
        <br />
        <Button to="/alle-episoden/">Alle Episoden</Button>
        <br />
      </StyledLatestEpisodes>
    )}
  />
)
