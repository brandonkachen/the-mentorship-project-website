import React from "react"

const NextBatchPage = () => (
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article
        class="tile is-child box"
        style={{ border: "4px solid mediumslateblue" }}
      >
        <p class="title">General Requirements</p>
        <p>
          Mentors and mentors are required have virtual calls for 1-2 hours per
          week to plan and assess their progress, for 10 consecutive weeks. They
          are also required to join all-hands meetings for 1 hour every 3 or 4
          weeks.
        </p>
      </article>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box" style={{ border: "4px solid gold" }}>
        <p class="title">Mentees we're looking for</p>
        <p>
          <span role="img" aria-label="construction-signs">
            🚧🚧🚧
          </span>
          We're under construction right now, please check back soon.
          <span role="img" aria-label="construction-sign">
            🚧🚧🚧
          </span>
        </p>
      </article>
    </div>
    <div class="tile is-parent">
      <article
        class="tile is-child box"
        style={{ border: "4px solid turquoise" }}
      >
        <p class="title">Mentors we're looking for</p>
        <div class="content">
          {/* <p>
            Mentees are required to spend 3-6 hours per week on their projects,
            in addition to the call once per week.
          </p> */}
          <p>
            <span role="img" aria-label="construction-signs">
              🚧🚧🚧
            </span>
            We're under construction right now, please check back soon.
            <span role="img" aria-label="construction-sign">
              🚧🚧🚧
            </span>
          </p>
        </div>
      </article>
    </div>
  </div>
)

export default NextBatchPage
