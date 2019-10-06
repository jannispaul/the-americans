import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import AllEpisodes from "../components/AllEpisodes"
import episodecurve from "../content/images/curves/episode-curve.svg"

const StyledHero = styled.section`
  padding: 100px 0;
  position: relative;
  background: #ff8370;
  margin-bottom: 10vw;
`
const Curvecontainer = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: -5vw;
  background: url(${episodecurve});
  background-size: 100% 100%;
  width: 100%;
  height: 5vw;
`
const StyledH1 = styled.h1`
  text-align: center;
  margin-top: 100px;
  position: relative;
`

const AllEpisodesPage = () => (
  <Layout logocolor="#69d9c2">
    <SEO title="Home" />
    <StyledHero>
      <StyledH1>Alle Episoden</StyledH1>
      <Curvecontainer></Curvecontainer>
    </StyledHero>
    <AllEpisodes></AllEpisodes>
    <br />
  </Layout>
)

export default AllEpisodesPage
