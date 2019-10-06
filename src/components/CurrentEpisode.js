import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SmallLabel from "./SmallLabel"
import PodigeePlayer from "./PodigeePlayer"
// import styles from './news.module.css'
// import Icon from './icon'
// import { ICONS } from '../constants/icons.js'
import Img from "gatsby-image"

export default () => (
  <StaticQuery
    query={graphql`
      query CurrentEpisodeQuery {
        allContentfulPodcast(limit: 1) {
          edges {
            node {
              description {
                description
              }
              title
              id
              slug
              updatedAt(formatString: "DD. MMMM YYYY", locale: "de-DE")
              image {
                sizes(maxWidth: 800) {
                  ...GatsbyContentfulSizes_withWebp
                }
                description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.allContentfulPodcast.edges.slice(0).map(({ node }) => (
          <div key={node.id}>
            <div>
              <div>
                <SmallLabel color="#4b4d58">{node.updatedAt}</SmallLabel>
                <h2>{node.title}</h2>
                <p>{node.description.description}</p>
                {/* <p>{node.frontmatter.podcastUrl}</p> */}
                <br />
                {/* <iframe
                  src="https://testing.podigee.io/1-neue-episode/embed?context=external&theme=default"
                  border="0"
                  height="100"
                  width="100%"
                  title="podcast"
                ></iframe> */}
                <Img sizes={node.image.sizes} alt={node.image.description} />

                <PodigeePlayer theme="minimal"></PodigeePlayer>
                {/* <div id="app"></div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  />
)
