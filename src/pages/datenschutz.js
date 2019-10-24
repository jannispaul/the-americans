import React from "react"
// import { Link } from "gatsby"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import { BLOCKS } from "@contentful/rich-text-types"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import styled from "styled-components"

const ContentContainer = styled.div`
  max-width: 740px;
  margin: auto;
  padding: 80px 24px;
`

const DatenschutzPage = ({ data }) => (
  <Layout>
    <SEO title="Datenschutz" />
    <ContentContainer>
      {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <h2>Die neuste Folge</h2> */}
      <h1>Datenschutz</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>

      {/* {documentToReactComponents(data.nodes.datenschutz.json)} */}
    </ContentContainer>
  </Layout>
)

export default DatenschutzPage

export const query = graphql`
  query {
    allContentfulLegal {
      nodes {
        datenschutz {
          json
        }
      }
    }
  }
`
