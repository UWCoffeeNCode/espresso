import React from "react"
import { Link } from "gatsby"

const WIP = () => (
  <section className="m-8">
    <h1 className="text-2xl text-black font-bold">
      This page is a work-in-progress 🛠
    </h1>
    <p className="text-gray-700 font-medium mt-2">
      Check back real soon!
      <br />
      In the meantime, let's{" "}
      <Link to="/" className="text-indigo-700 hover:opacity-75">
        go back home
      </Link>
      , shall we?
    </p>
  </section>
)

export default WIP
