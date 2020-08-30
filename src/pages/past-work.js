import React from "react"
import TestimonialsPage from "./testimonials"
import MenteeProjectsPage from "./mentee-projects/index"

const PastWorkPage = () => (
  <>
    {/* <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article
          class="tile is-child box"
          style={{ border: "3px solid mediumslateblue" }}
        >
          <p class="title">Our first batch</p>

          <p>
            Our first batch consisted of three mentees and three mentors. Each
            pair worked on projects in design, business, or computer science.
          </p>
        </article>
      </div>
    </div> */}
    <MenteeProjectsPage />

    <TestimonialsPage />
  </>
)

export default PastWorkPage
