import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Suggest a Memeoji" />
    <Link to="/" className="mb-2">
      <span className="mr-2">←</span>Back Home
    </Link>
    <h1>Suggest a Memeoji</h1>
    <p className="w-full lg:w-1/2">
      Got a cool idea for a memeoji? Submit your idea and I'll try to get around
      to designing it.
    </p>
    <p className="w-full lg:w-1/2">
      Alternatively if you feel like flexing those Designer muscles of yours,{" "}
      <a href="#" className="font-semibold text-black hover:underline" download>
        download the Sketch file template
      </a>
      , and open a PR on the{" "}
      <a
        href="https://github.com/coreyginnivan/memeoji/"
        className="font-semibold text-black hover:underline"
        target="_blank"
      >
        GitHub repo
      </a>{" "}
      with your PNGs. Your name will be added to your memeoji if it's selected.
    </p>
  </Layout>
)

export default SecondPage
