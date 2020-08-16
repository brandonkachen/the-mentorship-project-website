import React from "react"
import PaginationComp from "../components/pagination"

const NextBatchPage = () => (
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article
        class="tile is-child box"
        style={{ border: "3px solid turquoise" }}
      >
        <p class="title">Mentors we're looking for</p>
        <div class="content">
          <ul>
            <li>
              Able to dedicate 1-2 hours/week for 10 consecutive weeks to meet
              with their mentee. 📞
            </li>

            <li>Love teaching and guiding. 🧑‍🏫</li>
          </ul>
        </div>
      </article>
    </div>
    <div class="tile is-parent">
      <article
        class="tile is-child content box"
        style={{ border: "3px solid gold" }}
      >
        <p class="title">Mentees we're looking for</p>
        <ul>
          <li>
            Able to dedicate 1-2 hours/week for 10 consecutive weeks to meet
            with their mentor. 📞
          </li>

          <li>
            Able to dedicate 3-6 hours/week for 8 consecutive weeks to work on
            their projects. ⏳
          </li>

          <li>Learn quickly and effectively. 📚</li>

          <li>Curious and eager to keep asking questions. 🧭</li>

          <li>Hard working. 🛠</li>

          <li> Love continually iterating on ideas. ❣️</li>
        </ul>
      </article>
    </div>
  </div>
)

export default NextBatchPage
