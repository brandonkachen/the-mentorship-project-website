import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello!</h1>
    <p>
      <span role="img" aria-label="Construction Sign">
        🚧🚧🚧
      </span>
      We're under construction right now, please check back soon.
      <span role="img" aria-label="Construction Sign">
        🚧🚧🚧
      </span>
    </p>
    <form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name">
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" name="email" id="email" />
      </label>
      <button type="submit">Send</button>
    </form>
  </Layout>
)

export default IndexPage
