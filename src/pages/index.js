import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
import Squinting from "../images/memeojis/squinting.png"
import ShiftyAnimated from "../images/memeojis/shifty_animated.gif"
import ShiftyAnimated2 from "../images/memeojis/shifty_animated2.gif"
import PonderingCorona from "../images/memeojis/pondering_corona.png"
import SpookyCorona from "../images/memeojis/spooky_corona.png"
import EyeTwitch from "../images/memeojis/eye_twitch.png"

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

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "zip" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Memeojis - Because why not" />
      <div className="block xl:flex flex-col xl:flex-row justify-between xl:items-center mb-10">
        <div>
          <h1 className="text-3xl md:text-6xl text-black">Memeojis</h1>
          <p className="text-sm sm:text-base">
            A collection of custom meme-inspired emojis that you didn't realise
            you needed.
          </p>
          <p className="text-sm sm:text-base">
            Bulk add your memeojis to your Slack using{" "}
            <a
              href="https://chrome.google.com/webstore/detail/neutral-face-emoji-tools/anchoacphlfbdomdlomnbbfhcmcdmjej"
              target="_blank"
              className="font-semibold text-black hover:underline"
              rel="noopener noreferrer"
            >
              this Google Chrome extension ⤴
            </a>
            .
          </p>
        </div>
        <div className="flex flex-row xl:flex-col xl:ml-8">
          <Link
            to="/suggest/"
            className="flex text-xs sm:text-base border-gray-900 border-4 py-2 px-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white"
          >
            <span role="img" aria-label="speaker" class="hidden md:block mr-2">
              📢
            </span>
            Suggest a Memeoji
          </Link>
          {data.allFile.edges.map((file, index) => {
            return (
              <a
                key={`zip-${index}`}
                href={file.node.publicURL}
                className="flex text-xs sm:text-base border-gray-900 border-4 py-2 px-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white ml-2 mt-0 xl:ml-0 xl:mt-2"
                download
              >
                <span
                  role="img"
                  aria-label="down arrow"
                  class="hidden md:block mr-2"
                >
                  ⬇️
                </span>
                Download All Memeojis
              </a>
            )
          })}
        </div>
      </div>
      <div className="grid grid-flow-row gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        <Memeoji img={Disapproval} name="disapproval" />
        <Memeoji img={Epic} name="epic_smiley" />
        <Memeoji img={Shifty} name="shifty" />
        <Memeoji img={Squinting} name="squinting" />
        <Memeoji img={Cuteness} name="cuteness_overload" />
        <Memeoji img={Lenny} name="lenny" />
        <Memeoji img={Lol} name="lol" />
        <Memeoji img={Jesus} name="sweet_jesus" />
        <Memeoji img={ShiftyAnimated} name="shifty_animated" />
        <Memeoji img={ShiftyAnimated2} name="shifty_animated2" />
        <Memeoji img={PonderingCorona} name="pondering_corona" />
        <Memeoji img={SpookyCorona} name="spooky_corona" />
        <Memeoji img={EyeTwitch} name="eye_twitch" />
      </div>
    </Layout>
  )
}

export default IndexPage
