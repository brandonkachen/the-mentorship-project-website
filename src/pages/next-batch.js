import React from "react"
import PaginationComp from "../components/pagination"

const MentorPage = (
  <>
    <p class="subtitle">
      Mentors{" "}
      <span role="img" aria-label="nerd face">
        🤓
      </span>
    </p>

    <ul>
      <li>
        Able to dedicate 1-2 hours/week for 10 consecutive weeks to meet with
        their mentee.{" "}
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
  </>
)

const MenteePage = (
  <>
    <p class="subtitle">
      Mentees{" "}
      <span role="img" aria-label="koinobori">
        🎏
      </span>
    </p>

    <ul>
      <li>
        Able to dedicate 1-2 hours/week for 10 consecutive weeks to meet with
        their mentor.{" "}
        <span role="img" aria-label="telephone receiver">
          📞
        </span>
      </li>

      <li>
        Able to dedicate 3-6 hours/week for 8 consecutive weeks to work on their
        projects.{" "}
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
  </>
)

const NextBatchPage = () => (
  <>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article
          class="tile is-child content box"
          style={{ border: "3px solid turquoise" }}
        >
          {/* <p class="title">Who we're looking for</p>
          <div class="tabs is-toggle is-centered">
            <ul>
              <li class="is-active">
                <a>
                  <span>Mentors</span>
                </a>
              </li>
              <li>
                <a>
                  <span>Mentees</span>
                </a>
              </li>
            </ul>
          </div> */}
          <PaginationComp
            title="Who we're looking for"
            pages={[MentorPage, MenteePage]}
          />
        </article>
      </div>
      <div class="tile is-parent">
        <article
          class="tile is-child box"
          style={{ border: "3px solid mediumslateblue" }}
        >
          <p class="title">Timeline</p>
          <div class="content">
            <ul>
              <li>Mentor volunteer clearances begin: October 1st</li>

              <li>Program start: October 14th</li>
              <li>...</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </>
)

export default NextBatchPage
