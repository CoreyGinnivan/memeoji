import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Jesus from "../images/memeojis/jesus.png"
import Cuteness from "../images/memeojis/cuteness_overload.png"
import Epic from "../images/memeojis/epic_smiley.png"
import Disapproval from "../images/memeojis/disapproval.png"
import Lenny from "../images/memeojis/lenny.png"
import Lol from "../images/memeojis/lol.png"
import Shifty from "../images/memeojis/shifty.png"
import Staring from "../images/memeojis/staring.png"

const Memeoji = ({ name, img }) => {
  return (
    <a
      className="flex flex-col justify-center items-center border border-gray-400 rounded-lg p-4 hover:bg-gray-100 "
      href={img}
    >
      <img src={img} alt={name} width="60" />
      <span className="text-gray-600 text-xs pt-2">:{name}:</span>
    </a>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <h1 className="text-6xl text-black">Memeojis</h1>
      <p>Something about memeojis.</p>
      <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        <Memeoji img={Disapproval} name="disapproval" />
        <Memeoji img={Epic} name="epic_smiley" />
        <Memeoji img={Shifty} name="shifty" />
        <Memeoji img={Staring} name="staring" />
        <Memeoji img={Cuteness} name="cuteness_overload" />
        <Memeoji img={Lenny} name="lenny" />
        <Memeoji img={Lol} name="lol" />
        <Memeoji img={Jesus} name="jesus" />
      </div>
    </Layout>
  )
}

export default IndexPage
