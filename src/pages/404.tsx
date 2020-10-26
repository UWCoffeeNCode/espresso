import React from "react"
import { Link } from "gatsby"

import Layout from "src/components/Layout"
import SEO from "src/components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="m-8">
      <h1 className="text-2xl text-black font-bold">
        This page doesn't exist :(
      </h1>
      <p className="text-gray-700 font-medium">
        Let's{" "}
        <Link to="/" className="text-indigo-700 hover:opacity-75">
          go back home
        </Link>
        , shall we?
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
