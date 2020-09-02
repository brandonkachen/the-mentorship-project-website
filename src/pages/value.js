import React from "react"
import PaginationComp from "../components/pagination"

const ValuePage = () => {
  const pages = [
    <div className="content is-value-page">
      <p className="subtitle">
        For Mentors{" "}
        <span role="img" aria-label="owl">
          🦉
        </span>
      </p>
      <div className="tile is-ancestor">
        <div className="tile is-1 is-parent" />
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="subtitle">
              <b>Impart Your Knowledge</b>
            </p>
            <p>
              Mentors give to the next generation by sharing their knowledge and
              advice to their mentees.{" "}
              <span role="img" aria-label="flashlight">
                🔦
              </span>
            </p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="subtitle">
              <b>Grow Your Leadership Skills</b>
            </p>
            <p>
              Mentors continually chart out plans for their mentees based on
              their progress, teach their mentees new skills, and support their
              mentee when they run into problems.{" "}
              <span role="img" aria-label="map">
                🗺️
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
              You'll form strong bonds with your fellow batch members that help
              grow your professional network. You'll also have access to our
              alumni network from our past batches.{" "}
              <span role="img" aria-label="globe">
                🌎
              </span>
            </p>
          </article>
        </div>
        <div className="tile is-1 is-parent" />
      </div>
    </div>,
    <div className="content is-value-page">
      <p className="subtitle">
        For Mentees{" "}
        <span role="img" aria-label="koinobori">
          🎏
        </span>
      </p>
      <div className="tile is-ancestor">
        <div className="tile is-1 is-parent" />

        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="subtitle">
              <b>Kickstart your career</b>
            </p>
            <p>
              You'll learn more about a new field you may wish to build a career
              in. Past mentees have learned about computer science, design, and
              business.{" "}
              <span role="img" aria-label="briefcase">
                💼
              </span>
            </p>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="subtitle">
              <b>Grow Your Porfolio</b>
            </p>
            <p>
              You'll work on a 10 week project that you brainstorm with your
              mentor. This project will look great on your resume!{" "}
              <span role="img" aria-label="card index dividers">
                🗂️
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
              You'll form strong bonds with your fellow batch members that help
              grow your professional network. You'll also have access to our
              alumni network from our past batches.{" "}
              <span role="img" aria-label="globe">
                🌎
              </span>
            </p>
          </article>
        </div>
        <div className="tile is-1 is-parent" />
      </div>
    </div>,
  ]

  return <PaginationComp title="The Value of a TMP Mentorship" pages={pages} />
}

export default ValuePage
