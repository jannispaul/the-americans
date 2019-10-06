import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import LatestEpisodes from "../components/LatestEpisodes"
import Hero from "../components/Hero"
import About from "../components/About"
import Providers from "../components/Providers"
import ScrollAnchor from "../components/ScrollAnchor"

const IndexPage = () => (
  <Layout>
    <SEO title="The Americans" lang="de" />
    <ScrollAnchor id="podcast"></ScrollAnchor>
    <Hero></Hero>
    <ScrollAnchor id="about"></ScrollAnchor>
    <About></About>
    <Providers></Providers>
    <ScrollAnchor id="episoden"></ScrollAnchor>
    <LatestEpisodes></LatestEpisodes>
  </Layout>
)

export default IndexPage
