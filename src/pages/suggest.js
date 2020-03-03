import React, { Component } from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby-link"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Cuteness from "../images/memeojis/cuteness_overload.png"

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class submission extends Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <SEO title="Suggest a Memeoji" />
        <Link to="/" className="mb-2" style={{ width: "fit-content" }}>
          <span className="mr-2">←</span>Back Home
        </Link>
        <h1>
          <img
            src={Cuteness}
            alt="Cuteness"
            width="40"
            className="inline-block mb-1 mr-2"
          />
          Suggest a Memeoji
        </h1>
        <p className="w-full lg:w-2/3">
          Got a must-have idea for a memeoji? Submit your idea and I'll try to
          design it one day.
        </p>
        <p className="w-full lg:w-2/3">
          Alternatively, if you want to flex those Designer muscles of yours and
          help me out, then{" "}
          <a
            href="https://drive.google.com/open?id=1aM3htZtpOTs6wuifzB7UOHQXQZWQjq-D"
            className="font-semibold text-black hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download the Sketch template ⤴
          </a>{" "}
          and upload your PNG below.
        </p>
        <form
          name="memeoji-submission"
          method="POST"
          className="flex flex-col w-full lg:w-2/3"
          data-netlify="true"
          action="/success/"
          netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="form-name" value="memeoji-submission" />
          <p class="hidden">
            <label>
              Don’t fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <label className="flex flex-col text-sm font-semibold mt-4">
            Suggested Memeoji Name*
            <input
              type={"text"}
              name={"memoji-name"}
              className="bg-white border border-2 border-gray-400 p-2 mt-2 rounded-lg font-normal"
              placeholder=":memeoji name:"
              required={true}
              onChange={this.handleChange}
            />
          </label>
          <label className="flex flex-col text-sm font-semibold mt-4">
            Link to meme or concept*
            <input
              type={"text"}
              name={"inspo-link"}
              className="bg-white border border-2 border-gray-400 p-2 mt-2 rounded-lg font-normal"
              placeholder="www.knowyourmeme.com/..."
              required={true}
              onChange={this.handleChange}
            />
          </label>
          <label className="flex flex-col text-sm font-semibold mt-4">
            Your Memeoji png (optional)
            <input
              type="file"
              name="upload"
              className="bg-white border border-2 border-gray-400 p-2 mt-2 rounded-lg font-normal"
              onChange={this.handleAttachment}
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
  }
}
