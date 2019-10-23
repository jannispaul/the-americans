import React from "react"
// import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import AllEpisodes from "../components/AllEpisodes"
import About from "../components/About"
import KeepInTouch from "../components/KeepInTouch"
import MPProducts from "../components/MPProducts"

const AllEpisodesPage = () => (
  <Layout logocolor="#69d9c2">
    <SEO title="Home" />
    <h1>All Episodes</h1>
    <AllEpisodes></AllEpisodes>
    <About></About>
    <KeepInTouch></KeepInTouch>
    <MPProducts></MPProducts>
  </Layout>
)

export default AllEpisodesPage
