import React from "react"

import Layout from "src/components/Layout"
import SEO from "src/components/SEO"
import CTA from "src/components/CTA"
import Hero from "src/components/Hero"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <CTA />
  </Layout>
)

export default IndexPage
