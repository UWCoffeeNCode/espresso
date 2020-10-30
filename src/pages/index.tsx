import React from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

import Layout from "src/components/Layout"
import SEO from "src/components/SEO"
import HeroSection from "src/components/HeroSection"
import SignupSection from "src/components/SignupSection"

const IndexPage = () => {
  const reCaptchaKey = process.env.ESPRESSO_RECAPTCHA_KEY
  return (
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
      <Layout>
        <SEO />
        <HeroSection />
        <SignupSection />
      </Layout>
    </GoogleReCaptchaProvider>
  )
}

export default IndexPage
