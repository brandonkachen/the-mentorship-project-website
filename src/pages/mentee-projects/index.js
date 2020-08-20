import React from "react"
import ProjectsComp from "./projects"

const MenteeProjectsPage = () => (
  <>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article
          class="tile is-child box"
          style={{ border: "3px solid mediumslateblue" }}
        >
          {/* <h1 class="title">Project Showcase</h1> */}
          {/* <p class="subtitle">Our past mentees' projects.</p> */}
          <ProjectsComp />
        </article>
      </div>
    </div>
  </>
)

export default MenteeProjectsPage
