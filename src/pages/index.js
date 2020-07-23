import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">What do we do?</p>
              <p class="subtitle">Top tile</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">How do we do mentorship?</p>
              <p class="subtitle">Bottom tile</p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Who we serve</p>
              <p class="subtitle">With an image</p>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">Our Value</p>
            <p class="subtitle">Aligned with the right tile</p>
            <div class="content">
              <p>stuff</p>
            </div>
          </article>
        </div>
      </div>
    </div>
    {/* <form
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
    </form> */}
  </Layout>
)

export default IndexPage
