import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Jesus from "../images/memeojis/jesus.png"

const Success = () => (
  <Layout>
    <SEO title="Memeoji Submission Successfukl" />
    <Link to="/" className="mb-2" style={{ width: "fit-content" }}>
      <span className="mr-2">←</span>Back Home
    </Link>
    <h1>
      <img
        src={Jesus}
        alt="Jesus"
        width="40"
        className="inline-block mb-1 mr-2"
      />
      Submission successful!
    </h1>
    <p>
      Check back shortly to see if your submission was successful, otherwise
      chase me down on{" "}
      <a
        href="https://twitter.com/CoreyGinnivan"
        target="_blank"
        className="font-semibold text-black hover:underline"
        rel="noopener noreferrer"
      >
        Twitter ⤴
      </a>
    </p>
  </Layout>
)

export default Success
