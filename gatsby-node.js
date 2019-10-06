const Promise = require("bluebird")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const episode = path.resolve("./src/templates/episode.js")
    resolve(
      graphql(
        `
          {
            allContentfulPodcast {
              edges {
                node {
                  title
                  id
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const episodes = result.data.allContentfulPodcast.edges
        episodes.forEach((item, index) => {
          createPage({
            path: `/${item.node.slug}/`,
            component: episode,
            context: {
              slug: item.node.slug,
            },
          })
        })
      })
    )
  })
}
