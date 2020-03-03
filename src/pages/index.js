import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Jesus from "../images/memeojis/jesus.png"

const Memeoji = ({ name, img }) => {
  return (
    <div className="flex justify-center items-center border border-gray-400 rounded-lg h-16 w-16 p-4">
      <img src={img} alt={name} />
      <p>:{name}:</p>
    </div>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <h1 className="text-6xl text-black">Memeojis</h1>
      <p>Something about memeojis.</p>
      <div className="grid grid-flow-col grid-flow-row gap-1">
        <Memeoji img={Jesus} name="jesus" />
        <Memeoji img={Jesus} name="jesus" />
        <Memeoji img={Jesus} name="jesus" />
        <Memeoji img={Jesus} name="jesus" />
        <Memeoji img={Jesus} name="jesus" />
        <Memeoji img={Jesus} name="jesus" />
        <Memeoji img={Jesus} name="jesus" />
        <Memeoji img={Jesus} name="jesus" />
        <Memeoji img={Jesus} name="jesus" />
        <Memeoji img={Jesus} name="jesus" />
      </div>
    </Layout>
  )
}

export default IndexPage
