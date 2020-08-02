import React from "react"

import Layout from "../components/layout"
import logo from "../images/logo.png"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="hero is-small has-text-left">
      <div class="hero-body">
        <div class="container">
          <img
            class="rounded"
            src={logo}
            alt="The Mentorship Project"
            style={{ height: 150 }}
          />
          <div class="dropdown is-hoverable is-right is-pulled-right">
            <div class="dropdown-trigger">
              <button
                class="button menu"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <span>menu</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <a href="#" class="dropdown-item">
                  Dropdown item
                </a>
                <a class="dropdown-item">Other dropdown item</a>
                <a href="#" class="dropdown-item is-active">
                  Active dropdown item
                </a>
                <a href="#" class="dropdown-item">
                  Other dropdown item
                </a>
                <hr class="dropdown-divider" />
                <a href="#" class="dropdown-item">
                  With a divider
                </a>
              </div>
            </div>
          </div>

          {/* <h1 class="title">The Mentorship Project</h1> */}
          <h2 class="subtitle">
            A one-on-one mentorship program connecting students with industry
            professionals.
          </h2>
        </div>
      </div>
    </section>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-3">
        <article
          class="tile is-child box"
          style={{ border: "5px solid turquoise" }}
        >
          <h1 class="title">What is this program?</h1>
          {/* <p class="subtitle">Glad you asked!</p> */}
          <div class="content">
            <p>
              TMP is a one-on-one virtual mentorship program connecting mentees
              who are high school students with mentors who are industry
              professionals.
            </p>
          </div>
        </article>
      </div>
      <div class="tile is-parent">
        <article
          class="tile is-child box"
          style={{ border: "5px solid turquoise" }}
        >
          <h1 class="title">How does it work?</h1>
          <p class="subtitle">There are four distinct phases to the project.</p>
          <div class="content">
            <ol>
              <li>
                <b>Connect</b> – First, each mentee be paired with a mentor
                based on interest and compatibility. 🔗{" "}
              </li>
              <li>
                <b>Brainstorm</b> – Together, pair will come up with a project
                idea that will take 8 weeks to build. 📆
              </li>{" "}
              <li>
                <b>Build</b> – Each pair meets (virtually) once a week to
                discuss the mentee's project and progress. 🤝 Mentors will help
                their mentees get up to speed on their field of expertise.
                Mentees work on their own projects for 3-6 hours per week
                between check-ins. 📝 Each mentee also share their progress to
                their fellow students every other week. 💬
              </li>{" "}
              <li>
                <b>Present</b> At the end of the program, you will present your
                work to our entire group. We will host a (virtual) celebration
                for you and your mentors. 🎉
              </li>
            </ol>
          </div>
        </article>
      </div>
      {/* <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Mentors</h1>
          <div class="content">
            <p>
              Mentors guide their mentees throughout by providing advice and
              accountability, pushing them to tackle difficult problems, and
              watching for pitfalls along the way.{" "}
            </p>
          </div>
        </article>
      </div> */}
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <p class="title">Who do you serve?</p>
          <p class="subtitle">Subtitle</p>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut.
            </p>
          </div>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child message is-info">
          {/* <p class="title">How do we do mentorship?</p> */}
          <div class="message-header">How do we do mentorship?</div>
          {/* <p class="subtitle">Bottom tile</p> */}
          <div class="message-body">
            We match a mentee to a mentor who has skills in a field that the
            mentee wishes to learn about. They then brainstorm a project
            together, and the mentee spends the rest of the program building it
            with guidance from their mentor. During this time, they regularly
            meet with other mentor-mentee pairs to discuss their progress and
            provide feedback and support to one another. At the end of the
            program, the mentee gives a presentation on their project to
            demonstrate their new knowledge and skills gained through their
            mentorship.
          </div>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">Fourteen</p>
          <p class="subtitle">Subtitle</p>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut.
            </p>
          </div>
        </article>
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
)

export default IndexPage
