import React from "react"
import TestimonialsPage from "./testimonials"
import MenteeProjectsPage from "./mentee-projects/index"

const PastWorkPage = () => (
  <>
    {/* <div className="tile is-ancestor">
      <div className="tile is-parent">
        <article
          className="tile is-child box"
          style={{ border: "2px solid mediumslateblue" }}
        >
          <p className="title">Our first batch</p>

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
