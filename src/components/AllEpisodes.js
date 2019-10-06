import React from "react"
import { StaticQuery, graphql } from "gatsby"
import EpisodeLink from "./EpisodeLink"
// import styles from './news.module.css'
// import Icon from './icon'
// import { ICONS } from '../constants/icons.js'

export default () => (
  <StaticQuery
    query={graphql`
      query AllEpisodesQuery {
        allContentfulPodcast(limit: 1000) {
          edges {
            node {
              title
              slug
              image {
                sizes(maxWidth: 800) {
                  ...GatsbyContentfulSizes
                }
              }
              description {
                description
              }
              updatedAt(formatString: "DD. MMMM YYYY", locale: "de-DE")
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allContentfulPodcast.edges.map(({ node }) => (
          <EpisodeLink
            id={node.id}
            slug={node.slug}
            date={node.updatedAt}
            title={node.title}
            body={node.description.description}
            image={node.image}
          ></EpisodeLink>
        ))}
      </div>
    )}
  />
)
