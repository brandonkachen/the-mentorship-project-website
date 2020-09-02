import React from "react"

const NextBatchPage = () => (
  <div className="tile is-ancestor">
    <div className="tile is-7 is-vertical is-parent">
      <article
        className="tile is-child content box"
        style={{ border: "2px solid mediumslateblue" }}
      >
        <p className="title">Mentor Requirements</p>
        <ul>
          <li>
            Able to dedicate 1-2 hours/week for 10 consecutive weeks to meet
            with their mentee.{" "}
            <span role="img" aria-label="telephone receiver">
              📞
            </span>
          </li>

          <li>
            Love teaching and guiding.{" "}
            <span role="img" aria-label="teacher">
              🧑‍🏫
            </span>
          </li>
        </ul>
      </article>
      <article
        className="tile is-child content box"
        style={{ border: "2px solid turquoise" }}
      >
        <p className="title">Mentees Requirements</p>
        <ul>
          <li>
            Able to dedicate 1-2 hours/week for 10 consecutive weeks to meet
            with their mentor.{" "}
            <span role="img" aria-label="telephone receiver">
              📞
            </span>
          </li>

          <li>
            Able to dedicate 3-6 hours/week for 8 consecutive weeks to work on
            their projects.{" "}
            <span role="img" aria-label="hourglass with flowing sand">
              ⏳
            </span>
          </li>

          <li>
            Learn quickly and effectively.{" "}
            <span role="img" aria-label="books">
              📚
            </span>
          </li>

          <li>
            Curious and eager to keep asking questions.{" "}
            <span role="img" aria-label="compass">
              🧭
            </span>
          </li>

          <li>
            Hard working.{" "}
            <span role="img" aria-label="tools">
              🛠
            </span>
          </li>

          <li>
            {" "}
            Love continually iterating on ideas.{" "}
            <span role="img" aria-label="heart heavy exclamation point">
              ❣️
            </span>
          </li>
        </ul>
      </article>
    </div>
    <div className="tile is-vertical is-parent">
      <article
        className="tile is-child box"
        style={{ border: "2px solid gold" }}
      >
        <p className="title">General Info</p>
        <div className="content">
          <p>
            🚧🚧🚧We're under construction right now, please check back
            soon.🚧🚧🚧
          </p>
        </div>
      </article>
      <article
        className="tile is-child box"
        style={{ border: "2px solid mediumslateblue" }}
      >
        <p className="title">Timeline</p>
        <div className="content">
          <p>
            🚧🚧🚧We're under construction right now, please check back
            soon.🚧🚧🚧
          </p>
          {/* <ul>
              <li>Mentor volunteer clearances begin: October 1st</li>

              <li>Program start: October 14th</li>
              <li>...</li>
            </ul> */}
        </div>
      </article>
    </div>
  </div>
)

export default NextBatchPage
