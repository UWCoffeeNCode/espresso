import React from "react"

import Layout from "src/components/Layout"
import SEO from "src/components/SEO"
import HeroSection from "src/components/HeroSection"
import SignupSection from "src/components/SignupSection"

const IndexPage = () => (
  <Layout>
    <SEO />
    <HeroSection />
    <SignupSection />
  </Layout>
)

export default IndexPage
