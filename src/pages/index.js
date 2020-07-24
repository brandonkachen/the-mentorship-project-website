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
              {/* <p class="subtitle">Top tile</p> */}
              <p>
                We create one-on-one mentorship experiences that inspire
                personal and professional growth for our mentors and mentees.
              </p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">Who we serve</p>
              <p>
                Our target audience for mentees are high schoolers who are
                self-driven and are interested in building projects. Our target
                audience for mentors are industry professionals who can use
                their experience to guide mentees through their projects.
              </p>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">How do we do mentorship?</p>
              {/* <p class="subtitle">Bottom tile</p> */}
              <p>
                We match a mentee to a mentor who has skills in a field that the
                mentee wishes to learn about. They then brainstorm a project
                together, and the mentee spends the rest of the program building
                it with guidance from their mentor. During this time, they
                regularly meet with other mentor-mentee pairs to discuss their
                progress and provide feedback and support to one another. At the
                end of the program, the mentee gives a presentation on their
                project to demonstrate their new knowledge and skills gained
                through their mentorship.
              </p>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-danger">
            <p class="title">Our Value</p>
            <div class="content">
              <p>
                Mentees learn hard skills related to the field they’re learning
                about, improve soft skills like communication and creativity,
                and grow their confidence in their own abilities to complete
                difficult projects. Mentors experience selfless joy from
                watching their mentees grow, reminisce about their own
                highschool days, and feel a sense of giving back to the next
                generation.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">Let's talk!</p>
        {/* <a href="#" class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </a> */}
      </header>
      <div class="card-content">
        <div class="content">
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
            {/* <button type="submit">Send</button> */}
          </form>
        </div>
      </div>
      <footer class="card-footer">
        <button type="submit" class="button card-footer-item">
          Send
        </button>
      </footer>
    </div>
  </Layout>
)

export default IndexPage
