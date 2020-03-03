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
    <p className="w-full lg:w-2/3">
      Got a must-have idea for a memeoji? Submit your idea and I'll try to
      design it one day.
    </p>
    <p className="w-full lg:w-2/3">
      Alternatively, if you want to flex those Designer muscles of yours and
      help me out, then{" "}
      <a href="#" className="font-semibold text-black hover:underline" download>
        Download the Sketch file template
      </a>{" "}
      and upload your PNG below.
    </p>
    <form
      name="memeoji-submission"
      className="flex flex-col w-full lg:w-2/3"
      netlify
    >
      <label className="flex flex-col text-sm font-semibold mt-4">
        Suggested Memeoji Name*
        <input
          type="text"
          name="name"
          className="bg-gray-100 border border-gray-200 p-2 mt-2 rounded-lg font-normal"
          placeholder=":memeoji name:"
          required
        />
      </label>
      <label className="flex flex-col text-sm font-semibold mt-4">
        Link to meme or concept*
        <input
          type="text"
          name="name"
          className="bg-gray-100 border border-gray-200 p-2 mt-2 rounded-lg font-normal"
          placeholder="www.knowyourmeme.com/..."
          required
        />
      </label>
      <label className="flex flex-col text-sm font-semibold mt-4">
        Your Memeoji png (optional)
        <input
          type="file"
          name="name"
          className="bg-gray-100 border border-gray-200 p-2 mt-2 rounded-lg font-normal"
        />
      </label>

      <button
        type="submit"
        className="flex text-xs sm:text-base border-gray-900 border-4 py-2 px-4 rounded-lg text-center justify-center font-semibold hover:bg-gray-900 hover:text-white mt-6"
        style={{ width: "fit-content" }}
      >
        Submit Memeoji Idea
      </button>
      <span className="mt-4 text-sm text-gray-600">* Required Fields</span>
    </form>
  </Layout>
)

export default SecondPage
