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
              description {
                description
              }
              image {
                sizes(maxWidth: 800) {
                  ...GatsbyContentfulSizes_withWebp
                }
                description
              }

              createdAt(formatString: "DD. MMMM YYYY", locale: "de-DE")
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
            date={node.createdAt}
            title={node.title}
            excerpt={node.description.description.substring(0, 105) + " ..."}
            image={node.image}
          ></EpisodeLink>
        ))}
      </div>
    )}
  />
)
