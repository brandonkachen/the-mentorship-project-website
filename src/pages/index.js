import React from "react"

import Layout from "../components/layout"
import logo from "../images/logo.png"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <section class="hero is-medium has-text-centered">
        <div class="hero-body">
          <div class="container">
            <img
              class="rounded"
              src={logo}
              alt="The Mentorship Project"
              style={{ height: 150 }}
            />
            <h1 class="title">The Mentorship Project</h1>
            <h2 class="subtitle">
              A one-on-one mentorship program connecting students with industry
              professionals.
            </h2>
          </div>
        </div>
      </section>
      {/* <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Mission Statement</h1>
          </div>
        </div>
      </section> */}
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <h1>What do we do?</h1>
                {/* <p class="subtitle">Top tile</p> */}
                <p>
                  We create one-on-one mentorship experiences that inspire
                  personal and professional growth for our mentors and mentees.
                </p>
              </article>
              <article class="tile is-child notification is-warning">
                <h1>Who we serve</h1>
                <p>
                  Our target audience for mentees are high schoolers who are
                  self-driven and are interested in building projects. Our
                  target audience for mentors are industry professionals who can
                  use their experience to guide mentees through their projects.
                </p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child message is-info">
                {/* <h1>How do we do mentorship?</p> */}
                <div class="message-header">How do we do mentorship?</div>
                {/* <p class="subtitle">Bottom tile</p> */}
                <div class="message-body">
                  We match a mentee to a mentor who has skills in a field that
                  the mentee wishes to learn about. They then brainstorm a
                  project together, and the mentee spends the rest of the
                  program building it with guidance from their mentor. During
                  this time, they regularly meet with other mentor-mentee pairs
                  to discuss their progress and provide feedback and support to
                  one another. At the end of the program, the mentee gives a
                  presentation on their project to demonstrate their new
                  knowledge and skills gained through their mentorship.
                </div>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-success">
              <h1>Our Value</h1>
              <div class="content">
                <p>
                  Mentees learn hard skills related to the field they’re
                  learning about, improve soft skills like communication and
                  creativity, and grow their confidence in their own abilities
                  to complete difficult projects. Mentors experience selfless
                  joy from watching their mentees grow, reminisce about their
                  own highschool days, and feel a sense of giving back to the
                  next generation.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="box">
        <p>Let's get in touch!</p>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="e.g Alex Smith" />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
              />
            </div>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  </>
)

export default IndexPage
