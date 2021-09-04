import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import ImageCards from "../components/ImageCards"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <ImageCards heading="Need to Change Now?" />
  </Layout>
)

export default IndexPage
