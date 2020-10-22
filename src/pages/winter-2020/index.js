import React, { Component } from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

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
              {/* <p className="subtitle">
                Follow these instructions if you're interested in applying to be
                a mentee for our Winter 2020 Batch.{" "}
                <span role="img" aria-label="memo">
                  📝
                </span>
              </p> */}
              <ol>
                <li>Read through the mini bios of the mentors below.</li>
                <li>
                  Fill out this{" "}
                  <a
                    href="https://forms.gle/bRHAdhMBPo9wAtSFA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    application
                  </a>
                  .
                </li>
              </ol>
              <p>
                We'll contact you afterwards if we'd like to move forward with
                your application. Please be aware that we have very limited
                capacity so we will not be able to accept everyone.
              </p>
            </article>
          </div>
        </div>

        {/* <div className="section" /> */}

        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article
              className="tile is-child box content"
              style={{ border: "2px solid turquoise" }}
            >
              <p className="title">Mentors for Winter 2020</p>
              <p className="subtitle">
                Mentees will select which mentor they wish to work with in their{" "}
                <a
                  href="https://forms.gle/bRHAdhMBPo9wAtSFA"
                  target="_blank"
                  rel="noreferrer"
                >
                  application
                </a>
                .{" "}
                <span role="img" aria-label="check mark button">
                  ✅
                </span>
              </p>
              <div className="content is-value-page">
                <div className="tile is-ancestor">
                  <div className="tile is-1 is-parent" />
                  <div className="tile is-parent is-vertical">
                    <article className="tile is-child box">
                      <p className="subtitle">
                        <b>Jamika Martin</b>
                      </p>
                      <p>
                        Hi, I'm Jamika, the founder of{" "}
                        <a
                          href="https://www.rosenskincare.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          ROSEN Skincare
                        </a>
                        ! As the founder of ROSEN, my experience pretty much
                        runs all over the place, but my areas of "expertise" are
                        in the realms of product development, digital marketing,
                        branding and building bootstrapped brands.{" "}
                        <span role="img" aria-label="lotion bottle">
                          🧴
                        </span>
                      </p>
                      <p>
                        I'm passionate about creative solutions to daily
                        problems, especially those in the product form.{" "}
                        <span role="img" aria-label="package">
                          📦
                        </span>
                      </p>
                      <p>
                        I graduated from UCLA with a Bachelors in Business
                        Economics in 2017 and have been in the startup space
                        ever since!{" "}
                        <span role="img" aria-label="school">
                          🏫
                        </span>
                      </p>
                    </article>
                    <article className="tile is-child box">
                      <p className="subtitle">
                        <b>Leehans Tang</b>
                      </p>
                      <p>
                        Hi, I'm Leehans! As a former biomedical technician, I
                        repaired medical equipment such as ventilators, infusion
                        pumps, defibrillators, patient warmers/coolers, etc. at
                        facilities such as Cedars-Sinai and Kaiser Permanente.{" "}
                        <span role="img" aria-label="clamp">
                          🗜️
                        </span>
                      </p>
                      <p>
                        As a current Administrative Manager for{" "}
                        <a
                          href="https://gmequipment.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          General Medical Equipment
                        </a>{" "}
                        and{" "}
                        <a
                          href="http://www.trytouchservices.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Try Touch Service
                        </a>
                        , I primarily focus on business
                        growth/strategy/marketing and management.{" "}
                        <span role="img" aria-label="package">
                          📦
                        </span>
                      </p>
                      <p>
                        I graduated from UCLA with a Bachelors in Economics in
                        2017 and have been in the startup space ever since!{" "}
                        <span role="img" aria-label="school">
                          🏫
                        </span>
                      </p>
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <p className="subtitle">
                        <b>Expand Your Network</b>
                      </p>
                      <p>
                        You'll form strong bonds with your fellow batch members
                        that help grow your professional network. You'll also
                        have access to our alumni network from our past batches.{" "}
                        <span role="img" aria-label="globe">
                          🌎
                        </span>
                      </p>
                    </article>
                  </div>
                  <div className="tile is-1 is-parent" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
