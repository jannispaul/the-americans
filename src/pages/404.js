import React from "react"

import AlternativeLayout from "../components/AlternativeLayout"
import SEO from "../components/Seo"
import Button from "../components/Button"

const NotFoundPage = () => (
  <AlternativeLayout>
    <SEO title="404: Nicht gefunden" index="noindex" />
    <h1>Diese Seite konnte leider nicht gefunden werden.</h1>
    <br />
    <Button to="/">Zur Startseite</Button>
  </AlternativeLayout>
)

export default NotFoundPage
