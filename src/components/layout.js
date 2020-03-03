/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Disapproval from "../images/memeojis/disapproval.png"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col" style={{ height: "100vh" }}>
      <main className="flex flex-col p-4 md:p-12 flex-grow">{children}</main>
      <footer className="fled flex-row items-center p-4 md:p-12">
        © {new Date().getFullYear()} • Crafted with{" "}
        <img
          src={Disapproval}
          alt="Disapproval"
          title="Disapproval"
          width="20"
          className="inline-block mb-1"
        />{" "}
        by{" "}
        <a
          href="https://twitter.com/CoreyGinnivan"
          target="_blank"
          className="font-semibold text-black hover:underline"
          rel="noopener noreferrer"
        >
          @CoreyGinnivan ⤴
        </a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
