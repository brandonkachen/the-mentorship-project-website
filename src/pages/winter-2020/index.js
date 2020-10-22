import React, { Component } from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MentorBios from "../../misc/winter-2020/mentor-bios"
import NextBatchPage from "./next-batch"

const MenteeApp = "https://forms.gle/bRHAdhMBPo9wAtSFA"

const MentorBioComp = ({ name, pic, bio }) => {
  return (
    <article className="tile is-child box">
      <p className="subtitle">
        <b>{name}</b>
      </p>
      <div className="tile is-parent">
        <div class="card-image is-vertical-center has-text-centered">
          <div className="tile is-child">
            <figure class="image is-128x128 is-inline-block">
              <img className="is-rounded" src={pic} alt="Brandon" />
            </figure>
          </div>
        </div>
        <div className="tile is-child">{bio}</div>
      </div>
    </article>
  )
}

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article
              className="tile is-child box content"
              style={{ border: "2px solid gold" }}
            >
              <p className="title">
                Instructions for Mentee Applications (Winter 2020)
              </p>
              <ol>
                <li>Read through the mini bios of the mentors below.</li>
                <li>
                  Fill out this{" "}
                  <a href={MenteeApp} target="_blank" rel="noreferrer">
                    application
                  </a>
                  .
                </li>
                <li>
                  Don't worry! We may take up to a week to read through your
                  submission but we will reach out to <b>everyone</b> who
                  applied.
                </li>
              </ol>
              <p>
                Note: If we'd like to move forward with you, we'll set up a time
                for an interview. However, please be aware that we have very
                limited capacity so we will not be able to accept everyone.
              </p>
            </article>
          </div>
        </div>

        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article
              className="tile is-child box content"
              style={{ border: "2px solid turquoise" }}
            >
              <p className="title">Mentors for Winter 2020</p>
              <p className="subtitle">
                Hey there!{" "}
                <span role="img" aria-label="waving hand">
                  👋
                </span>
              </p>
              <div className="tile is-ancestor">
                <div className="tile is-1 is-parent" />
                <div className="tile is-parent is-vertical">
                  {MentorBios.map(item => (
                    <MentorBioComp
                      name={item.name}
                      pic={item.pic}
                      bio={item.bio}
                    />
                  ))}
                </div>
                <div className="tile is-1 is-parent" />
              </div>
              <div class="has-text-centered">
                <a href={MenteeApp} target="_blank" rel="noreferrer">
                  <button class="button is-primary is-outlined">
                    Apply Now
                  </button>
                </a>
              </div>
            </article>
          </div>
        </div>

        <section className="section" />

        <NextBatchPage />
      </Layout>
    )
  }
}

export default IndexPage
