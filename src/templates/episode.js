import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import Layout from "../components/Layout"

import PodigeePlayer from "../components/PodigeePlayer"
import Img from "gatsby-image"
import SEO from "../components/Seo"

export const query = graphql`
  query($slug: String!) {
    podcast: contentfulPodcast(slug: { eq: $slug }) {
      body {
        json
      }
      image {
        sizes(maxWidth: 1000) {
          ...GatsbyContentfulSizes_withWebp
        }
        description
        resize(width: 900, quality: 90) {
          src
        }
      }
      title
      slug
      podcastSlug
      createdAt
    }
  }
`
const richTextImageWidth = 1000
const richTextImageQuality = 20

const EpisodeTemplate = ({ data: { podcast } }) => (
  <Layout logocolor="#69d9c2">
    <SEO title={podcast.title} ogimage={podcast.image.resize.src} />
    <Img sizes={podcast.image.sizes} alt={podcast.image.description} />

    <h1>{podcast.title}</h1>
    <p>{podcast.createdAt}</p>
    <PodigeePlayer
      theme="default-dark"
      source={podcast.podcastSlug}
    ></PodigeePlayer>
    <div>
      {documentToReactComponents(podcast.body.json, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
            <div>
              {/* <img
                  src={`${node.data.target.fields.file["de"].url}?w=200`}
                  alt={node.data.target.fields.title["de"]}
                /> */}

              <figure>
                <Img
                  alt={node.data.target.fields.title["de"]}
                  sizes={{
                    aspectRatio:
                      node.data.target.fields.file["de"].details.image.width /
                      node.data.target.fields.file["de"].details.image.height,
                    src:
                      `${node.data.target.fields.file["de"].url}?w=${richTextImageWidth}&fm=webp&q=${richTextImageQuality}` +
                      ",\n",
                    sizes: `(max-width: ${richTextImageWidth}px) 100vw, ${richTextImageWidth}px`,
                    srcSet:
                      `${
                        node.data.target.fields.file["de"].url
                      }?w=${richTextImageWidth /
                        4}&fm=jpg&q=${richTextImageQuality}` +
                      ` ${richTextImageWidth / 4}w,\n` +
                      `${
                        node.data.target.fields.file["de"].url
                      }?w=${richTextImageWidth /
                        2}&fm=jpg&q=${richTextImageQuality}` +
                      ` ${richTextImageWidth / 2}w,\n` +
                      `${node.data.target.fields.file["de"].url}?w=${richTextImageWidth}&fm=jpg&q=${richTextImageQuality}` +
                      ` ${richTextImageWidth}w,\n` +
                      `${
                        node.data.target.fields.file["de"].url
                      }?w=${richTextImageWidth *
                        1.5}&fm=jpg&q=${richTextImageQuality}` +
                      ` ${richTextImageWidth * 1.5}w,\n` +
                      `${
                        node.data.target.fields.file["de"].url
                      }?w=${richTextImageWidth *
                        2}&fm=jpg&q=${richTextImageQuality}` +
                      ` ${richTextImageWidth * 2}w,\n` +
                      `${
                        node.data.target.fields.file["de"].url
                      }?w=${richTextImageWidth *
                        3}&fm=jpg&q=${richTextImageQuality}` +
                      ` ${richTextImageWidth * 3}w,\n` +
                      `${
                        node.data.target.fields.file["de"].url
                      }?w=${richTextImageWidth *
                        3.992}&fm=jpg&q=${richTextImageQuality}` +
                      ` ${richTextImageWidth * 3.992}w`,
                    srcSetWebp:
                      `${
                        node.data.target.fields.file["de"].url
                      }?w=${richTextImageWidth /
                        4}&fm=webp&q=${richTextImageQuality}` +
                      ` ${richTextImageWidth / 4}w,\n` +
                      `${
                        node.data.target.fields.file["de"].url
                      }?w=${richTextImageWidth /
                        2}&fm=webp&q=${richTextImageQuality}` +
                      ` ${richTextImageWidth / 2}w,\n` +
                      `${node.data.target.fields.file["de"].url}?w=${richTextImageWidth}&fm=webp&q=${richTextImageQuality}` +
                      ` ${richTextImageWidth}w,\n` +
                      `${
                        node.data.target.fields.file["de"].url
                      }?w=${richTextImageWidth *
                        1.5}&fm=webp&q=${richTextImageQuality}` +
                      ` ${richTextImageWidth * 1.5}w,\n` +
                      `${
                        node.data.target.fields.file["de"].url
                      }?w=${richTextImageWidth *
                        2}&fm=webp&q=${richTextImageQuality}` +
                      ` ${richTextImageWidth * 2}w,\n` +
                      `${
                        node.data.target.fields.file["de"].url
                      }?w=${richTextImageWidth *
                        3}&fm=webp&q=${richTextImageQuality}` +
                      ` ${richTextImageWidth * 3}w,\n` +
                      `${
                        node.data.target.fields.file["de"].url
                      }?w=${richTextImageWidth *
                        3.992}&fm=webp&q=${richTextImageQuality}` +
                      ` ${richTextImageWidth * 3.992}w`,
                  }}
                />
                <figcaption>
                  {node.data.target.fields.description["de"]}
                </figcaption>
              </figure>
            </div>
          ),
        },
      })}
    </div>
  </Layout>
)

export default EpisodeTemplate
