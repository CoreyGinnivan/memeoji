import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Jesus from "../images/memeojis/jesus.png"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
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
      NO GOD! NO GOD, PLEASE NO, NO, NO, NOOOOO
    </h1>
    <p>
      Something went wrong and you've ended up in a place that doesn't exist...
      well it exists, it's just not the place you wanted I assume...
    </p>
  </Layout>
)

export default NotFoundPage
