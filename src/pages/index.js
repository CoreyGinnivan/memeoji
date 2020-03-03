import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

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
      className="download_file transition-all duration-200 ease-in-out flex flex-col justify-center items-center shadow-none hover:shadow hover:shadow-xs hover:shadow-lg rounded-lg p-4 border-gray-200 border hover:border-white"
      href={img}
      download
    >
      <img src={img} alt={name} width="60" />
      <span className="text-gray-600 text-xs pt-2">:{name}:</span>
    </a>
  )
}

function DownloadAll() {
  function handleClick(e) {
    e.preventDefault()
    console.log("The link was clicked.")
  }
  return (
    <a
      id="downloadAll"
      href="#"
      className="flex border-gray-900 border-4 py-2 px-4 rounded-lg text-center justify-center font-semibold hover:bg-gray-900 hover:text-white ml-2 mt-0 lg:ml-0 lg:mt-2"
      onClick={handleClick}
    >
      Download All Memeojis
    </a>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-10">
        <div>
          <h1 className="text-6xl text-black">Memeojis</h1>
          <p>
            A collection of custom meme-inspired emojis that you didn't realise
            you needed.
          </p>
        </div>
        <div className="flex flex-row lg:flex-col">
          <Link
            to="/suggest/"
            className="flex border-gray-900 border-4 py-2 px-4 rounded-lg text-center justify-center font-semibold hover:bg-gray-900 hover:text-white"
          >
            Suggest a Memeoji
          </Link>
          <DownloadAll />
        </div>
      </div>
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
