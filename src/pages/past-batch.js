import React from "react"
import ProjectShowcasePage from "./project-showcase"
import QuotesPage from "./quotes"

const PastBatchPage = () => (
  <>
    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <article
          className="tile is-child box"
          style={{ border: "2px solid mediumslateblue" }}
        >
          <ProjectShowcasePage />
        </article>
      </div>
    </div>

    <div className="tile is-ancestor">
      <div className="tile is-7 is-parent">
        <article
          className="tile is-child box content"
          style={{ border: "2px solid turquoise" }}
        >
          <h1 className="title">Some Stats</h1>
          <div className="tile is-ancestor">
            <div className="tile is-1 is-parent" />
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="subtitle">
                  Number of <b>Mentees</b>
                </p>
                <p>3</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="subtitle">
                  Number of <b>Mentors</b>
                </p>
                <p>3</p>
              </article>
            </div>
            <div className="tile is-1 is-parent" />
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-1 is-parent" />

            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="subtitle">Overall satisfaction rate</p>
                <p>100%</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="subtitle">
                  Enjoyment working with other mentees and mentors
                </p>
                <p>5/5</p>
              </article>
            </div>
            <div className="tile is-1 is-parent" />
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-1 is-parent" />
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="subtitle">
                  % of mentees who felt TMP helped improve their{" "}
                  <b>communication skills. </b>
                </p>
                <p>100%</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="subtitle">
                  % of mentees who felt TMP taught them new{" "}
                  <b>technical skills. </b>
                </p>
                <p>100%</p>
              </article>
            </div>
            <div className="tile is-1 is-parent" />
          </div>
        </article>
      </div>
      <div className="tile is-parent">
        <article
          className="tile is-child box content"
          style={{ border: "2px solid gold" }}
        >
          <QuotesPage />
        </article>
      </div>
    </div>
  </>
)

export default PastBatchPage
