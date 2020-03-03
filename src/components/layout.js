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
    <>
      <main className="p-12">{children}</main>
      <footer className="fled flex-row items-center p-12 mt-auto">
        © {new Date().getFullYear()}, Crafted with{" "}
        <img
          src={Disapproval}
          alt="Disapproval"
          width="20"
          className="inline-block"
        />{" "}
        by{" "}
        <a
          href="https://twitter.com/CoreyGinnivan"
          target="_blank"
          className="font-semibold text-black hover:underline"
        >
          @CoreyGinnivan
        </a>
        .
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
